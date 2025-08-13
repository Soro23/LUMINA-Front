
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { GlobalStyles } from '../styles/globalStyles';

type Props = {
    features?: string[];
    onContinue?: () => void;
    onSkip?: () => void;
  };
  
  export default function OnboardingScreen4({ features = [], onContinue, onSkip }: Props) {

  return (
    <View style={[GlobalStyles.screen, GlobalStyles.centered, { paddingHorizontal: 24 }]}> 
      <Text style={GlobalStyles.title}>Activa recordatorios</Text>
      <Text style={[GlobalStyles.subtitle, { marginBottom: 36 }]}>Recibe avisos amables para registrar tu día y mantener el hábito sin esfuerzo.</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 36 }}>
        <View style={GlobalStyles.progressDot} />
        <View style={GlobalStyles.progressDot} />
        <View style={GlobalStyles.progressDot} />
        <View style={[GlobalStyles.progressDot, GlobalStyles.progressDotActive]} />
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
