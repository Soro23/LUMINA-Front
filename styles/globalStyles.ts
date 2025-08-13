// Estilos globales y paleta para toda la app Lumina
import { StyleSheet } from 'react-native';

export const Colors = {
  primary: '#4F8FE7', // Azul suave
  secondary: '#B2E3C4', // Verde menta
  accent: '#F9A18F', // Coral cálido
  background: '#FFF8F0', // Crema o marfil
  text: '#2D3748', // Azul grisáceo oscuro
  subtext: '#A0AEC0', // Gris claro
  success: '#38A169', // Verde vivo
  error: '#E57373', // Rojo coral
  darkBackground: '#1A202C', // Azul noche
  highlightText: '#F7FAFC', // Blanco roto
};

// Estilos base reutilizables
export const GlobalStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.text,
    textAlign: 'center',
    marginBottom: 12,
    letterSpacing: 0.2,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.subtext,
    textAlign: 'center',
    marginBottom: 28,
    lineHeight: 22,
    letterSpacing: 0.1,
  },
  button: {
    backgroundColor: Colors.accent,
    borderRadius: 24,
    paddingVertical: 14,
    paddingHorizontal: 60,
    marginBottom: 18,
    shadowColor: Colors.accent,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 2,
  },
  buttonText: {
    color: Colors.highlightText,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    letterSpacing: 0.2,
  },
  skipText: {
    color: Colors.primary,
    fontSize: 15,
    textAlign: 'center',
    opacity: 0.7,
    fontWeight: '500',
  },
  progressDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.secondary,
    marginHorizontal: 5,
  },
  progressDotActive: {
    backgroundColor: Colors.primary,
    width: 18,
  },
});
