# ==============================================================
# setup.ps1 — Cria o projeto Expo do Peptide Lab (se ausente)
# e instala as dependências. Executar uma única vez.
# Uso: powershell -ExecutionPolicy Bypass -File scripts\setup.ps1
# ==============================================================
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$appDir = Join-Path $root "peptide-lab"

Write-Host "==> Verificando pré-requisitos..." -ForegroundColor Cyan
if (-not (Get-Command node -ErrorAction SilentlyContinue)) { throw "Node.js não encontrado. Instale a versão LTS: https://nodejs.org" }
Write-Host "    Node $(node -v) OK"

if (Test-Path $appDir) {
    Write-Host "==> Projeto já existe em $appDir — pulando scaffolding." -ForegroundColor Yellow
} else {
    Write-Host "==> Criando projeto Expo (template TypeScript)..." -ForegroundColor Cyan
    npx --yes create-expo-app@latest $appDir --template blank-typescript
    if ($LASTEXITCODE -ne 0) { throw "create-expo-app falhou (exit $LASTEXITCODE)" }
}

Push-Location $appDir
try {
    Write-Host "==> Instalando dependências do plano (navegação, offline, mídia, testes)..." -ForegroundColor Cyan
    npx expo install expo-router expo-sqlite expo-image expo-video expo-web-browser expo-linking expo-file-system
    npm install zustand @tanstack/react-query
    npm install -D jest jest-expo @testing-library/react-native ts-jest @types/jest eslint prettier typescript

    Write-Host "==> Ajustando package.json (jest)..." -ForegroundColor Cyan
    $pkg = Get-Content package.json -Raw | ConvertFrom-Json
    $pkg.scripts | Add-Member -NotePropertyName "test" -NotePropertyValue "jest" -Force
    $pkg.scripts | Add-Member -NotePropertyName "typecheck" -NotePropertyValue "tsc --noEmit" -Force
    $pkg.scripts | Add-Member -NotePropertyName "lint" -NotePropertyValue "eslint ." -Force
    $pkg | ConvertTo-Json -Depth 20 | Set-Content package.json -Encoding utf8

    Write-Host ""
    Write-Host "✅ Setup concluído. Próximo passo:" -ForegroundColor Green
    Write-Host "   powershell -ExecutionPolicy Bypass -File scripts\android-emulator.ps1"
} finally { Pop-Location }
