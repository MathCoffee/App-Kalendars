# Guía de Instalación y Compilación - App-kalendars 2

Esta guía detalla los pasos para ejecutar en modo desarrollo y compilar la aplicación de escritorio nativa (**App-kalendars**) para sistemas **macOS** y **Windows** usando **Tauri v2 + React**.

---

## 🛠️ Requisitos Previos

Antes de compilar, asegúrate de tener instalado en tu computadora:

1. **Node.js** (versión 18 o superior)
   * Descárgalo de: [nodejs.org](https://nodejs.org/)
2. **Rust y Cargo** (necesarios para que Tauri compile la aplicación nativa)
   * Abre una terminal y ejecuta:
     ```bash
     curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
     ```
   * En Windows, puedes descargarlo de [rustup.rs](https://rustup.rs/) e instalar también las herramientas de C++ de Visual Studio Build Tools si te lo solicita.

---

## 🚀 Ejecución en Modo Desarrollo

Si solo deseas probar el programa localmente sin compilarlo:

1. Abre la terminal en la carpeta de la aplicación:
   ```bash
   cd "/Users/emyzucatalan/Library/Mobile Documents/com~apple~CloudDocs/Documents/AI-Proyects/App-kalendars"
   ```
2. Instala las dependencias de Node:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abre **`http://localhost:1420/`** en tu navegador.

---

## 📦 Compilación para Computadora (Nativo)

Tauri compila el código web a un ejecutable nativo muy ligero que no necesita navegador.

### 🍎 En macOS (`.dmg` / `.app`):
Ejecuta el siguiente comando en la terminal:
```bash
npm run tauri build
```
* **Resultado**: El instalador `.dmg` y la aplicación `.app` se guardarán en la carpeta:
  `src-tauri/target/release/bundle/dmg/App-kalendars_1.0.0_x64.dmg`
* **Instalación**: Haz doble clic en el archivo `.dmg` generado y arrastra **App-kalendars** a tu carpeta de Aplicaciones de tu Mac.

---

### 💻 En Windows (`.exe` / `.msi`):
Para compilar en Windows, copia la carpeta `App-kalendars` a una computadora con Windows, abre PowerShell o la terminal de Windows en esa carpeta y ejecuta:
```powershell
npm install
npm run tauri build
```
* **Resultado**: El instalador de Windows `.msi` y el ejecutable `.exe` se guardarán en:
  `src-tauri/target/release/bundle/msi/App-kalendars_1.0.0_x64_en-US.msi`
* **Instalación**: Haz doble clic en el instalador `.msi` y sigue el asistente de instalación de Windows.

---

## 🤖 Instalación y Compilación para Android

Tauri v2 permite compilar la aplicación para dispositivos móviles Android en formato **APK** (para instalación directa) y **AAB** (para Google Play).

### 📲 Cómo Instalar el archivo `.apk` en tu Celular (Sideloading):
1. **Descargar el archivo:** Entra a la sección de **Releases** de tu repositorio de GitHub desde tu teléfono Android y descarga el archivo con extensión `.apk` (por ejemplo, `app-universal-release-unsigned.apk` o similar).
2. **Permitir Orígenes Desconocidos:** Al abrir el instalador por primera vez, Android te pedirá permisos. Ve a **Ajustes** y activa **"Permitir la instalación desde esta fuente"** (normalmente tu navegador o tu administrador de archivos).
3. **Instalar de Todas Formas:** Al ser una app autofirmada/sin firmar en Play Store, Google Play Protect podría mostrar una advertencia. Haz clic en **"Instalar de todas formas"** (o "Instalar sin enviar").
4. ¡Listo! Abre la aplicación en tu celular.

### 🛠️ Compilación Local para Android:
Si deseas compilar la aplicación para Android en tu propia computadora:
1. **Requisitos:** Instala **Android Studio**, el **NDK (Side by side)** y la herramienta de línea de comandos de Android.
2. **Variables de entorno:** Configura las variables `ANDROID_HOME` y `NDK_HOME` en tu terminal (ej. en tu `.zshrc` o `.bashrc` en macOS):
   ```bash
   export ANDROID_HOME="$HOME/Library/Android/sdk"
   export NDK_HOME="$ANDROID_HOME/ndk/<versión_instalada>"
   ```
3. **Instalar los targets de Rust:**
   ```bash
   rustup target add aarch64-linux-android armv7-linux-androideabi i686-linux-android x86_64-linux-android
   ```
4. **Compilar:**
   * Para generar el APK de release:
     ```bash
     npm run tauri android build -- --apk
     ```
   * Para probar en un emulador o dispositivo conectado (modo desarrollo):
     ```bash
     npm run tauri android dev
     ```
* **Resultado**: Los archivos compilados se guardan en la carpeta:
  `src-tauri/gen/android/app/build/outputs/apk/release/`

---

## 🎯 Estructura de Ventanas Creadas en Escritorio

Al ejecutar el ejecutable compilado en escritorio, la aplicación levantará dos ventanas independientes:
1. **Ventana Principal (`1200x800`)**: Contiene la aplicación completa (Conversor, Inverso, Tablero y Calculadora).
2. **Widget Independiente (`340x440`)**: Una ventana flotante, compacta y que se mantiene siempre al frente (`alwaysOnTop`) sobre el escritorio, mostrando la cuenta calendárica en tiempo real.
