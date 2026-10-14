import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors, levelConfig, evidenceModelConfig } from '../theme';
import type { RegulatoryLevel, EvidenceModel } from '../data/types';

export function LevelBadge({ level }: { level: RegulatoryLevel }) {
  const c = levelConfig[level];
  return (
    <View style={[styles.badge, { backgroundColor: c.color + '22', borderColor: c.color }]}
      accessibilityLabel={`Status regulatório: ${c.label}`}>
      <Text style={[styles.text, { color: c.color }]}>{c.emoji} {c.label}</Text>
    </View>
  );
}

export function ModelBadge({ modelo }: { modelo: EvidenceModel }) {
  const c = evidenceModelConfig[modelo];
  return (
    <View style={[styles.badge, { backgroundColor: colors.card, borderColor: colors.border }]}
      accessibilityLabel={`Modelo de evidência: ${c.label}`}>
      <Text style={[styles.text, { color: colors.textSecondary }]}>{c.emoji} {c.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: { borderWidth: 1, borderRadius: 999, paddingHorizontal: 10, paddingVertical: 4, alignSelf: 'flex-start' },
  text: { fontSize: 12, fontWeight: '600' },
});
