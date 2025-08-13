import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido a Lumina!</Text>
      <Text style={styles.subtitle}>Esta es la pantalla principal de la app.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7F8FA',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12,
    color: '#22223B',
  },
  subtitle: {
    fontSize: 16,
    color: '#6D6D7B',
  },
});
