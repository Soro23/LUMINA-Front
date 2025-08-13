
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { GlobalStyles } from '../styles/globalStyles';

type Props = {
  onContinue?: () => void;
  onSkip?: () => void;
};

export default function OnboardingScreen({ onContinue, onSkip }: Props) {
  return (
    <View style={[GlobalStyles.screen, GlobalStyles.centered]}>
      {/* Ilustración principal */}
      <View style={{ width: '80%', aspectRatio: 4/3, marginBottom: 32, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={require('../assets/images/onboarding-calm.svg')}
          style={{ width: '100%', height: '100%' }}
          resizeMode="contain"
        />
      </View>
      {/* Título */}
      <Text style={GlobalStyles.title}>Bienvenido a Lumina</Text>
      {/* Descripción */}
      <Text style={GlobalStyles.subtitle}>
        Tu espacio para el autocuidado y el bienestar emocional.
      </Text>
      {/* Indicador de progreso */}
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 36 }}>
        <View style={[GlobalStyles.progressDot, GlobalStyles.progressDotActive]} />
        <View style={GlobalStyles.progressDot} />
        <View style={GlobalStyles.progressDot} />
      </View>
      {/* Botón principal */}
      <TouchableOpacity style={GlobalStyles.button} onPress={onContinue} activeOpacity={0.85}>
        <Text style={GlobalStyles.buttonText}>Comenzar</Text>
      </TouchableOpacity>
      {/* Botón secundario */}
      <TouchableOpacity onPress={onSkip}>
        <Text style={GlobalStyles.skipText}>Saltar</Text>
      </TouchableOpacity>
    </View>
  );


}
