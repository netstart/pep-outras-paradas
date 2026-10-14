import React, { useState, useMemo } from 'react';
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import { colors } from '../../theme';
import { levelConfig } from '../../theme';
import { peptides } from '../../data/peptides';

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

export default function CatalogoScreen() {
  const params = useLocalSearchParams<{ categoria?: string }>();
  const [query, setQuery] = useState('');
  const [categoria, setCategoria] = useState<string | undefined>(params.categoria);
  const categorias = useMemo(() => Array.from(new Set(peptides.map((p) => p.categoria))), []);
  const results = useMemo(() => searchPeptides(query, categoria), [query, categoria]);

  return (
    <View style={styles.container}>
      <View style={styles.searchWrap}>
        <TextInput
          style={styles.input}
          placeholder="Buscar peptídeo ou sinônimo..."
          placeholderTextColor={colors.textSecondary}
          value={query}
          onChangeText={setQuery}
          autoFocus
          accessibilityLabel="Campo de busca de peptídeos"
        />
      </View>
      <FlatList
        style={{ flexGrow: 0 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={[undefined, ...categorias]}
        keyExtractor={(c: string | undefined) => c ?? 'todas'}
        contentContainerStyle={{ gap: 8, paddingHorizontal: 16, paddingBottom: 8 }}
        renderItem={({ item: c }: { item: string | undefined }) => (
          <Pressable
            onPress={() => setCategoria(c)}
            style={[styles.chip, categoria === c && styles.chipActive]}
            accessibilityRole="button"
            accessibilityState={{ selected: categoria === c }}
          >
            <Text style={[styles.chipText, categoria === c && styles.chipTextActive]}>{c ?? 'Todas'}</Text>
          </Pressable>
        )}
      />
      <FlatList
        data={results}
        keyExtractor={(p) => p.id}
        contentContainerStyle={{ padding: 16, gap: 10 }}
        ListEmptyComponent={<Text style={styles.empty}>Nenhum peptídeo encontrado.</Text>}
        renderItem={({ item: p }) => (
          <Link href={{ pathname: '/peptide/[id]', params: { id: p.id } }} asChild>
            <Pressable style={styles.row} accessibilityRole="link" accessibilityLabel={`Abrir ficha de ${p.nome}`}>
              <View style={{ flex: 1 }}>
                <Text style={styles.name}>{p.nome}</Text>
                <Text style={styles.cat}>{p.categoria}</Text>
                <Text style={styles.summary} numberOfLines={2}>{p.resumo}</Text>
              </View>
              <Text style={styles.peptideEmoji}>{levelConfig[p.nivelRegulatorio].emoji}</Text>
            </Pressable>
          </Link>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  searchWrap: { padding: 16, paddingBottom: 8 },
  input: { backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border, borderRadius: 12, padding: 12, fontSize: 16, minHeight: 48, color: colors.text },
  chip: { borderWidth: 1, borderColor: colors.border, borderRadius: 999, paddingHorizontal: 12, paddingVertical: 6, minHeight: 36, justifyContent: 'center' },
  chipActive: { backgroundColor: colors.primary, borderColor: colors.primary },
  chipText: { color: colors.text, fontSize: 13 },
  chipTextActive: { color: '#fff', fontWeight: '600' },
  row: { flexDirection: 'row', gap: 10, alignItems: 'center', backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border, borderRadius: 12, padding: 14 },
  name: { fontSize: 17, fontWeight: '700', color: colors.text },
  cat: { fontSize: 12, color: colors.primary, fontWeight: '600', marginTop: 2 },
  summary: { fontSize: 13, color: colors.textSecondary, marginTop: 6, lineHeight: 18 },
  empty: { textAlign: 'center', color: colors.textSecondary, marginTop: 40 },
  peptideEmoji: { fontSize: 18 },
});
