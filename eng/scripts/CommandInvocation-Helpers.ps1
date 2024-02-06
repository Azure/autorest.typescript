#Requires -Version 7.0
Set-StrictMode -Version 3.0

function Set-ConsoleEncoding {
  [CmdletBinding()]
  param
  (
    [string] $Encoding = 'utf-8'
  )

  $outputEncoding = [System.Text.Encoding]::GetEncoding($Encoding)
  [Console]::OutputEncoding = $outputEncoding
  [Console]::InputEncoding = $outputEncoding
}

function Invoke-LoggedCommand {
  [CmdletBinding()]
  param(
    [Parameter(Mandatory = $true)]
    [string] $Command,

    [ValidateScript({ Test-Path $_ -PathType Container })]
    [string] $ExecutePath,

    [switch] $IgnoreExitCode
  )

  $width = [Math]::Min($Host.UI.RawUI.WindowSize.Width ?? 80, 80)
  $separator = '=' * $width
  $startTime = Get-Date

  Push-Location $ExecutePath
  try {
    Write-Host "$separator`n$PWD> $Command`n$separator"
    Invoke-Expression $Command

    $duration = (Get-Date) - $startTime
    $separator = '-' * $width

    if ($IgnoreExitCode -or $LASTEXITCODE -eq 0) {
      Write-Host "$separator`nExit Code: $LASTEXITCODE, Duration: $duration`n$separator`n"
    }
    else {
      Write-Error "$separator`nExit Code: $LASTEXITCODE, Duration: $duration`n$Command`n$separator`n"
    }
  }
  finally {
    Pop-Location
  }
}
