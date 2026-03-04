import os
import re

root_dir = r"e:\Durgesh work\ex serviceman"
url_pat = re.compile(r'url\s*\(\s*[\'"`]?\s*([^\'"`\)\n\r]+?)\s*[\'"`]?\s*\)', re.I)

broken = []

for dirpath, _, filenames in os.walk(root_dir):
    for f in filenames:
        if f.endswith('.css'):
            filepath = os.path.join(dirpath, f)
            with open(filepath, 'r', encoding='utf-8', errors='ignore') as file:
                content = file.read()
                matches = url_pat.findall(content)
                for link in matches:
                    clean_link = link.strip()
                    if clean_link.startswith(('http', 'data:')):
                         continue
                    if '?' in clean_link: clean_link = clean_link.split('?')[0]
                    if '#' in clean_link: clean_link = clean_link.split('#')[0]
                    
                    if clean_link.startswith('/'):
                        temp_dest = os.path.normpath(os.path.join(root_dir, clean_link.lstrip('/\\')))
                    else:
                        temp_dest = os.path.normpath(os.path.join(dirpath, clean_link))
                        
                    if not os.path.exists(temp_dest) and clean_link:
                        broken.append(f"{os.path.relpath(filepath, root_dir)} -> {link}")

with open(os.path.join(root_dir, 'broken_css_links.txt'), 'w', encoding='utf-8') as out:
    for b in broken:
        out.write(b + '\n')
print("Done writing broken_css_links.txt")
