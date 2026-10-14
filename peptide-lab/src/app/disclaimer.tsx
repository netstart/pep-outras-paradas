import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { colors } from '../theme';
import { useStore } from '../store';

const PROFILES = [
  { id: 'paciente', label: 'Sou paciente' },
  { id: 'profissional', label: 'Profissional de saúde' },
  { id: 'atleta', label: 'Atleta' },
  { id: 'curioso', label: 'Curioso(a)' },
] as const;

export default function DisclaimerScreen() {
  const acceptDisclaimer = useStore((s) => s.acceptDisclaimer);
  const setProfile = useStore((s) => s.setProfile);
  const profile = useStore((s) => s.profile);
  const [understood, setUnderstood] = useState(false);
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.logo}>🧬 Peptide Lab</Text>
      <Text style={styles.subtitle}>Enciclopédia de peptídeos baseada em evidência científica</Text>

      <View style={styles.box}>
        <Text style={styles.boxTitle}>⚠️ Aviso importante</Text>
        <Text style={styles.text}>
          Este aplicativo é uma referência educacional. As informações, incluindo doses citadas,
          descrevem a literatura científica e <Text style={styles.bold}>não constituem prescrição
          nem recomendação médica</Text>.
        </Text>
        <Text style={styles.text}>
          Muitas substâncias catalogadas não têm aprovação regulatória (uso experimental) ou são
          proibidas no esporte (WADA). Consulte sempre um médico antes de qualquer decisão de saúde.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Como você vai usar o app?</Text>
      <View style={styles.profiles}>
        {PROFILES.map((p) => (
          <Pressable
            key={p.id}
            onPress={() => setProfile(p.id)}
            style={[styles.chip, profile === p.id && styles.chipActive]}
            accessibilityRole="button"
            accessibilityState={{ selected: profile === p.id }}
          >
            <Text style={[styles.chipText, profile === p.id && styles.chipTextActive]}>{p.label}</Text>
          </Pressable>
        ))}
      </View>

      <Pressable
        style={styles.checkRow}
        onPress={() => setUnderstood(!understood)}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: understood }}
      >
        <Text style={styles.checkbox}>{understood ? '☑' : '☐'}</Text>
        <Text style={styles.checkText}>Li e entendi que este conteúdo é educacional e não substitui consulta médica.</Text>
      </Pressable>

      <Pressable
        style={[styles.button, !understood && { opacity: 0.4 }]}
        disabled={!understood}
        onPress={() => {
          acceptDisclaimer();
          router.replace('/(tabs)');
        }}
        accessibilityRole="button"
      >
        <Text style={styles.buttonText}>Entrar no Peptide Lab</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, backgroundColor: colors.background, flexGrow: 1, justifyContent: 'center' },
  logo: { fontSize: 32, fontWeight: '800', color: colors.primary, textAlign: 'center' },
  subtitle: { fontSize: 15, color: colors.textSecondary, textAlign: 'center', marginTop: 6, marginBottom: 24 },
  box: { backgroundColor: '#FFF4ED', borderColor: colors.warning, borderWidth: 1, borderRadius: 12, padding: 16, marginBottom: 20 },
  boxTitle: { fontSize: 16, fontWeight: '700', color: colors.warning, marginBottom: 8 },
  text: { fontSize: 14, color: colors.text, lineHeight: 21, marginBottom: 8 },
  bold: { fontWeight: '700' },
  sectionTitle: { fontSize: 15, fontWeight: '700', color: colors.text, marginBottom: 10 },
  profiles: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 20 },
  chip: { borderWidth: 1, borderColor: colors.border, borderRadius: 999, paddingHorizontal: 14, paddingVertical: 8, minHeight: 44, justifyContent: 'center' },
  chipActive: { backgroundColor: colors.primary, borderColor: colors.primary },
  chipText: { color: colors.text, fontSize: 14 },
  chipTextActive: { color: '#fff', fontWeight: '600' },
  checkRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 10, marginBottom: 20 },
  checkbox: { fontSize: 22, color: colors.primary },
  checkText: { flex: 1, fontSize: 14, color: colors.text, lineHeight: 20 },
  button: { backgroundColor: colors.primary, borderRadius: 12, padding: 16, alignItems: 'center', minHeight: 52, justifyContent: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '700' },
});
