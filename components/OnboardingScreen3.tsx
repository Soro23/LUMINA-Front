
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { GlobalStyles } from '../styles/globalStyles';


type Props = {
  onContinue?: (selected: string[]) => void;
  onSkip?: () => void;
};

export default function OnboardingScreen3({ onContinue, onSkip }: Props) {
  const features = [
    'Seguimiento de estado de ánimo',
    'Meditaciones guiadas',
    'Diario personal',
    'Recordatorios diarios',
    'Retos de bienestar',
    'Recursos y artículos',
    'Comunidad y apoyo',
  ];
  const [selected, setSelected] = useState<string[]>(features);

  const toggleFeature = (feature: string) => {
    setSelected((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  return (
    <View style={[GlobalStyles.screen, GlobalStyles.centered, { paddingHorizontal: 24 }]}> 
      <Text style={GlobalStyles.title}>Elige tus funcionalidades</Text>
      <Text style={[GlobalStyles.subtitle, { marginBottom: 16 }]}>Selecciona lo que te interesa usar en la app. Puedes cambiarlo después.</Text>
      <View style={{ width: '100%', marginBottom: 24 }}>
        {features.map((feature) => (
          <TouchableOpacity
            key={feature}
            onPress={() => toggleFeature(feature)}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#F0F0F0',
            }}
          >
            <View
              style={{
                width: 22,
                height: 22,
                borderRadius: 6,
                borderWidth: 2,
                borderColor: selected.includes(feature) ? '#4F8FE7' : '#A0AEC0',
                backgroundColor: selected.includes(feature) ? '#4F8FE7' : 'transparent',
                marginRight: 14,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {selected.includes(feature) && (
                <View style={{ width: 10, height: 10, borderRadius: 3, backgroundColor: '#FFF8F0' }} />
              )}
            </View>
            <Text style={{ color: '#2D3748', fontSize: 16 }}>{feature}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 36 }}>
        <View style={GlobalStyles.progressDot} />
        <View style={GlobalStyles.progressDot} />
        <View style={[GlobalStyles.progressDot, GlobalStyles.progressDotActive]} />
      </View>
      <TouchableOpacity style={GlobalStyles.button} onPress={() => onContinue?.(selected)} activeOpacity={0.85}>
        <Text style={GlobalStyles.buttonText}>Empezar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onSkip}>
        <Text style={GlobalStyles.skipText}>Saltar</Text>
      </TouchableOpacity>
    </View>
  );
}
