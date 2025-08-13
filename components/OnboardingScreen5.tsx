import React, { useState } from 'react';
import { Switch, Text, TouchableOpacity, View } from 'react-native';
import { GlobalStyles } from '../styles/globalStyles';

type Props = {
  features?: string[];
  onContinue?: (reminders: { [key: string]: boolean }) => void;
  onSkip?: () => void;
};

export default function OnboardingScreen5({ features = [], onContinue, onSkip }: Props) {
  const [reminders, setReminders] = useState<{ [key: string]: boolean }>(
    Object.fromEntries(features.map(f => [f, true]))
  );

  const toggleReminder = (feature: string) => {
    setReminders(prev => ({ ...prev, [feature]: !prev[feature] }));
  };

  return (
    <View style={[GlobalStyles.screen, GlobalStyles.centered, { paddingHorizontal: 24 }]}> 
      <Text style={GlobalStyles.title}>Recordatorios personalizados</Text>
      <Text style={[GlobalStyles.subtitle, { marginBottom: 16 }]}>Activa o desactiva los recordatorios para cada funcionalidad que seleccionaste.</Text>
      <View style={{ width: '100%', marginBottom: 24 }}>
        {features.length === 0 && (
          <Text style={{ color: '#A0AEC0', textAlign: 'center', marginBottom: 12 }}>No seleccionaste funcionalidades en el paso anterior.</Text>
        )}
        {features.map((feature) => (
          <View
            key={feature}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingVertical: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#F0F0F0',
            }}
          >
            <Text style={{ color: '#2D3748', fontSize: 16 }}>{feature}</Text>
            <Switch
              value={reminders[feature]}
              onValueChange={() => toggleReminder(feature)}
              thumbColor={reminders[feature] ? '#4F8FE7' : '#A0AEC0'}
              trackColor={{ true: '#B2E3C4', false: '#E0E2EA' }}
            />
          </View>
        ))}
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 36 }}>
        <View style={GlobalStyles.progressDot} />
        <View style={GlobalStyles.progressDot} />
        <View style={GlobalStyles.progressDot} />
        <View style={GlobalStyles.progressDot} />
        <View style={[GlobalStyles.progressDot, GlobalStyles.progressDotActive]} />
      </View>
      <TouchableOpacity style={GlobalStyles.button} onPress={() => onContinue?.(reminders)} activeOpacity={0.85}>
        <Text style={GlobalStyles.buttonText}>Finalizar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onSkip}>
        <Text style={GlobalStyles.skipText}>Saltar</Text>
      </TouchableOpacity>
    </View>
  );
}
