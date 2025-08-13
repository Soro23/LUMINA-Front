import { useRouter } from 'expo-router';
import React from 'react';
import OnboardingScreen from '../components/OnboardingScreen';

export default function Onboarding() {
  const router = useRouter();

  const handleContinue = () => {
    router.replace('/'); // O navega a la pantalla principal/tabs
  };
  const handleSkip = () => {
    router.replace('/');
  };

  return <OnboardingScreen onContinue={handleContinue} onSkip={handleSkip} />;
}
