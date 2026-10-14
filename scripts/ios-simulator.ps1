# ==============================================================
# ios-simulator.ps1 — Validação manual no simulador iOS.
# ATENÇÃO: simulador iOS exige macOS + Xcode. Em Windows este
# script explica as alternativas.
# ==============================================================
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$appDir = Join-Path $root "peptide-lab"

Write-Host "==> Simulador iOS não existe no Windows." -ForegroundColor Yellow
Write-Host ""
Write-Host "Opções para validar no iOS:"
Write-Host "  1) macOS com Xcode: no diretório do projeto, rode:"
Write-Host "       npx expo start --ios"
Write-Host "  2) Dispositivo físico iPhone: instale o Expo Go na App Store e rode:"
Write-Host "       npx expo start   (depois escaneie o QR code)"
Write-Host "  3) Build de desenvolvimento na nuvem: npx eas build --profile development --platform ios"
Write-Host ""

if (Test-Path $appDir) {
    $resp = Read-Host "Deseja iniciar o Metro bundler agora (para usar com Expo Go ou Mac na rede)? [s/N]"
    if ($resp -match "^[sS]") {
        Push-Location $appDir
        try { npx expo start --tunnel } finally { Pop-Location }
    }
} else {
    throw "Projeto não existe. Rode primeiro: scripts\setup.ps1"
}
