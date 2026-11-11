
$count = [int](read-host "Enter a number of folders: ")

$root = (Get-Location).Path

for ($i = 1; $i -le $count; $i++) {
    $module_dir = Join-Path $root "module$i"
    New-Item -ItemType Directory -Path $module_dir -Force | Out-Null

    for ($t = 1; $t -le 4; $t++) {
        $child_dir = Join-Path $module_dir "teht$t"
        New-Item -ItemType Directory -Path $child_dir | Out-Null

        $html_file = Join-Path $child_dir "teht$t.html"
        $css_file = Join-Path $child_dir "teht$t.css"
        $js_file = Join-Path $child_dir "teht$t.js"
        New-Item -ItemType File -Path $html_file | Out-Null
        New-Item -ItemType File -Path $css_file | Out-Null
        New-Item -ItemType File -Path $js_file | Out-Null

        $html = @"
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>teht$t</title>
            </head>
            <body>
            <script src="teht$t.js"/>
                
            </body>
            </html>
"@

        Set-Content -Path $html_file -Value $html
        Write-Host "Folder created: $module_dir"
    }
    
    Write-Host "All set!"
    Write-Host "The files created in $root"
}