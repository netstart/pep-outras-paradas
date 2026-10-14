# ==============================================================
# android-emulator.ps1 — Inicia um emulador Android e roda o app
# para VALIDAÇÃO MANUAL. Uso:
#   powershell -ExecutionPolicy Bypass -File scripts\android-emulator.ps1 [-Avd NOME]
# ==============================================================
param([string]$Avd = "")
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$appDir = Join-Path $root "peptide-lab"

# --- Localizar SDK Android ---
$sdk = $env:ANDROID_HOME
if (-not $sdk) { $sdk = Join-Path $env:LOCALAPPDATA "Android\Sdk" }
if (-not (Test-Path $sdk)) { throw "Android SDK não encontrado. Instale o Android Studio e defina ANDROID_HOME." }

$emulatorExe = Join-Path $sdk "emulator\emulator.exe"
$adbExe      = Join-Path $sdk "platform-tools\adb.exe"
if (-not (Test-Path $emulatorExe)) { throw "emulator.exe não encontrado em $sdk\emulator" }

# --- Escolher o AVD ---
if (-not $Avd) {
    Write-Host "==> AVDs disponíveis:" -ForegroundColor Cyan
    $avds = & $emulatorExe -list-avds
    if (-not $avds) { throw "Nenhum AVD criado. Abra o Android Studio → Device Manager → Create Device." }
    $avds | ForEach-Object { Write-Host "    - $_" }
    $Avd = $avds[0]
    if ($avds.Count -gt 1) {
        $choice = Read-Host "Digite o nome do AVD (Enter = '$Avd')"
        if ($choice) { $Avd = $choice }
    }
}

# --- Já existe emulador ligado? ---
$devices = & $adbExe devices | Select-String "emulator-"
if (-not $devices) {
    Write-Host "==> Iniciando emulador '$Avd'..." -ForegroundColor Cyan
    Start-Process $emulatorExe -ArgumentList "-avd `"$Avd`" -netdelay none -netspeed full"
    Write-Host "==> Aguardando o emulador inicializar..."
    & $adbExe wait-for-device
    do { Start-Sleep 2; $boot = (& $adbExe shell getprop sys.boot_completed 2>$null) -join "" } while ($boot -notmatch "1")
    Write-Host "==> Emulador pronto." -ForegroundColor Green
} else {
    Write-Host "==> Emulador já em execução: $devices" -ForegroundColor Yellow
}

if (-not (Test-Path $appDir)) { throw "Projeto não existe. Rode primeiro: scripts\setup.ps1" }

Write-Host "==> Iniciando o Peptide Lab no emulador..." -ForegroundColor Cyan
Write-Host "    (o Metro bundler ficará nesta janela; pressione 'a' para reabrir no Android)" -ForegroundColor DarkGray
Push-Location $appDir
try { npx expo start --android } finally { Pop-Location }
