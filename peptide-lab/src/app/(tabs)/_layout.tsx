import React from 'react';
import { Tabs } from 'expo-router';
import { Text, type ColorValue } from 'react-native';
import { colors } from '../../theme';

function Icon({ emoji, color }: { emoji: string; color: ColorValue }) {
  return <Text style={{ fontSize: 20, opacity: 1 }}>{emoji}</Text>;
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: '700' },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Início', tabBarIcon: ({ color }) => <Icon emoji="🏠" color={color} /> }} />
      <Tabs.Screen name="catalogo" options={{ title: 'Catálogo', tabBarIcon: ({ color }) => <Icon emoji="🧬" color={color} /> }} />
      <Tabs.Screen name="aprenda" options={{ title: 'Aprenda', tabBarIcon: ({ color }) => <Icon emoji="🎓" color={color} /> }} />
      <Tabs.Screen name="salvos" options={{ title: 'Salvos', tabBarIcon: ({ color }) => <Icon emoji="🔖" color={color} /> }} />
    </Tabs>
  );
}
