# ==============================================================
# validate.ps1 — Rodada completa de QA:
#   1) lint  2) typecheck  3) testes  4) abre emulador p/ validação manual
# Uso: powershell -ExecutionPolicy Bypass -File scripts\validate.ps1 [-SkipEmulator]
# ==============================================================
param([switch]$SkipEmulator)
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$appDir = Join-Path $root "peptide-lab"

if (-not (Test-Path $appDir)) { throw "Projeto não existe. Rode primeiro: scripts\setup.ps1" }

Push-Location $appDir
$failed = $false
try {
    Write-Host "==> [1/3] Lint..." -ForegroundColor Cyan
    npm run lint --if-present
    if ($LASTEXITCODE -ne 0) { $failed = $true; Write-Host "    Lint FALHOU" -ForegroundColor Red }

    Write-Host "==> [2/3] Typecheck..." -ForegroundColor Cyan
    npm run typecheck --if-present
    if ($LASTEXITCODE -ne 0) { $failed = $true; Write-Host "    Typecheck FALHOU" -ForegroundColor Red }

    Write-Host "==> [3/3] Testes automatizados..." -ForegroundColor Cyan
    npm test --if-present -- --ci --watchAll=false
    if ($LASTEXITCODE -ne 0) { $failed = $true; Write-Host "    Testes FALHARAM" -ForegroundColor Red }
} finally { Pop-Location }

if ($failed) {
    Write-Host "`n❌ QA automático reprovado — corrija antes da validação manual." -ForegroundColor Red
    exit 1
}

Write-Host "`n✅ Gates automáticos aprovados." -ForegroundColor Green

if (-not $SkipEmulator) {
    Write-Host "`n==> Checklist de validação manual: scripts\manual-validation-checklist.md" -ForegroundColor Cyan
    Write-Host "==> Iniciando emulador para a rodada manual..." -ForegroundColor Cyan
    & (Join-Path $root "scripts\android-emulator.ps1")
}
