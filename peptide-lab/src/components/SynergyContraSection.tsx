import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { Section, ReferenceItem } from './UI';
import type { Peptide, Interacao } from '../data/types';

type Props = {
  peptide: Peptide;
};

export function SynergyContraSection({ peptide }: Props) {
  const sinergiasBoas = peptide.interacoes.filter((i: Interacao) => i.tipo === 'sinergia');
  const sinergiasRuins = peptide.interacoes.filter((i: Interacao) => i.tipo === 'contraindicada');

  return (
    <>
      {/* 🟢 Sinergia boa */}
      {sinergiasBoas.length > 0 && (
        <Section title={`🟢 Sinergia boa (${sinergiasBoas.length})`} defaultOpen={false}>
          {sinergiasBoas.map((inter, i) => (
            <View key={i} style={styles.card}>
              <Text style={styles.title}>{inter.substancia}</Text>
              <Text style={styles.body}>{inter.mecanismo}</Text>
              {inter.referencias.length > 0 && (
                <View style={styles.refsWrap}>
                  {inter.referencias.map((r, j) => (
                    <Pressable
                      key={j}
                      style={styles.refRow}
                      onPress={() => {
                        const link =
                          r.url ??
                          (r.pmid ? `https://pubmed.ncbi.nlm.nih.gov/${r.pmid}/` : r.doi ? `https://doi.org/${r.doi}` : null);
                        if (link) WebBrowser.openBrowserAsync(link);
                      }}
                      accessibilityRole="link"
                    >
                      <Text style={styles.refText}>{r.titulo}</Text>
                    </Pressable>
                  ))}
                </View>
              )}
            </View>
          ))}
        </Section>
      )}

      {/* 🔴 Sinergia ruim */}
      {sinergiasRuins.length > 0 && (
        <Section title={`🔴 Sinergia ruim (${sinergiasRuins.length})`} defaultOpen={false}>
          {sinergiasRuins.map((inter, i) => (
            <View key={i} style={[styles.card, styles.cardRed]}>
              <Text style={[styles.title, styles.titleRed]}>{inter.substancia}</Text>
              <Text style={styles.body}>{inter.mecanismo}</Text>
              {inter.referencias.length > 0 && (
                <View style={styles.refsWrap}>
                  {inter.referencias.map((r, j) => (
                    <Pressable
                      key={j}
                      style={styles.refRow}
                      onPress={() => {
                        const link =
                          r.url ??
                          (r.pmid ? `https://pubmed.ncbi.nlm.nih.gov/${r.pmid}/` : r.doi ? `https://doi.org/${r.doi}` : null);
                        if (link) WebBrowser.openBrowserAsync(link);
                      }}
                      accessibilityRole="link"
                    >
                      <Text style={styles.refText}>{r.titulo}</Text>
                    </Pressable>
                  ))}
                </View>
              )}
            </View>
          ))}
        </Section>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  cardRed: {
    borderLeftWidth: 4,
    borderLeftColor: '#d32f2f',
  },
  title: {
    fontWeight: '700',
    fontSize: 15,
    marginBottom: 4,
    color: '#2e7d32',
  },
  titleRed: {
    color: '#d32f2f',
  },
  body: {
    fontSize: 13,
    color: '#333',
    lineHeight: 19,
    marginBottom: 6,
  },
  refsWrap: {
    marginTop: 6,
  },
  refRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  refText: {
    fontSize: 12,
    color: '#1565c0',
    fontStyle: 'italic',
  },
});
