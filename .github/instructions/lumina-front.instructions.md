---
applyTo: '**'
---

# 📜 LUMINA – Instrucciones para IA

Cuando generes, revises o modifiques código para este proyecto:

1. Usa **TypeScript** siempre, con componentes funcionales y hooks.
2. Respeta esta estructura:
   - `app/` para rutas con **expo-router**
   - `components/` para UI reutilizable
   - `hooks/` para hooks personalizados
   - `constants/` para colores y fuentes
3. UI: siempre con `react-native-paper` + `@expo/vector-icons`.
4. Navegación: `expo-router` + `@react-navigation/native`, `native-stack`, `bottom-tabs`.
5. Tema: adapta a light/dark con `useColorScheme()` y `useThemeColor()`.
6. Animaciones: `lottie-react-native` o `react-native-reanimated`.
7. Gráficas: `victory-native` + `react-native-svg`.
8. Convenciones:
   - Nombres de archivo en `kebab-case`
   - Commits con Conventional Commits (`feat:`, `fix:`, etc.)
9. Optimizar para Android e iOS siempre.
10. No añadir librerías que no estén en el stack actual.
