# Guía de Carátula para Huawei Watch (Formatos .hwt / HarmonyOS)

Esta carpeta contiene la configuración necesaria para empaquetar la carátula de **App-kalendars** para relojes inteligente Huawei (Huawei Watch GT, Huawei Watch FIT, Huawei Watch Ultimate).

## Estructura de Capas para Huawei Watch Face Designer:

1. **Capa 0 (Fondo):** Carátula estética azteca / tonalpohualli con tonalidades oscuras y doradas.
2. **Capa 1 (Numerales):** Capa de imágenes numéricas (1 al 13) mapeadas a la variable de fecha diaria.
3. **Capa 2 (Glifos de Signos):** 20 imágenes PNG (con fondo transparente, 200x200px) representando los 20 signos calendáricos.
4. **Capa 3 (Selector de Cuenta):** Etiqueta de texto dinámico mostrando "Meza" o "Caso".

## Pasos para Compilar el paquete `.hwt`:
1. Abrir **Huawei Watch Face Designer** (versión 11.0 o superior).
2. Importar los recursos de los 20 signos y los 13 numerales.
3. Configurar la regla de asociación:
   - `Signo_Index = ((Fecha_Actual - Fecha_Base) % 20)`
   - `Numeral_Value = ((Fecha_Actual - Fecha_Base) % 13) + 1`
4. Hacer clic en **Export -> Export .hwt Package**.
5. Transferir el archivo `.hwt` al reloj mediante la aplicación **Huawei Health** (Salud de Huawei) usando el modo desarrollador de esferas.
