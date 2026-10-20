import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { colors } from '../theme';
import type { Reference } from '../data/types';
import { ModelBadge } from './Badges';

export function Section({ title, children, defaultOpen = true }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <View style={styles.section}>
      <Pressable onPress={() => setOpen(!open)} style={styles.header} accessibilityRole="button" accessibilityState={{ expanded: open }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.chevron}>{open ? '▾' : '▸'}</Text>
      </Pressable>
      {open && <View style={styles.body}>{children}</View>}
    </View>
  );
}

export function ReferenceItem({ refe, index }: { refe: Reference; index: number }) {
  const link = refe.url ?? (refe.pmid ? `https://pubmed.ncbi.nlm.nih.gov/${refe.pmid}/` : refe.doi ? `https://doi.org/${refe.doi}` : null);
  const positivo = refe.resultado === 'positivo';
  const negativo = refe.resultado === 'negativo';
  const neutro = refe.resultado === 'neutro';
  return (
    <Pressable
      disabled={!link}
      onPress={() => link && WebBrowser.openBrowserAsync(link)}
      style={styles.ref}
      accessibilityRole={link ? 'link' : 'text'}
      accessibilityLabel={`Referência ${index + 1}: ${refe.titulo}. ${refe.fonte}, ${refe.ano}.${positivo ? ' Resultado positivo.' : negativo ? ' Resultado negativo.' : neutro ? ' Necessita de mais estudos.' : ''}`}
    >
      <Text style={styles.refText}>
        [{index + 1}] {refe.titulo}. <Text style={{ fontStyle: 'italic' }}>{refe.fonte}</Text>, {refe.ano}.
        {refe.pmid ? ` PMID: ${refe.pmid}.` : ''}
        {link ? '  Toque para abrir a fonte →' : ''}
      </Text>
      {positivo && (
        <Text style={styles.refPositivo} accessibilityLabel="Resultado positivo">
          🟢
        </Text>
      )}
      {negativo && (
        <Text style={styles.refNegativo} accessibilityLabel="Resultado negativo">
          🔴
        </Text>
      )}
      {neutro && (
        <Text style={styles.refPrecisaEstudos} accessibilityLabel="Necessita de mais estudos">
          🟠
        </Text>
      )}
      <ModelBadge modelo={refe.modelo} />
    </Pressable>
  );
}

export function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowLabel}>{label}</Text>
      <Text style={styles.rowValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  section: { backgroundColor: colors.card, borderRadius: 12, marginBottom: 12, overflow: 'hidden', borderWidth: 1, borderColor: colors.border },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 14, minHeight: 48 },
  title: { fontSize: 16, fontWeight: '700', color: colors.primary },
  chevron: { fontSize: 16, color: colors.textSecondary },
  body: { paddingHorizontal: 14, paddingBottom: 14 },
  ref: { paddingVertical: 10, borderTopWidth: 1, borderTopColor: colors.border, gap: 6 },
  refText: { fontSize: 14, color: colors.text, lineHeight: 20 },
  refPositivo: { color: colors.ok, fontSize: 14, marginLeft: 6 },
  refNegativo: { color: colors.danger, fontSize: 14, marginLeft: 6 },
  refPrecisaEstudos: { color: colors.warning, fontSize: 14, marginLeft: 6 },
  row: { flexDirection: 'row', paddingVertical: 6, gap: 8 },
  rowLabel: { width: 130, fontSize: 14, fontWeight: '600', color: colors.textSecondary },
  rowValue: { flex: 1, fontSize: 14, color: colors.text },
});
