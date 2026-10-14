import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from '../../theme';
import { peptides } from '../../data/peptides';
import { checkStack, checkConditions, Verdict } from '../../lib/verifier';

const verdictStyle = {
  ok: { emoji: '✅', color: colors.ok, label: 'Sem alerta conhecido' },
  cautela: { emoji: '⚠️', color: colors.caution, label: 'Cautela' },
  contraindicada: { emoji: '⛔', color: colors.danger, label: 'Contraindicado' },
} as const;

export default function VerificadorScreen() {
  const [selected, setSelected] = useState<string[]>([]);
  const [condicoes, setCondicoes] = useState('');

  const toggle = (id: string) =>
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  const stackVerdicts = useMemo(() => checkStack(selected), [selected]);
  const conditionVerdicts = useMemo(
    () => checkConditions(selected, condicoes.split(',')),
    [selected, condicoes]
  );
  const allVerdicts: Verdict[] = [...conditionVerdicts, ...stackVerdicts];
  const worst: keyof typeof verdictStyle | null =
    allVerdicts.some((v) => v.tipo === 'contraindicada') ? 'contraindicada'
    : allVerdicts.some((v) => v.tipo === 'cautela') ? 'cautela' : null;

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 16 }}>
      <Text style={styles.title}>⚗️ Verificador de Combinações</Text>
      <Text style={styles.sub}>Monte sua pilha e informe condições de saúde. Resultados sempre com base no catálogo documentado.</Text>

      <Text style={styles.sectionTitle}>Substâncias</Text>
      {peptides.map((p) => (
        <Pressable
          key={p.id}
          onPress={() => toggle(p.id)}
          style={[styles.item, selected.includes(p.id) && styles.itemActive]}
          accessibilityRole="checkbox"
          accessibilityState={{ checked: selected.includes(p.id) }}
        >
          <Text style={styles.itemText}>{selected.includes(p.id) ? '☑' : '☐'} {p.nome}</Text>
        </Pressable>
      ))}

      <Text style={styles.sectionTitle}>Condições de saúde (opcional)</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex.: gravidez, diabetes, neoplasia ativa (separe por vírgula). Fica apenas no seu aparelho."
        placeholderTextColor={colors.textSecondary}
        value={condicoes}
        onChangeText={setCondicoes}
        accessibilityLabel="Condições de saúde"
      />

      {selected.length > 0 && (
        <>
          {worst && (
            <View style={[styles.resultBanner, { borderColor: verdictStyle[worst].color, backgroundColor: verdictStyle[worst].color + '15' }]}>
              <Text style={[styles.resultTitle, { color: verdictStyle[worst].color }]}>
                {verdictStyle[worst].emoji} {verdictStyle[worst].label}
              </Text>
              <Text style={styles.resultSub}>Converse com seu médico antes de prosseguir.</Text>
            </View>
          )}
          {allVerdicts.length === 0 && selected.length > 1 && (
            <View style={[styles.resultBanner, { borderColor: colors.ok, backgroundColor: colors.ok + '15' }]}>
              <Text style={[styles.resultTitle, { color: colors.ok }]}>✅ Nenhuma interação documentada</Text>
              <Text style={styles.resultSub}>Ausência de evidência não é evidência de ausência.</Text>
            </View>
          )}
          {allVerdicts.map((v, i) => (
            <View key={i} style={[styles.verdictCard, { borderLeftColor: verdictStyle[v.tipo].color }]}>
              <Text style={styles.verdictTitle}>
                {verdictStyle[v.tipo].emoji} {v.substanciaA} × {v.substanciaB}
              </Text>
              <Text style={styles.body}>{v.mecanismo}</Text>
              {v.referencias.length > 0 && (
                <Text style={styles.refNote}>📚 {v.referencias.length} referência(s) — abra a ficha para detalhes.</Text>
              )}
            </View>
          ))}
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  title: { fontSize: 22, fontWeight: '800', color: colors.primary },
  sub: { fontSize: 13, color: colors.textSecondary, marginTop: 6, marginBottom: 16, lineHeight: 19 },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: colors.text, marginTop: 16, marginBottom: 8 },
  item: { backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border, borderRadius: 10, padding: 12, marginBottom: 6, minHeight: 48, justifyContent: 'center' },
  itemActive: { borderColor: colors.primary, backgroundColor: colors.primaryLight },
  itemText: { fontSize: 15, color: colors.text },
  input: { backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border, borderRadius: 12, padding: 12, fontSize: 14, minHeight: 48, color: colors.text },
  resultBanner: { borderWidth: 1, borderRadius: 12, padding: 14, marginTop: 20 },
  resultTitle: { fontSize: 16, fontWeight: '800' },
  resultSub: { fontSize: 13, color: colors.text, marginTop: 4 },
  verdictCard: { borderLeftWidth: 4, backgroundColor: '#fff', borderWidth: 1, borderColor: colors.border, borderRadius: 10, padding: 12, marginTop: 10 },
  verdictTitle: { fontWeight: '700', fontSize: 14, marginBottom: 4, color: colors.text },
  body: { fontSize: 14, color: colors.text, lineHeight: 20 },
  refNote: { fontSize: 12, color: colors.textSecondary, marginTop: 6 },
});
