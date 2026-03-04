import os
import re

root_dir = r"e:\Durgesh work\ex serviceman"
href_pat = re.compile(r'(?:href|src|data-bg-image)\s*=\s*[\'"`]\s*([^\'"`\n\r]+?)\s*[\'"`]', re.I)

broken = []

for dirpath, _, filenames in os.walk(root_dir):
    for f in filenames:
        if f.endswith('.html') or f.endswith('.js'):
            filepath = os.path.join(dirpath, f)
            with open(filepath, 'r', encoding='utf-8', errors='ignore') as file:
                content = file.read()
                matches = href_pat.findall(content)
                for link in matches:
                    clean_link = link.strip()
                    if clean_link.startswith(('http', 'mailto:', 'tel:', '#', '//', 'javascript:')):
                        continue
                    if '?' in clean_link: clean_link = clean_link.split('?')[0]
                    if '#' in clean_link: clean_link = clean_link.split('#')[0]
                    
                    if clean_link.startswith('${root}'):
                        clean_link = clean_link.replace('${root}', '')
                        temp_dest = os.path.normpath(os.path.join(root_dir, clean_link.lstrip('/\\')))
                    elif clean_link.startswith('/'):
                        temp_dest = os.path.normpath(os.path.join(root_dir, clean_link.lstrip('/\\')))
                    else:
                        temp_dest = os.path.normpath(os.path.join(dirpath, clean_link))
                        
                    if not os.path.exists(temp_dest) and clean_link:
                        broken.append(f"{os.path.relpath(filepath, root_dir)} -> {link} (Expected: {temp_dest})")

with open(os.path.join(root_dir, 'broken_links.txt'), 'w', encoding='utf-8') as out:
    for b in broken:
        out.write(b + '\n')
print("Done writing broken_links.txt")
