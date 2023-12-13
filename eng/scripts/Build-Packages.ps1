#Requires -Version 7.0
param(
  [string] $BuildNumber,
  [string] $Output,
  [switch] $Prerelease,
  [switch] $PublishInternal
)

$ErrorActionPreference = 'Stop'
Set-StrictMode -Version 3.0
$root = (Resolve-Path "$PSScriptRoot/../..").Path.Replace('\', '/')
. "$root/eng/scripts/CommandInvocation-Helpers.ps1"
Set-ConsoleEncoding

$artifactsPath = "$root/artifacts"
$outputPath = $Output ? $Output : "$artifactsPath/ci-build"

$packagesPath = New-Item "$outputPath/packages" -ItemType Directory -Force

function UpdatePackage($name, $path) {
  Push-Location $path
  try {
    $version = (Get-Content "./package.json" -Raw | ConvertFrom-Json).version

    if ($Prerelease) {
      $version = "$($version.Split('-')[0])-preview.$BuildNumber"
      Invoke-LoggedCommand "npm version --allow-same-version --no-git-tag-version $version"
    }

    $packageMatrix[$name] = $version
  }
  finally {
    Pop-Location
  }
}

function PackPackage($path) {
  Push-Location $path
  try {
    Invoke-LoggedCommand "node ../../common/scripts/install-run-rush.js build"
    Invoke-LoggedCommand "node ../../common/scripts/install-run-rush-pnpm.js pack -q --pack-destination $packagesPath"
  }
  finally {
    Pop-Location
  }
}

$packageMatrix = @{}

UpdatePackage "common" "$root/packages/rlc-common"
UpdatePackage "generator" "$root/packages/autorest.typescript"
UpdatePackage "emitter" "$root/packages/typespec-ts"

PackPackage "$root/packages/rlc-common"
PackPackage "$root/packages/autorest.typescript"
PackPackage "$root/packages/typespec-ts"

if ($PublishInternal) {
  $feedUrl = "https://pkgs.dev.azure.com/azure-sdk/public/_packaging/azure-sdk-for-js-test-autorest/npm/registry"

  $overrides = @{
    "@autorest/typescript"     = "$feedUrl/@autorest/typescript/-/typescript-$($packageMatrix['generator']).tgz"
    "@azure-tools/typespec-ts" = "$feedUrl/@azure-tools/typespec-ts/-/typespec-ts-$($packageMatrix['emitter']).tgz"
    "@azure-tools/rlc-common"  = "$feedUrl/@azure-tools/rlc-common/-/rlc-common-$($packageMatrix['common']).tgz"
  }
}
else {
  $overrides = @{}
}

$packageMatrix | ConvertTo-Json | Set-Content "$outputPath/package-versions.json"
$overrides | ConvertTo-Json | Set-Content "$outputPath/overrides.json"
