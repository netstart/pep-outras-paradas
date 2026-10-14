import React, { useEffect } from 'react';
import { Stack, useRouter } from 'expo-router';
import { colors } from '../theme';
import { useStore } from '../store';

export default function RootLayout() {
  const disclaimerAccepted = useStore((s) => s.disclaimerAccepted);
  const router = useRouter();

  useEffect(() => {
    if (!disclaimerAccepted) router.replace('/disclaimer');
  }, [disclaimerAccepted, router]);

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: '700' },
      }}
    >
      <Stack.Screen name="disclaimer" options={{ title: 'Aviso Importante', headerBackVisible: false, gestureEnabled: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="peptide/[id]" options={{ title: 'Ficha' }} />
    </Stack>
  );
}
