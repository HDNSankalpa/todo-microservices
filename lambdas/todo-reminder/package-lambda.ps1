$ErrorActionPreference = "Stop"

$lambdaDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$stageDir = Join-Path $lambdaDir ".package"
$zipPath = Join-Path $lambdaDir "todo-reminder.zip"

if (Test-Path $stageDir) {
  Remove-Item -Recurse -Force $stageDir
}
if (Test-Path $zipPath) {
  Remove-Item -Force $zipPath
}

New-Item -ItemType Directory -Path $stageDir | Out-Null
Copy-Item -Path (Join-Path $lambdaDir "index.js") -Destination $stageDir
Copy-Item -Path (Join-Path $lambdaDir "package.json") -Destination $stageDir

Push-Location $stageDir
npm install --omit=dev --no-package-lock --workspaces=false
Pop-Location

$tar = Get-Command tar.exe -ErrorAction SilentlyContinue
if ($tar) {
  & tar.exe -a -cf $zipPath -C $stageDir .
} else {
  Compress-Archive -Path (Join-Path $stageDir "*") -DestinationPath $zipPath -Force
}
Write-Host "Created $zipPath"
