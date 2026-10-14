# ==============================================================
# android-production.ps1 — Compila o app em modo PRODUCAO (release)
# e executa no emulador Android. Uso:
#   powershell -ExecutionPolicy Bypass -File scripts\android-production.ps1
# ==============================================================
$ErrorActionPreference = "Stop"
$root   = Split-Path -Parent $PSScriptRoot
$appDir = Join-Path $root "peptide-lab"

# --- Localizar SDK Android ---
$sdk = $env:ANDROID_HOME
if (-not $sdk) { $sdk = "C:\android-sdk" }
if (-not (Test-Path $sdk)) { throw "Android SDK nao encontrado em $sdk" }
$env:ANDROID_HOME = $sdk
$env:ANDROID_SDK_ROOT = $sdk
$adbExe = Join-Path $sdk "platform-tools\adb.exe"

# --- 1. Garantir que um emulador esteja ligado ---
$devices = & $adbExe devices | Select-String "emulator-"
if (-not $devices) {
    $emulatorExe = Join-Path $sdk "emulator\emulator.exe"
    $avd = (& $emulatorExe -list-avds | Select-String "Redmi" | Select-Object -First 1).ToString()
    if (-not $avd) { $avd = (& $emulatorExe -list-avds)[0] }
    Write-Host "==> Iniciando emulador '$avd'..." -ForegroundColor Cyan
    Start-Process -WindowStyle Hidden -FilePath $emulatorExe -ArgumentList "-avd","`"$avd`"","-netdelay","none","-netspeed","full","-gpu","swiftshader_indirect","-no-snapshot"
    & $adbExe wait-for-device
    do { Start-Sleep 2; $boot = (& $adbExe shell getprop sys.boot_completed 2>$null) -join "" } while ($boot -notmatch "1")
}
Write-Host "==> Emulador pronto: $((& $adbExe devices)[1])" -ForegroundColor Green

Push-Location $appDir
try {
    # --- 2. Prebuild: gerar o projeto nativo android/ ---
    if (-not (Test-Path (Join-Path $appDir "android"))) {
        Write-Host "==> Gerando projeto nativo (expo prebuild)..." -ForegroundColor Cyan
        npx expo prebuild --platform android --clean
        if ($LASTEXITCODE -ne 0) { throw "expo prebuild falhou" }
    } else {
        Write-Host "==> Projeto android/ ja existe, pulando prebuild." -ForegroundColor Yellow
    }

    # --- 3. Gerar keystore de release local (se nao existir) ---
    $keystore = Join-Path $appDir "android\app\release.keystore"
    if (-not (Test-Path $keystore)) {
        Write-Host "==> Gerando keystore de release..." -ForegroundColor Cyan
        $keytool = Get-ChildItem "C:\Program Files*\" -Recurse -Filter keytool.exe -ErrorAction SilentlyContinue | Select-Object -First 1 -ExpandProperty FullName
        if (-not $keytool) {
            $javaHome = (Get-Command java).Source | Split-Path | Split-Path
            $keytool = Join-Path $javaHome "bin\keytool.exe"
        }
        & $keytool -genkeypair -v -keystore $keystore -alias peptidelab -keyalg RSA -keysize 2048 -validity 10000 `
            -storepass peptidelab -keypass peptidelab -dname "CN=Peptide Lab, OU=Dev, O=Peptide Lab, L=BR, S=BR, C=BR"
        if ($LASTEXITCODE -ne 0) { throw "keytool falhou" }
    }

    # --- 4. Injetar signingConfig de release (idempotente) ---
    $gradle = Join-Path $appDir "android\app\build.gradle"
    $content = Get-Content $gradle -Raw
    if ($content -notmatch "release\.keystore") {
        Write-Host "==> Configurando assinatura de release no build.gradle..." -ForegroundColor Cyan
        $signing = @"

    signingConfigs {
        release {
            storeFile file('release.keystore')
            storePassword 'peptidelab'
            keyAlias 'peptidelab'
            keyPassword 'peptidelab'
        }
    }
"@
        $content = $content -replace "(android\s*\{)", "`$1$signing"
        $content = $content -replace "(buildTypes\s*\{\s*release\s*\{[^}]*?)signingConfig\s+signingConfigs\.debug", "`$1signingConfig signingConfigs.release"
        Set-Content $gradle $content -NoNewline
    }

    # --- 5. Compilar APK de producao ---
    Write-Host "==> Compilando APK release (pode demorar varios minutos)..." -ForegroundColor Cyan
    Push-Location (Join-Path $appDir "android")
    try {
        if ($IsWindows -or $env:OS -match "Windows") { .\gradlew.bat assembleRelease } else { ./gradlew assembleRelease }
        if ($LASTEXITCODE -ne 0) { throw "Gradle build falhou" }
    } finally { Pop-Location }

    $apk = Join-Path $appDir "android\app\build\outputs\apk\release\app-release.apk"
    if (-not (Test-Path $apk)) { throw "APK nao encontrado em $apk" }
    Write-Host "==> APK gerado: $apk" -ForegroundColor Green

    # --- 6. Instalar e executar no emulador ---
    $pkg = "com.anonymous.peptidelab"
    Write-Host "==> Instalando no emulador..." -ForegroundColor Cyan
    & $adbExe install -r $apk
    if ($LASTEXITCODE -ne 0) { throw "adb install falhou" }

    Write-Host "==> Abrindo o app..." -ForegroundColor Cyan
    & $adbExe shell monkey -p $pkg -c android.intent.category.LAUNCHER 1
    Write-Host "==> Peptide Lab (producao) em execucao no emulador!" -ForegroundColor Green
} finally {
    Pop-Location
}
