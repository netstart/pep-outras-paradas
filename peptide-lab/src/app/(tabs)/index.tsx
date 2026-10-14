import React, { useState, useMemo } from 'react';
import { Link, useLocalSearchParams } from 'expo-router';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { colors, levelConfig } from '../../theme';
import { peptides } from '../../data/peptides';
import { LevelBadge } from '../../components/Badges';
import { Section, ReferenceItem, InfoRow } from '../../components/UI';

export function searchPeptides(query: string, categoria?: string) {
  const q = query.trim().toLowerCase();
  return peptides.filter((p) => {
    if (categoria && p.categoria !== categoria) return false;
    if (!q) return true;
    return (
      p.nome.toLowerCase().includes(q) ||
      p.categoria.toLowerCase().includes(q) ||
      p.sinonimos.some((s) => s.toLowerCase().includes(q))
    );
  });
}

export default function HomeScreen() {
  const params = useLocalSearchParams<{ categoria?: string }>();
  const [query, setQuery] = useState('');
  const [categoria, setCategoria] = useState<string | undefined>(params.categoria);
  const categorias = useMemo(() => Array.from(new Set(peptides.map((p) => p.categoria))), []);
  const results = useMemo(() => searchPeptides(query, categoria), [query, categoria]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧬 Peptide Lab</Text>
      <Text style={styles.subtitle}>A enciclopédia de peptídeos baseada em evidência científica</Text>

      <Link href="/catalogo" asChild>
        <Pressable style={styles.searchBox} accessibilityRole="search">
          <Text style={styles.searchText}>🔎 Buscar peptídeo ou sinônimo...</Text>
        </Pressable>
      </Link>

      <View style={styles.warnCard}>
        <Text style={styles.warnTitle}>⚠️ Contraindicações que você precisa conhecer</Text>
        <Text style={styles.warnText}>
          GLP-1 (semaglutida) e carcinoma medular de tireoide · Secretagogos de GH e neoplasia ativa · substâncias somente-pesquisa nao sao aprovadas para uso humano.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Categorias</Text>
      <View style={styles.grid}>
        {Array.from(new Set(peptides.map((p) => p.categoria))).map((c) => (
          <Link key={c} href={{ pathname: '/catalogo', params: { categoria: c } }} asChild>
            <Pressable style={styles.chip} accessibilityRole="link">
              <Text style={styles.chipText}>{c}</Text>
            </Pressable>
          </Link>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Destaques</Text>
      {peptides.slice(0, 3).map((p) => (
        <Link key={p.id} href={{ pathname: '/peptide/[id]', params: { id: p.id } }} asChild>
          <Pressable style={styles.peptideRow} accessibilityRole="link" accessibilityLabel={`Ficha de ${p.nome}`}>
            <View style={{ flex: 1 }}>
              <Text style={styles.peptideName}>{p.nome}</Text>
              <Text style={styles.peptideCat} numberOfLines={1}>{p.categoria}</Text>
            </View>
            <Text style={styles.peptideEmoji}>{levelConfig[p.nivelRegulatorio].emoji}</Text>
          </Pressable>
        </Link>
      ))}

      <Text style={styles.footer}>Conteúdo educacional — não substitui consulta médica.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  title: { fontSize: 28, fontWeight: '800', color: colors.primary },
  subtitle: { fontSize: 14, color: colors.textSecondary, marginBottom: 20 },
  searchBox: { backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border, borderRadius: 12, padding: 14, minHeight: 48, justifyContent: 'center' },
  searchText: { color: colors.textSecondary, fontSize: 15 },
  warnCard: { backgroundColor: '#FFF4ED', borderWidth: 1, borderColor: colors.warning, borderRadius: 12, padding: 14 },
  warnTitle: { fontWeight: '700', color: colors.warning, marginBottom: 4 },
  warnText: { color: colors.text, fontSize: 14, lineHeight: 20 },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: colors.text, marginTop: 24, marginBottom: 10 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: { borderWidth: 1, borderColor: colors.border, borderRadius: 999, paddingHorizontal: 12, paddingVertical: 6, minHeight: 36, justifyContent: 'center' },
  chipActive: { backgroundColor: colors.primary, borderColor: colors.primary },
  chipText: { color: colors.text, fontSize: 13 },
  peptideRow: { flexDirection: 'row', gap: 10, alignItems: 'center', backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border, borderRadius: 12, padding: 14 },
  peptideName: { fontSize: 16, fontWeight: '700', color: colors.text },
  peptideCat: { fontSize: 12, color: colors.primary, fontWeight: '600', marginTop: 2 },
  peptideEmoji: { fontSize: 18 },
  footer: { fontSize: 12, color: colors.textSecondary, textAlign: 'center', marginTop: 28, marginBottom: 12 },
});