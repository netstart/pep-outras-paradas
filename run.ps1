# ==============================================================
# run.ps1 — Atalho para compilar e executar o Peptide Lab
# em produção no emulador Android.
#
# Uso:
#   .\run.ps1
#
# Apresenta um menu com os três modos do android-release.ps1.
# ==============================================================
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$releaseScript = Join-Path $root "scripts\android-release.ps1"

if (-not (Test-Path $releaseScript)) {
    throw "Script não encontrado: $releaseScript"
}

Write-Host ""
Write-Host "Peptide Lab — Build de Produção (Android Emulator)" -ForegroundColor Cyan
Write-Host "--------------------------------------------------------"
Write-Host "  1) Produção com escolha interativa do AVD"
Write-Host "  2) Especificando o AVD (Redmi_Note_14_Pro_Plus_5G)"
Write-Host "  3) Só instalar/lançar (se já compilou antes) — -SkipBuild"
Write-Host "  0) Sair"
Write-Host ""
$choice = Read-Host "Escolha uma opção"

switch ($choice) {
    "1" {
        & powershell -ExecutionPolicy Bypass -File $releaseScript
    }
    "2" {
        & powershell -ExecutionPolicy Bypass -File $releaseScript -Avd Redmi_Note_14_Pro_Plus_5G
    }
    "3" {
        & powershell -ExecutionPolicy Bypass -File $releaseScript -SkipBuild
    }
    "0" {
        Write-Host "Saindo."
        exit 0
    }
    default {
        throw "Opção inválida: '$choice'"
    }
}
