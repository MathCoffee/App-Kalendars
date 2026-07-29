# Manual de Instalación e Implementación: App-kalendars

Este instructivo guía paso a paso la compilación e instalación del programa en la computadora (macOS y Windows), la activación del Widget de escritorio y la configuración en Apple Watch y Huawei Watch.

---

## 1. Cómo Instalar el Programa Autónomo en macOS

El proyecto utiliza **Tauri v2 + React**, lo que permite compilar instaladores nativos sin dependencias externas para el usuario final.

### Pasos para compilar en macOS:

1. Abre la terminal en la carpeta del proyecto:
   ```bash
   cd "/Users/ramiro/Documents/AI-Proyects/App-kalendars"
   ```

2. Ejecuta el comando de compilación nativa de Tauri:
   ```bash
   npx tauri build
   ```

3. **Ubicación del instalador generado:**
   - **.dmg para macOS:**
     `src-tauri/target/release/bundle/dmg/App-kalendars_1.0.0_aarch64.dmg`
   - **Instalación:** Haz doble clic en el archivo `.dmg` y arrastra **App-kalendars** a tu carpeta de **Aplicaciones**.

---

## 2. Cómo Generar el Instalador `.exe` / `.msi` para Windows

Existen dos métodos principales para compilar el archivo `.exe` para Windows:

### Método A: Compilar en una Computadora con Windows (Recomendado)
1. Copia la carpeta **App-kalendars** a tu PC con Windows (o en una máquina virtual Windows).
2. Asegúrate de tener instalado:
   - **Node.js** (v18 o superior desde [nodejs.org](https://nodejs.org))
   - **Rust** (desde [rustup.rs](https://rustup.rs))
3. Abre la terminal de comandos (CMD o PowerShell) dentro de la carpeta `App-kalendars`:
   ```bash
   npm install
   npx tauri build
   ```
4. **Archivos `.exe` y `.msi` generados:**
   - `src-tauri\target\release\bundle\nsis\App-kalendars_1.0.0_x64-setup.exe`
   - `src-tauri\target\release\bundle\msi\App-kalendars_1.0.0_x64_en-US.msi`

---

### Método B: Usar GitHub Actions (Compilación Automática en la Nube)
Ya dejamos configurado el flujo automatizado en `.github/workflows/build.yml`:
1. Sube tu proyecto a un repositorio de GitHub.
2. Cada vez que subas cambios o ejecutes el flujo manualmente en la pestaña **Actions**, GitHub compilará automáticamente los ejecutables nativos para **Windows (`.exe`)** y **macOS (`.dmg`)**.
3. Podrás descargar los instaladores directamente desde la sección de **Releases** de tu repositorio.

---

## 3. Cómo Activar y Usar el Widget de Escritorio

El programa incluye un modo **Widget compacto** que muestra exclusivamente el numeral, signo del día, número de día del ciclo 260 y la opción de cambiar la cuenta.

1. **Iniciar el programa:** Abre **App-kalendars** en tu computadora.
2. **Cambiar a Modo Widget:** Haz clic en el botón **"Modo Widget"** ubicado en la esquina superior derecha del encabezado.
3. **Funcionalidades del Widget:**
   - **Intercambio de Cuentas:** Haz clic en el botón conmutador **[ Cuenta Meza ] ⇄ [ Cuenta Caso ]** para alternar instantáneamente los cálculos entre ambas tradiciones.
   - **Visualización sin distracciones:** Muestra únicamente la pareja de imágenes del códice (Numeral y Signo) junto con el día de la cuenta del Tonalpohualli (ej. Día 133 / 260).
   - **Regreso a App Completa:** Haz clic en el icono de capas o en "← Volver a App Completa" para expandir la interfaz.

---

## 4. Cómo Implementar en el Apple Watch (watchOS)

1. En tu Mac, abre el proyecto en **Xcode**.
2. Añade un Target de tipo **Watch App / Widget Extension**.
3. Importa el archivo de código provisto en [KalendarsComplication.swift](file:///Users/ramiro/Documents/AI-Proyects/App-kalendars/watch-apps/apple-watch/KalendarsComplication.swift).
4. Compila la app hacia tu Apple Watch.
5. En tu iPhone (o Apple Watch), edita las complicación de la carátula y selecciona **Kalendars**.

---

## 5. Cómo Implementar en un Smartwatch Huawei

1. Abre **Huawei Watch Face Designer**.
2. Importa la plantilla y recursos de `src/assets/images/` siguiendo la guía en [README_HUAWEI.md](file:///Users/ramiro/Documents/AI-Proyects/App-kalendars/watch-apps/huawei-watch/README_HUAWEI.md).
3. Exporta la carátula como paquete **`.hwt`**.
4. Instálala a través de la app **Huawei Health (Salud de Huawei)** en tu teléfono.

---

## 6. Cómo Instalar y Compilar en Android (Celular)

El proyecto está configurado para compilar instaladores móviles nativos de Android.

### Método A: Descargar desde GitHub Releases (Fácil)
1. Entra a la sección de **Releases** de tu repositorio de GitHub desde tu celular.
2. Descarga el archivo ejecutable con extensión `.apk`.
3. Al abrirlo, si Android te indica que no puedes instalar apps de orígenes desconocidos, ve a **Ajustes** del aviso y activa **"Permitir la instalación desde esta fuente"** (para tu navegador o gestor de archivos).
4. Google Play Protect podría advertir que es una app sin firmar en su tienda. Elige **"Instalar de todas formas"** para completar la instalación.

### Método B: Compilar localmente en tu Computadora
1. Asegúrate de tener instalado **Android Studio**, el **NDK (Side by side)** y las herramientas de línea de comandos de Android.
2. Configura las variables de entorno `ANDROID_HOME` y `NDK_HOME` en tu sistema.
3. Instala los targets de Android para Rust:
   ```bash
   rustup target add aarch64-linux-android armv7-linux-androideabi i686-linux-android x86_64-linux-android
   ```
4. Abre la terminal en el proyecto y ejecuta:
   * Para generar el archivo de instalación `.apk`:
     ```bash
     npm run tauri android build -- --apk
     ```
   * Para probar en tiempo real en tu celular (conectado por USB en modo depuración) o emulador:
     ```bash
     npm run tauri android dev
     ```
5. **Ubicación del archivo compilado:**
   - Se guardará en la ruta:
     `src-tauri/gen/android/app/build/outputs/apk/release/`
