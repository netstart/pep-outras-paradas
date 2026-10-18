import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { WebView } from 'react-native-webview';
import { useLocalSearchParams, Stack } from 'expo-router';
import { colors } from '../../theme';
import { peptides } from '../../data/peptides';
import { LevelBadge } from '../../components/Badges';
import { Section, ReferenceItem, InfoRow } from '../../components/UI';
import { SynergyContraSection } from '../../components/SynergyContraSection';
import { useStore } from '../../store';

const gravityColor = { alta: colors.danger, moderada: colors.caution, leve: colors.textSecondary } as const;

export default function PeptideDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const peptide = peptides.find((p) => p.id === id);
  const favorites = useStore((s) => s.favorites);
  const toggleFavorite = useStore((s) => s.toggleFavorite);

  if (!peptide) {
    return <View style={styles.center}><Text>Ficha não encontrada.</Text></View>;
  }
  const isFav = favorites.includes(peptide.id);
  const severe = peptide.contraindicacoes.filter((c) => c.gravidade === 'alta');

  // Extract YouTube video ID from URL (handles both embed and watch URLs)
  const getYouTubeVideoId = (url: string): string | null => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : null;
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: peptide.nome,
          headerRight: () => (
            <Pressable onPress={() => toggleFavorite(peptide.id)} accessibilityRole="button" accessibilityLabel={isFav ? 'Remover dos salvos' : 'Salvar ficha'}>
              <Text style={{ fontSize: 20 }}>{isFav ? '🔖' : '📑'}</Text>
            </Pressable>
          ),
        }}
      />
      <ScrollView style={{ flex: 1, backgroundColor: colors.background }} contentContainerStyle={{ padding: 16 }}>
        <Text style={styles.name}>{peptide.nome}</Text>
        <Text style={styles.syn}>{peptide.sinonimos.join(' · ')}</Text>
        <View style={styles.badges}>
          <LevelBadge level={peptide.nivelRegulatorio} />
        </View>
        <Text style={styles.review}>Revisado em {peptide.revisadoEm} — {peptide.revisadoPor}</Text>

        <Section title="⭐ Resumo (30 segundos)">
          <Text style={styles.body}>{peptide.resumo}</Text>
          <Text style={styles.disclaimer}>Conteúdo educacional. Não é prescrição médica.</Text>
        </Section>

        <Section title="⚙️ Mecanismo de ação" defaultOpen={false}>
          <Text style={styles.body}>{peptide.mecanismo}</Text>
        </Section>

        <Section title="💉 Doses e aplicação" defaultOpen={false}>
          <InfoRow label="Dose mínima" value={peptide.dosagem.doseMinima} />
          <InfoRow label="Dose média" value={peptide.dosagem.doseMedia} />
          <InfoRow label="Dose máxima" value={peptide.dosagem.doseMaxima} />
          <InfoRow label="Frequência" value={peptide.dosagem.frequencia} />
          <InfoRow label="Vias" value={peptide.dosagem.vias.join(', ')} />
          <InfoRow label="Locais" value={peptide.dosagem.locaisAplicacao.join(', ')} />
          <InfoRow label="Duração" value={`${peptide.dosagem.duracaoMinima} a ${peptide.dosagem.duracaoMaxima}`} />
          <Text style={styles.note}>📝 {peptide.dosagem.notas}</Text>
          <Text style={styles.disclaimer}>Doses descritas refletem a literatura — não são recomendação de uso.</Text>
        </Section>

        <Section title={`⛔ Contraindicações (${peptide.contraindicacoes.length})`} defaultOpen={severe.length > 0}>
          {peptide.contraindicacoes.map((c, i) => (
            <View key={i} style={[styles.contraCard, { borderLeftColor: gravityColor[c.gravidade] }]}>
              <Text style={[styles.contraTitle, { color: gravityColor[c.gravidade] }]}>{c.condicao}</Text>
              <Text style={styles.body}>{c.mecanismo}</Text>
              {c.referencias.map((r, j) => <ReferenceItem key={j} refe={r} index={j} />)}
            </View>
          ))}
          <Pressable style={styles.doctorBtn} onPress={() => WebBrowser.openBrowserAsync('https://www.google.com/search?q=médico+clínica+perto+de+mim')} accessibilityRole="button">
            <Text style={styles.doctorBtnText}>🩺 Fale com um profissional de saúde</Text>
          </Pressable>
        </Section>

        <SynergyContraSection peptide={peptide} />

        <Section title="📊 Efeitos adversos e monitoramento" defaultOpen={false}>
          <InfoRow label="Efeitos" value={peptide.efeitosAdversos.join('; ')} />
          <InfoRow label="Monitoramento" value={peptide.monitoramento.join('; ')} />
          <InfoRow label="Sinais de alerta" value={peptide.sinaisAlerta.join('; ')} />
          <InfoRow label="Status WADA" value={peptide.statusWada} />
        </Section>

        <Section title={`📚 Referências (${peptide.referencias.length})`} defaultOpen={false}>
          {peptide.referencias.map((r, i) => <ReferenceItem key={i} refe={r} index={i} />)}
        </Section>

        <Section title={`🎬 Mídia e comunidade (${peptide.midias.length})`} defaultOpen={false}>
          {peptide.midias.map((m, i) => {
            // Handle YouTube embedding (youtube-embed type)
            if (m.tipo === 'youtube-embed') {
              const videoId = getYouTubeVideoId(m.url);
              if (videoId) {
                return (
                  <View key={i} style={{ marginVertical: 12 }}>
                    <Text style={styles.mediaTitle}>{m.titulo}</Text>
                    <WebView
                      source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
                      style={{ width: '100%', height: 200, borderRadius: 8 }}
                      javaScriptEnabled={true}
                      domStorageEnabled={true}
                    />
                  </View>
                );
              }
            }
            
            // Handle illustrative images (tipo === 'imagem')
            if (m.tipo === 'imagem') {
              return (
                <View key={i} style={{ marginVertical: 12 }}>
                  <Image source={{ uri: m.url }} style={{ width: '100%', height: 180, borderRadius: 8 }} resizeMode="contain" accessibilityLabel={m.titulo} />
                  <Text style={styles.mediaTitle}>{m.titulo}</Text>
                  {m.tipo === 'imagem' && 'credito' in m && m.credito ? <Text style={styles.mediaWarn}>Fonte: {m.credito}</Text> : null}
                </View>
              );
            }

            // For other media types, keep original linking behavior
            return (
              <Pressable key={i} style={styles.mediaRow} onPress={() => WebBrowser.openBrowserAsync(m.url)} accessibilityRole="link">
                <Text style={styles.mediaIcon}>
                  {m.tipo === 'youtube-embed' ? '▶️' : m.tipo === 'instagram' ? '📸' : m.tipo === 'tiktok' ? '🎵' : m.tipo === 'reddit' ? '👽' : '📄'}
                </Text>
                <View style={{ flex: 1 }}>
                  <Text style={styles.mediaTitle}>{m.titulo}</Text>
                  {(m.tipo === 'reddit' || m.tipo === 'instagram' || m.tipo === 'tiktok') && (
                    <Text style={styles.mediaWarn}>Conteúdo da comunidade — não verificado</Text>
                  )}
                </View>
              </Pressable>
            );
          })}
        </Section>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  name: { fontSize: 26, fontWeight: '800', color: colors.text },
  syn: { fontSize: 13, color: colors.textSecondary, marginTop: 4 },
  badges: { flexDirection: 'row', gap: 8, marginTop: 10, flexWrap: 'wrap' },
  review: { fontSize: 12, color: colors.textSecondary, marginTop: 8, marginBottom: 16 },
  body: { fontSize: 15, color: colors.text, lineHeight: 22 },
  note: { fontSize: 13, color: colors.primary, marginTop: 10, lineHeight: 19 },
  disclaimer: { fontSize: 12, color: colors.danger, marginTop: 10, fontWeight: '600' },
  contraCard: { borderLeftWidth: 4, backgroundColor: '#fff', padding: 12, borderRadius: 8, marginBottom: 10, borderWidth: 1, borderColor: colors.border },
  contraTitle: { fontWeight: '700', fontSize: 14, marginBottom: 4 },
  doctorBtn: { backgroundColor: colors.primary, borderRadius: 10, padding: 14, alignItems: 'center', marginTop: 4, minHeight: 48, justifyContent: 'center' },
  doctorBtnText: { color: '#fff', fontWeight: '700' },
  interRow: { paddingVertical: 8, borderTopWidth: 1, borderTopColor: colors.border },
  interTitle: { fontWeight: '700', fontSize: 14, marginBottom: 4, color: colors.text },
  mediaRow: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 10, borderTopWidth: 1, borderTopColor: colors.border, minHeight: 48 },
  mediaIcon: { fontSize: 20 },
  mediaTitle: { fontSize: 14, color: colors.text, fontWeight: '600' },
  mediaWarn: { fontSize: 11, color: colors.warning },
});