
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { GlobalStyles } from '../styles/globalStyles';

type Props = {
  onContinue?: () => void;
  onSkip?: () => void;
};

export default function OnboardingScreen2({ onContinue, onSkip }: Props) {
  return (
    <View style={[GlobalStyles.screen, GlobalStyles.centered]}>
      <View style={{ width: '80%', aspectRatio: 4/3, marginBottom: 32, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={require('../assets/images/onboarding-growth.svg')}
          style={{ width: '100%', height: '100%' }}
          resizeMode="contain"
        />
      </View>
      <Text style={GlobalStyles.title}>Personaliza tu experiencia</Text>
      <Text style={GlobalStyles.subtitle}>
        Elige tus objetivos y lo que quieres seguir cada día para adaptar la app a ti.
      </Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 36 }}>
        <View style={GlobalStyles.progressDot} />
        <View style={[GlobalStyles.progressDot, GlobalStyles.progressDotActive]} />
        <View style={GlobalStyles.progressDot} />
      </View>
      <TouchableOpacity style={GlobalStyles.button} onPress={onContinue} activeOpacity={0.85}>
        <Text style={GlobalStyles.buttonText}>Siguiente</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onSkip}>
        <Text style={GlobalStyles.skipText}>Saltar</Text>
      </TouchableOpacity>
    </View>
  );


}
