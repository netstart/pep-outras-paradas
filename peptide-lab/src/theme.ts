// Identidade visual do Peptide Lab (ver .ai/plan/01-nome-comercial-e-branding.md)
export const colors = {
  primary: '#003B73',        // Azul científico
  primaryLight: '#E8F1FA',
  accent: '#00A86B',         // Verde esmeralda
  danger: '#C0392B',
  warning: '#E85D04',
  caution: '#C99700',
  ok: '#00A86B',
  text: '#2D2D2D',
  textSecondary: '#6B7280',
  background: '#FFFFFF',
  card: '#F7F9FC',
  border: '#E5E7EB',
} as const;

export const levelConfig = {
  approved:  { color: colors.ok,      emoji: '🟢', label: 'Aprovado (FDA/ANVISA)' },
  offlabel:  { color: colors.caution, emoji: '🟡', label: 'Uso off-label com evidência' },
  preliminary:{ color: colors.warning, emoji: '🟠', label: 'Evidência preliminar' },
  research:  { color: colors.danger,  emoji: '🔴', label: 'Apenas pesquisa / não aprovado' },
} as const;

export const evidenceModelConfig = {
  invitro: { emoji: '🧪', label: 'in vitro' },
  animal:  { emoji: '🐭', label: 'animal' },
  human:   { emoji: '👤', label: 'humano' },
  meta:    { emoji: '📚', label: 'meta-análise' },
} as const;
