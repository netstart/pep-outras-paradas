import React from 'react';
import { Linking, Pressable, ScrollView, StyleSheet, Text } from 'react-native';
import { colors } from '../../theme';

const PERGUNTAS = [
  { q: 'Por que a maioria dos peptídeos não pode ser tomada por via oral?', a: 'A digestão degrada as ligações peptídicas e a primeira passagem hepática elimina a molécula. Exceções: BPC-157 (estável no trato GI) e formulações com absorvedores.' },
  { q: 'Como armazenar peptídeos?', a: 'Liofilizado: 2–8 °C (ou -20 °C para longo prazo). Reconstituído: geladeira, usar em 2–4 semanas, proteger da luz e evitar agitação vigorosa.' },
  { q: 'Peptídeos de GH causam câncer?', a: 'GH/IGF-1 têm efeito proliferativo; o consenso endócrino contraindica secretagogos em neoplasia ativa. A relação causal em pessoas saudáveis não está estabelecida.' },
  { q: 'O que muda após o fim de um ciclo?', a: 'Pode ocorrer downregulation de receptores; períodos de intervalo (washout) são relatados na prática, mas faltam estudos controlados.' },
  { q: 'Quais peptídeos são proibidos no esporte?', a: 'Secretagogos de GH (S2 WADA), IGF-1, e qualquer substância não aprovada para uso humano (S0). Consulte sempre a lista vigente da WADA antes de competir.' },
  { q: '"Pureza 98% HPLC" significa seguro para uso?', a: 'Não. Pureza química não equivale a validação clínica, esterilidade ou ausência de endotoxinas. Produtos "research use only" não são aprovados para humanos.' },
];

const TRILHAS = [
  { titulo: '🏁 Emagrecimento baseado em evidência', itens: ['GLP-1: mecanismo', 'Semaglutida: STEP trials', 'Segurança e contraindicações', 'Depois do tratamento: manutenção'] },
  { titulo: '🦴 Recuperação de lesões', itens: ['BPC-157 e TB-500: o que é evidência', 'Ortopedia: adjuvante ≠ substituto', 'Sinais de alerta'] },
  { titulo: '⏳ Longevidade', itens: ['Peptídeos mitocondriais', 'GHK-Cu e envelhecimento da pele'] },
];

export default function AprendaScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 16 }}>
      <Text style={styles.title}>🎓 Aprenda</Text>
      <Text style={styles.sub}>Perguntas de aprofundamento verificáveis e trilhas de estudo.</Text>

      <Text style={styles.sectionTitle}>Trilhas de estudo</Text>
      {TRILHAS.map((t) => (
        <Pressable key={t.titulo} style={styles.trail} accessibilityRole="button">
          <Text style={styles.trailTitle}>{t.titulo}</Text>
          {t.itens.map((i) => <Text key={i} style={styles.trailItem}>· {i}</Text>)}
        </Pressable>
      ))}

      <Text style={styles.sectionTitle}>Perguntas frequentes (com ciência)</Text>
      {PERGUNTAS.map((p) => (
        <Pressable
          key={p.q}
          style={styles.faq}
          onPress={() => Linking.openURL('https://pubmed.ncbi.nlm.nih.gov/?term=peptide')}
          accessibilityRole="button"
        >
          <Text style={styles.faqQ}>{p.q}</Text>
          <Text style={styles.faqA}>{p.a}</Text>
          <Text style={styles.faqLink}>Verificar no PubMed →</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  title: { fontSize: 22, fontWeight: '800', color: colors.primary },
  sub: { fontSize: 13, color: colors.textSecondary, marginTop: 6, marginBottom: 8 },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: colors.text, marginTop: 20, marginBottom: 8 },
  trail: { backgroundColor: colors.primaryLight, borderRadius: 12, padding: 14, marginBottom: 8 },
  trailTitle: { fontWeight: '700', color: colors.primary, fontSize: 15 },
  trailItem: { color: colors.text, fontSize: 13, marginTop: 4 },
  faq: { backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border, borderRadius: 12, padding: 14, marginBottom: 8 },
  faqQ: { fontWeight: '700', fontSize: 14, color: colors.text },
  faqA: { fontSize: 13, color: colors.text, marginTop: 6, lineHeight: 19 },
  faqLink: { fontSize: 12, color: colors.primary, marginTop: 8, fontWeight: '600' },
});
