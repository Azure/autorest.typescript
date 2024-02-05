#Requires -Version 7.0
param(
  [string] $BuildArtifactsPath,
  [switch] $UseTypeSpecNext
)

$ErrorActionPreference = 'Stop'
Set-StrictMode -Version 3.0
$root = (Resolve-Path "$PSScriptRoot/../..").Path.Replace('\', '/')
. "$root/eng/scripts/CommandInvocation-Helpers.ps1"
Set-ConsoleEncoding

Push-Location $root
try {
  # install and list npm packages
  if ($BuildArtifactsPath) {
    $lockFilesPath = Resolve-Path "$BuildArtifactsPath/lock-files"
    # if we were passed a build_artifacts path, use the package.json and pnpm-lock.yaml from there
    Write-Host "Using emitter/package.json and pnpm-lock.yaml from $lockFilesPath"
    Copy-Item "$lockFilesPath/pnpm-lock.yaml" './common/config/rush/pnpm-lock.yaml' -Force
    Copy-Item "$lockFilesPath/emitter/package.json" './packages/typespec-ts/package.json' -Force
  }
  elseif ($UseTypeSpecNext) {
    Write-Host "Using TypeSpec.Next"
    Invoke-LoggedCommand "npx -y @azure-tools/typespec-bump-deps@latest --use-peer-ranges ./packages/typespec-ts/package.json"
  }

  Invoke-LoggedCommand "node common/scripts/install-run-rush.js update"

  Invoke-LoggedCommand "npm list --all"

  $artifactStagingDirectory = $env:Build_ArtifactStagingDirectory
  if ($artifactStagingDirectory -and !$BuildArtifactsPath) {
    $lockFilesPath = "$artifactStagingDirectory/lock-files"
    New-Item -ItemType Directory -Path "$lockFilesPath/emitter" | Out-Null
        
    Write-Host "Copying typespec-ts/package.json and pnpm-lock.yaml to $lockFilesPath"
    Copy-Item './common/config/rush/pnpm-lock.yaml' "$lockFilesPath/pnpm-lock.yaml" -Force
    Copy-Item './packages/typespec-ts/package.json' "$lockFilesPath/emitter/package.json" -Force
  }
}
finally {
  Pop-Location
}
