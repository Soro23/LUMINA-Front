


import { useRouter } from 'expo-router';
import { useState } from 'react';
import OnboardingScreen from "../components/OnboardingScreen";
import OnboardingScreen2 from "../components/OnboardingScreen2";
import OnboardingScreen3 from "../components/OnboardingScreen3";
import OnboardingScreen4 from "../components/OnboardingScreen4";
import OnboardingScreen5 from "../components/OnboardingScreen5";

export default function Index() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [reminderPrefs, setReminderPrefs] = useState<{ [key: string]: boolean }>({});

  const goToTabs = () => router.replace({ pathname: '/(tabs)' });

  if (step === 1) {
    return (
      <OnboardingScreen
        onContinue={() => setStep(2)}
        onSkip={goToTabs}
      />
    );
  }
  if (step === 2) {
    return (
      <OnboardingScreen2
        onContinue={() => setStep(3)}
        onSkip={goToTabs}
      />
    );
  }
  if (step === 3) {
    return (
      <OnboardingScreen3
        onContinue={(features) => {
          setSelectedFeatures(features);
          setStep(4);
        }}
        onSkip={goToTabs}
      />
    );
  }
  if (step === 4) {
    return (
      <OnboardingScreen4
        features={selectedFeatures}
        onContinue={() => setStep(5)}
        onSkip={goToTabs}
      />
    );
  }
  return (
    <OnboardingScreen5
      features={selectedFeatures}
      onContinue={(prefs) => {
        setReminderPrefs(prefs);
        goToTabs();
      }}
      onSkip={goToTabs}
    />
  );
}
