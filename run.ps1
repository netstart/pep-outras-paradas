# ==============================================================
# run.ps1 — Atalho para compilar e executar o Peptide Lab
# em producao (release) no emulador Android.
#
# Uso:
#   .\run.ps1                     # compila APK e executa no emulador
#   .\run.ps1 -Avd NOME_DO_AVD    # escolhe o AVD
#   .\run.ps1 -SkipBuild          # so instala/inicia (APK ja compilado)
# ==============================================================
param(
    [string]$Avd = "",
    [switch]$SkipBuild
)
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$releaseScript = Join-Path $root "scripts\android-release.ps1"

if (-not (Test-Path $releaseScript)) {
    throw "Script nao encontrado: $releaseScript"
}

Write-Host ""
Write-Host "Peptide Lab - Gerando APK de producao e executando no emulador..." -ForegroundColor Cyan
Write-Host "--------------------------------------------------------" -ForegroundColor Cyan

$argsList = @("-ExecutionPolicy", "Bypass", "-File", $releaseScript)
if ($Avd)       { $argsList += @("-Avd", $Avd) }
if ($SkipBuild) { $argsList += "-SkipBuild" }

& powershell @argsList
if ($LASTEXITCODE -ne 0) { throw "Build/execucao falhou (exit $LASTEXITCODE)." }

Write-Host ""
Write-Host "Concluido: APK gerado e app iniciado no emulador." -ForegroundColor Green
