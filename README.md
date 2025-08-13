# 📘 LUMINA - Guía de desarrollo

> Proyecto: App móvil de bienestar emocional  
> Framework: **React Native + Expo Router (TypeScript)**  
> Multiplataforma: Android & iOS  
> Última revisión: 2025-08-13

---

## ✅ Stack actual

### 🚀 Base
- Expo SDK 53 + Expo Router
- React Native 0.79.5
- React 19
- TypeScript
- OTA updates habilitadas

### 🧭 Navegación
- `expo-router` para navegación file-based
- Stack y Bottom Tabs vía:
  - `@react-navigation/native`
  - `@react-navigation/native-stack`
  - `@react-navigation/bottom-tabs`

### 🎨 UI
- `react-native-paper` (UI accesible y profesional)
- `@expo/vector-icons` y `react-native-vector-icons`

### 🎞️ Animaciones
- `lottie-react-native` para feedback visual

### 📊 Gráficas
- `victory-native` para mostrar estadísticas
- `react-native-svg` como dependencia de Victory

### 🌗 Tema & accesibilidad
- `expo-system-ui` → Detección de dark/light mode
- Tipografías: `expo-font`
- Accesibilidad: `AccessibilityInfo` + `react-native-paper`

---

## 📁 Estructura del proyecto

```
/
├── app/                ← Sistema de rutas (Expo Router)
│   ├── (tabs)/         ← Navegación principal tipo bottom tabs
│   │   ├── _layout.tsx
│   │   ├── index.tsx   ← Pantalla Home
│   │   └── explore.tsx ← Otra pestaña
│   ├── +not-found.tsx  ← 404 fallback
│   └── _layout.tsx     ← Layout raíz
│
├── components/         ← Componentes visuales reutilizables
│   └── ui/             ← Subcomponentes visuales como fondos o iconos
│
├── constants/          ← Colores, textos u otras constantes
│
├── hooks/              ← Hooks personalizados (tema, colores, etc.)
│
├── assets/
│   ├── fonts/          ← Tipografía personalizada (SpaceMono)
│   └── images/         ← Splash, iconos, logos
│
├── scripts/            ← Scripts CLI (ej: reset-project.js)
│
├── .vscode/            ← Config local para VSCode
```

---

## 🔧 Configuración clave

### `babel.config.js`
```js
module.exports = {
  presets: ['babel-preset-expo'],
  plugins: ['react-native-reanimated/plugin'],
};
```

### `app.json`
```json
{
  "expo": {
    "name": "LUMINA",
    "slug": "lumina-front",
    "updates": {
      "enabled": true,
      "fallbackToCacheTimeout": 0
    }
  }
}
```

---

## 🧱 Convenciones de desarrollo

- **TypeScript obligatorio**
- Usa componentes funcionales + hooks
- No mezcles lógica con presentación
- Componentes compartidos → `components/`
- Hooks → `hooks/`
- Usa colores y fuentes desde `constants/`
- Sigue los temas light/dark con `useColorScheme()` y `useThemeColor()`

---

## 💅 Convención de commits (opcional)

Sigue [Conventional Commits](https://www.conventionalcommits.org):
- `feat:` nueva funcionalidad
- `fix:` corrección de error
- `refactor:` cambio interno sin romper lógica
- `chore:` mantenimiento
- `docs:` documentación
- `test:` tests agregados o actualizados

---

## 📦 Dependencias clave instaladas

```bash
# UI y navegación
react-native-paper
@react-navigation/native
@react-navigation/native-stack
@react-navigation/bottom-tabs
@expo/vector-icons

# Animaciones
react-native-reanimated
lottie-react-native
react-native-gesture-handler

# Estadísticas
victory-native
react-native-svg

# Expo
expo-system-ui
expo-font
expo-app-loading
expo-constants
expo-haptics
expo-blur
expo-splash-screen
expo-web-browser
expo-image
expo-status-bar

# Otros
react-native-safe-area-context
react-native-screens
react-native-get-random-values
```

---

## ✅ Tips finales

- Organiza las pantallas en subcarpetas si hay más de una por sección.
- Los hooks como `useThemeColor.ts` son clave para adaptar componentes personalizados al tema.
- Guarda animaciones Lottie (JSON) en `assets/lottie/` si decides usarlas más adelante.
- Reutiliza `ThemedView`, `ThemedText`, etc. como base de tu UI.
- Si necesitas temas más avanzados en `Paper`, crea un archivo `theme.ts`.

---


---

## 🧪 Testeo, ejecución y compilación

### ▶️ Ejecutar en desarrollo
```bash
npm start         # Inicia Metro bundler (modo interactivo)
npm run android   # Ejecuta en emulador/dispositivo Android
npm run ios       # Ejecuta en emulador/dispositivo iOS (macOS)
npm run web       # Ejecuta versión web
```

### 🔁 Reinicio del proyecto (borrar cachés)
```bash
npm run reset-project
```

### 🧪 Testeo (pendiente de configurar)
- Usaremos `jest` + `@testing-library/react-native` en futuras fases.
- Los tests estarán en archivos `*.test.tsx` dentro de la carpeta `__tests__/` o junto al componente.

---

## 🚀 Builds y publicación

### Compilar para Android/iOS (requiere EAS CLI)
```bash
npx eas build:configure   # Solo una vez
npx eas build --platform android
npx eas build --platform ios
```

### Publicar OTA update (cambios en producción sin pasar por store)
```bash
npx expo export
npx expo publish
```

---

## 🌿 Protocolo de Git y desarrollo colaborativo

### 🧑‍💻 Flujo de ramas
- `main` → Producción
- `dev` → Desarrollo estable
- `feature/nombre` → Nueva funcionalidad
- `fix/nombre` → Corrección de bug
- `hotfix/nombre` → Arreglo urgente a producción

### 📥 Crear nueva rama de feature
```bash
git checkout dev
git pull
git checkout -b feature/nombre-de-la-feature
```

### ✅ Finalizar feature
```bash
git add .
git commit -m "feat: breve descripción"
git push origin feature/nombre
# Crear Pull Request a `dev`
```

### 🔀 Pull Request
- Todo cambio debe ir vía Pull Request (aunque trabajes solo).
- Revisar código antes de mergear a `dev`.
- Commits en español, mensajes claros y específicos.

### ⏹️ Commits que no se aceptan
- `update`, `cosas`, `cambios`, `fixes`, `final`
- Usa siempre convención tipo: `feat:`, `fix:`, `chore:`, `refactor:`

---

