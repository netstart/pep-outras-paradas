# ==============================================================
# android-release.ps1 — Compila o Peptide Lab em modo RELEASE
# (produção) e instala/executa no emulador Android.
#
# Uso:
#   powershell -ExecutionPolicy Bypass -File scripts\android-release.ps1 [-Avd NOME] [-SkipBuild]
#
# Requisitos:
#   - Android SDK (ANDROID_HOME ou %LOCALAPPDATA%\Android\Sdk)
#   - JDK 17+ (JAVA_HOME)
#   - Um AVD criado (Android Studio → Device Manager)
# ==============================================================
param(
    [string]$Avd = "",
    [switch]$SkipBuild
)
$ErrorActionPreference = "Stop"
$root   = Split-Path -Parent $PSScriptRoot
$appDir = Join-Path $root "peptide-lab"

# --- Localizar SDK Android ---
$sdk = $env:ANDROID_HOME
if (-not $sdk) { $sdk = Join-Path $env:LOCALAPPDATA "Android\Sdk" }
if (-not (Test-Path $sdk)) { throw "Android SDK não encontrado. Instale o Android Studio e defina ANDROID_HOME." }

$emulatorExe = Join-Path $sdk "emulator\emulator.exe"
$adbExe      = Join-Path $sdk "platform-tools\adb.exe"
if (-not (Test-Path $emulatorExe)) { throw "emulator.exe não encontrado em $sdk\emulator" }
if (-not (Test-Path $appDir))      { throw "Projeto não existe em $appDir. Rode primeiro: scripts\setup.ps1" }

Push-Location $appDir
try {
    # --- Dependências JS ---
    if (-not (Test-Path "node_modules")) {
        Write-Host "==> Instalando dependências npm..." -ForegroundColor Cyan
        npm ci
    }

    # --- Gerar projeto nativo android/ se ainda não existir ---
    if (-not (Test-Path "android")) {
        Write-Host "==> Gerando projeto nativo Android (expo prebuild)..." -ForegroundColor Cyan
        npx expo prebuild --platform android --clean
    }

    # --- Escolher o AVD ---
    if (-not $Avd) {
        $avds = & $emulatorExe -list-avds
        if (-not $avds) { throw "Nenhum AVD criado. Abra o Android Studio → Device Manager → Create Device." }
        Write-Host "==> AVDs disponíveis: $($avds -join ', ')" -ForegroundColor Cyan
        $Avd = $avds[0]
        if ($avds.Count -gt 1) {
            $choice = Read-Host "Digite o nome do AVD (Enter = '$Avd')"
            if ($choice) { $Avd = $choice }
        }
    }

    # --- Iniciar emulador se necessário ---
    $devices = & $adbExe devices | Select-String "emulator-\d+\s+device"
    if (-not $devices) {
        Write-Host "==> Iniciando emulador '$Avd'..." -ForegroundColor Cyan
        Start-Process $emulatorExe -ArgumentList "-avd `"$Avd`" -netdelay none -netspeed full"
        & $adbExe wait-for-device
        do { Start-Sleep 2; $boot = (& $adbExe shell getprop sys.boot_completed 2>$null) -join "" } while ($boot -notmatch "1")
        Write-Host "==> Emulador pronto." -ForegroundColor Green
    } else {
        Write-Host "==> Emulador já em execução (modo release NÃO usa Metro bundler)." -ForegroundColor Yellow
    }

    if (-not $SkipBuild) {
        # --- Compilar APK release e instalar via Gradle ---
        Write-Host "==> Compilando e instalando build RELEASE..." -ForegroundColor Cyan
        Write-Host "    (primeira vez pode demorar vários minutos: download do Gradle + build nativo)" -ForegroundColor DarkGray

        # Garante que gradle.properties tenha SDK path correto
        $localProps = Join-Path $appDir "android\local.properties"
        if (-not (Test-Path $localProps)) {
            "sdk.dir=$($sdk -replace '\\', '\\\\' -replace ':', '\:')" | Out-File -Encoding ascii $localProps
            Write-Host "    local.properties criado com sdk.dir" -ForegroundColor DarkGray
        }

        Push-Location (Join-Path $appDir "android")
        try {
            $gradlew = if (Test-Path ".\gradlew.bat") { ".\gradlew.bat" } else { ".\gradlew" }
            & $gradlew installRelease
            if ($LASTEXITCODE -ne 0) { throw "Gradle installRelease falhou (exit $LASTEXITCODE). Veja o log acima." }
        } finally { Pop-Location }
    }

    # --- Descobrir o package id e lançar o app ---
    $manifest = Join-Path $appDir "android\app\build\outputs\apk\release"
    Write-Host "==> APK(s) gerados em: $manifest" -ForegroundColor Cyan
    Get-ChildItem $manifest -Filter *.apk -ErrorAction SilentlyContinue |
        ForEach-Object { Write-Host "    - $($_.Name) ($([math]::Round($_.Length/1MB,1)) MB)" }

    # Lê o applicationId do build.gradle do app
    $gradleFile = Get-Content (Join-Path $appDir "android\app\build.gradle") -Raw
    $pkg = ([regex]'applicationId\s*[''"]([^''"]+)[''"]').Match($gradleFile).Groups[1].Value
    if (-not $pkg) { $pkg = "com.peptidelab" ; Write-Host "    applicationId não encontrado, tentando $pkg" -ForegroundColor Yellow }

    Write-Host "==> Lançando $pkg no emulador..." -ForegroundColor Cyan
    & $adbExe shell monkey -p $pkg -c android.intent.category.LAUNCHER 1 | Out-Null
    Write-Host "==> App RELEASE instalado e iniciado no emulador $Avd." -ForegroundColor Green
} finally {
    Pop-Location
}
