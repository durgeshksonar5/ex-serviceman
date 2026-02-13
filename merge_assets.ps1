
$sources = @(
    "c:\Users\Hp\OneDrive\Desktop\ex serviceman\about\assets",
    "c:\Users\Hp\OneDrive\Desktop\ex serviceman\contact\assets",
    "c:\Users\Hp\OneDrive\Desktop\ex serviceman\service\assets",
    "c:\Users\Hp\OneDrive\Desktop\ex serviceman\service-subpage\assets"
)
$dest = "c:\Users\Hp\OneDrive\Desktop\ex serviceman\assets"

if (-not (Test-Path $dest)) {
    New-Item -ItemType Directory -Path $dest | Out-Null
}

foreach ($source in $sources) {
    if (Test-Path $source) {
        Write-Host "Merging $source into $dest..."
        Get-ChildItem -Path $source -Recurse | ForEach-Object {
            $relativePath = $_.FullName.Substring((Resolve-Path $source).Path.Length)
            $targetPath = Join-Path $dest $relativePath
            
            if ($_.PSIsContainer) {
                if (-not (Test-Path $targetPath)) {
                    New-Item -ItemType Directory -Path $targetPath | Out-Null
                    Write-Host "Created directory: $targetPath"
                }
            } else {
                if (-not (Test-Path $targetPath)) {
                    Copy-Item $_.FullName -Destination $targetPath
                    Write-Host "Copied file: $relativePath"
                }
            }
        }
    }
}
Write-Host "Merge complete."
