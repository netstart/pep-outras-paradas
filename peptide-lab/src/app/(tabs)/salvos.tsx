import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { colors, levelConfig } from '../../theme';
import { peptides } from '../../data/peptides';
import { useStore } from '../../store';

export default function SalvosScreen() {
  const favorites = useStore((s) => s.favorites);
  const saved = peptides.filter((p) => favorites.includes(p.id));

  return (
    <View style={styles.container}>
      {saved.length === 0 ? (
        <View style={styles.emptyWrap}>
          <Text style={styles.emptyEmoji}>🔖</Text>
          <Text style={styles.empty}>Nenhuma ficha salva ainda.</Text>
          <Text style={styles.emptySub}>Abra uma ficha no catálogo e toque em 📑 para salvá-la.</Text>
        </View>
      ) : (
        <FlatList
          data={saved}
          keyExtractor={(p) => p.id}
          contentContainerStyle={{ padding: 16, gap: 10 }}
          renderItem={({ item: p }) => (
            <Link href={{ pathname: '/peptide/[id]', params: { id: p.id } }} asChild>
              <Pressable style={styles.row} accessibilityRole="link">
                <View style={{ flex: 1 }}>
                  <Text style={styles.name}>{p.nome}</Text>
                  <Text style={styles.cat}>{p.categoria}</Text>
                </View>
                <Text>{levelConfig[p.nivelRegulatorio].emoji}</Text>
              </Pressable>
            </Link>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  emptyWrap: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  emptyEmoji: { fontSize: 48 },
  empty: { fontSize: 17, fontWeight: '700', color: colors.text, marginTop: 12 },
  emptySub: { fontSize: 13, color: colors.textSecondary, marginTop: 6, textAlign: 'center' },
  row: { flexDirection: 'row', gap: 10, alignItems: 'center', backgroundColor: colors.card, borderWidth: 1, borderColor: colors.border, borderRadius: 12, padding: 14 },
  name: { fontSize: 16, fontWeight: '700', color: colors.text },
  cat: { fontSize: 12, color: colors.primary, marginTop: 2 },
});
