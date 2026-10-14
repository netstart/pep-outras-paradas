# 04 — Arquitetura Técnica Multiplataforma

## 4.1. Decisão de Stack

### Recomendação: **React Native (Expo) + TypeScript**
| Critério | React Native (Expo) | Flutter | Nativo (2x) |
|----------|---------------------|---------|-------------|
| Um codebase p/ iOS+Android | ✅ | ✅ | ❌ |
| Renderização rica de mídia | ✅ (WebView, expo-video) | ✅ | ✅ |
| Notícias/leitura offline | ✅ | ✅ | ✅ |
| Velocidade de desenvolvimento | ✅ alta | ✅ alta | ❌ |
| Contratação de mão de obra | Muito disponível | Crescente | Caro |
| Publicação OTA (atualizar conteúdo sem review) | ✅ EAS Update | Parcial | ❌ |
| **Decisão** | **✅ SELECIONADO** | Alternativa forte | Rejeitado |

### Stack Completo
- **App**: React Native 0.74+ / Expo SDK 52+, TypeScript 5, Expo Router (navegação por arquivos)
- **Vídeos**: `expo-video` + `react-native-webview` para embed oficial YouTube (IFrame Player API — conformidade com ToS do YouTube)
- **Imagens**: `expo-image` (cache, blurhash placeholders)
- **Leitura**: renderização Markdown customizada → componentes nativos (não WebView para o corpo de texto — performance e acessibilidade)
- **Offline**: `expo-sqlite` (catálogo completo embarcado) + `expo-file-system` (cache de imagens)
- **Estado**: Zustand + TanStack Query (sync com CMS)
- **Links sociais (Instagram/TikTok/Reddit)**: `Linking.openURL` com `metadata` cards via Open Graph; embeds nativos apenas quando a API do provedor permitir (TikTok/Instagram embargam embed dentro de apps nativos — abrir no browser in-app via `expo-web-browser`)
- **Backend/CMS**: Supabase (Postgres + Storage + Auth + Edge Functions) ou Payload CMS self-hosted
- **Analytics ético**: PostHog self-hosted ou Telemetria mínima opt-in (saúde = dados sensíveis; minimizar coleta)
- **CI/CD**: EAS Build + EAS Submit (App Store + Google Play)

## 4.2. Arquitetura de Dados

```
┌─ Supabase (Postgres) ── conteúdo mestre versionado
│    ├── tabela peptides (fichas JSONB + FTS em pt/en/es)
│    ├── tabela references (PMID/DOI/URL + nível de evidência)
│    ├── tabela media (YouTube IDs, URLs de posts sociais, artigos)
│    └── edge function: checagem de atualizações + webhooks de revisão
│
├─ Build-time export → pacote SQLite embarcado no app (offline-first)
│
└─ App sincroniza deltas por EAS Update / fetch incremental
```

### Busca
- **Full-text search offline**: SQLite FTS5 (português com stemming)
- **Filtros**: categoria, nível de evidência, status regulatório, via de aplicação
- **Grafo de interações**: tabela `interactions(peptide_a, peptide_b, tipo, evidencia)` → tela "Verificador de Combinações"

## 4.3. Funcionalidade Central: "Verificador de Sinergias e Contraindicações"
- Usuário monta uma "pilha" (stack) de substâncias
- App consulta o grafo local e exibe: ✅ compatível, ⚠️ cautela (com fonte), ⛔ contraindicado (com fonte e black-box quando aplicável)
- Contraindicações por perfil do usuário (condições de saúde opt-in, dados ficam no dispositivo)

## 4.4. Mídias Externas — Conformidade
- **YouTube**: embed via IFrame API oficial (obrigatório; não baixar/retribuir mídia alheia)
- **Instagram/TikTok/Reddit**: deep links + preview Open Graph (embeds nativos violam ToS em apps)
- **Artigos científicos**: link direto PubMed/DOI + exibição de citação formatada (ABNT/AMA)

## 4.5. Estrutura de Navegação (Expo Router)
```
/app
  (tabs)/
    index.tsx            → Início (destaques, busca)
    catalogo/            → Lista + filtros + detalhe do peptídeo
      [id].tsx           → Ficha completa (abas: Visão geral | Doses | Sinergias | Contra | Referências | Mídia)
    verificador.tsx      → Checador de combinações
    aprenda.tsx          → Perguntas de aprofundamento, glossário
    salvos.tsx           → Favoritos offline
  modals/
    disclaimer.tsx       → Aceite legal na 1ª execução (obrigatório)
    referencia.tsx       → Modal com citação completa + link externo
```

## 4.6. Requisitos Não Funcionais
- **Offline-first**: catálogo completo funciona sem internet (crítico para app de referência)
- **Acessibilidade**: WCAG 2.1 AA, Dynamic Type, leitores de tela, contraste 4.5:1, TTS das fichas (descrição das imagens anatômicas)
- **Desempenho**: TTI < 2s em dispositivo mediana; listas virtualizadas (FlashList)
- **Privacidade**: LGPD/GDPR — dados de saúde nunca saem do dispositivo; telemetria opt-in
- **i18n desde o MVP**: PT-BR, EN, ES (strings externalizadas; citações científicas permanecem em inglês)
- **Integridade de conteúdo**: catálogo SQLite versionado com hash; atualizações por diffs assinados
- **Governança editorial (CI)**: deploy bloqueia se ficha alterar doses sem revisão assinada ou perder referências; 100% de cobertura de testes nas regras do Verificador de Stacks; snapshot tests de fichas
- **CMS com fluxo git-like**: rascunho → revisão dupla (farmacêutico + médico) → publicação assinada → changelog visível no app
- **App Store Review**: categoria Medical/Reference exige disclaimers robustos e citação de fontes — antecipar na descrição da loja

## 4.7. Estratégia de Publicação
| Loja | Considerações especiais |
|------|------------------------|
| **Apple App Store** | Regra 1.4.1 (Medical): disclaimers, "consulte um médico", sem alegações terapêuticas não aprovadas; incluir relatório de fontes para revisores |
| **Google Play** | Health apps declaration; política de alegações de saúde; categorizar como "Medical reference" |
| **Conteúdo** | Nunca vender/prescrever; botão "Fale com um profissional" opcional (telemedicina parceira, fase 2) |