# 05 — Pesquisa de UX, Design e Usabilidade (Apps de Leitura e Estudo)

> Síntese das práticas consolidadas em apps de leitura/estudo de referência (Kindle, Notion, Anki, Readwise, Medscape, Epocrates, UpToDate, Wikipedia, Blinkist) e diretrizes de plataforma (Apple HIG, Material Design 3). Foco: leitura longa + consulta rápida + retenção de conhecimento.

## 5.1. Referências Analisadas e Lições Extraídas

| App | Força principal | Lição para o Peptide Lab |
|-----|-----------------|--------------------------|
| **Kindle** | Leitura imersiva: ajuste de fonte, contraste, modo noturno, X-Ray (links contextuais) | Ficha do peptídeo com "X-Ray" próprio: tocar em termo técnico abre glossário sem sair da página |
| **Notion** | Blocos de conteúdo modulares, toggles, sumário lateral | Ficha em blocos colapsáveis (Doses, Interações, Referências) com índice "âncora" fixo |
| **Anki** | Repetição espaçada, flashcards | Módulo "Modo Estudo" opcional: flashcards gerados das fichas salvas |
| **Readwise** | Destaques e revisão diária | Destacar trechos das fichas + revisão embaralhada |
| **Epocrates/Medscape** | Consulta clínica ultrarrápida: busca instantânea, pill identifier, interaction checker | Busca deve dar a primeira resposta em <1s; Verificador de Interações como feature âncora |
| **UpToDate** | Hierarquia: resumo → evidência → referências | Cada ficha abre com "Resumo de 30 segundos" antes do detalhe |
| **Wikipedia** | Citação inline numerada, links internos densos | Toda afirmação tem [1][2] clicável → modal da referência |
| **Blinkist** | Resumos em cards; progresso de leitura | Cada peptídeo tem um "card de 5 pontos-chave" no topo |
| **Duolingo** | Progressão e streaks leves | Trilha de estudo por categoria (sem gamificação infantil — público adulto de saúde) |

## 5.2. Princípios de UX do Peptide Lab

1. **Dois modos mentais**: "Consulta rápida" (30s: dose, via, risco) vs "Estudo profundo" (leitura longa). A mesma ficha serve aos dois — resumo colapsável primeiro.
2. **Confiança acima de tudo**: nível de evidência (🟢🟡🟠🔴) visível em todo lugar; referência sempre a 1 toque; data de revisão da ficha à mostra.
3. **Zero fricção para fontes**: citações numeradas inline → bottom sheet com resumo do estudo + botão PubMed.
4. **Aviso sem pânico**: contraindicações usam alerta claro, não alarmista; sempre com ação sugerida ("converse com seu médico").
5. **Offline de verdade**: indicador discreto "conteúdo disponível offline".

## 5.3. Padrões de Interação Definidos

- **Busca global (mágica)**: campo no topo de todas as tabs; resultados agrupados por Peptídeos / Categorias / Perguntas / Referências; typo tolerance; destaque de termos.
- **Ficha estruturada (anatomia da tela detalhe)**:
  1. Header: nome, selo de status regulatório, selo de evidência, botão salvar
  2. Card "5 pontos-chave"
  3. Índice âncora horizontal (rolagem sincronizada)
  4. Blocos colapsáveis: Mecanismo · Doses e Aplicação · Sinergias · Contraindicações (abertas por padrão em vermelho se houver grave) · Efeitos adversos · Perguntas de aprofundamento · Referências · Mídia
- **Tipografia de leitura**: corpo 17pt padrão, line-height 1.5, até ~70 caracteres/linha; ajuste A-/A+ persistente; modo escuro OLED; modo sepia opcional.
- **Anatomia-com-mapa-de-aplicação**: ilustração interativa do corpo (front/back) para locais de aplicação — toque numa região filtra peptídeos aplicáveis ali.
- **Verificador de stack**: padrão "lista de compras" — adicionar, reordenar, ver matriz de interações par-a-par; resultado sempre com fontes.
- **Destaques e notas**: seleção de texto → destacar (4 cores semânticas: conceito, dose, risco, dúvida); revisão diária opcional.
- **Acessibilidade**: Dynamic Type, VoiceOver rotulando selos de evidência em texto, alvos de toque ≥44pt, redução de movimento respeitada.

## 5.4. Wireframes-chave (descrição)

1. **Home**: Busca grande → chips de categorias → "Continuar lendo" → destaque "Contraindicação da semana" (educativo).
2. **Detalhe do peptídeo**: descrito em 5.3 — é o coração do app.
3. **Verificador**: stack editável + resultado em semáforo + explicações com referências.
4. **Aprenda**: trilhas (Ex.: "GLP-1 do zero", "Peptídeos e ortopedia"), cada trilha = sequência de fichas + perguntas.
5. **Mídia**: seção por ficha com player YouTube embutido (thumbnail → player), cards de posts sociais com deep link.

## 5.5. Métricas de UX (medir no MVP)
- Tempo até a primeira resposta de busca (<1s local)
- % de usuários que abrem uma referência (meta >20% — sinal de confiança engajada)
- Uso do Verificador por sessão em usuários recorrentes
- Retenção D30 da trilha "Aprenda"
- Taxa de aceite de disclaimers (sem dark patterns)

## 5.6. Acréscimos da revisão multidisciplinar
- **Onboarding por perfil**: paciente / profissional de saúde / atleta / curioso → adapta vocabulário e densidade das fichas
- **Toggle "explique como se eu tivesse 12 anos"**: resumo em linguagem simples em cada ficha
- **TTS/leitura em voz alta** das fichas com velocidade ajustável; descrição completa das imagens anatômicas para VoiceOver
- **Conteúdo sensível controlado**: primeira visita a uma contraindicação grave exige "entendi" (registrado só no dispositivo)
- **Ética de paywall**: fichas de contraindicação e sinais de alerta nunca bloqueados por assinatura
- **Mapa corporal duplo**: modo Aplicação (SC/IM) e modo Região (ombro, joelho, tornozelo...) filtrando fichas e estudos por anatomia