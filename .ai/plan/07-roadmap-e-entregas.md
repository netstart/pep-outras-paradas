# 07 — Roadmap de Desenvolvimento e Entregas

## Fase 0 — Fundação (Semanas 1–4)
- Setup do monorepo (Expo SDK 52+, TypeScript, EAS)
- Design system inicial (cores/tipografia do branding doc 01)
- Schema de dados + Supabase + pipeline de importação de fichas
- Protótipo navegável com 5 fichas-piloto completas: Semaglutida, BPC-157, TB-500, Ipamorelin, GHK-Cu
- Documento legal: disclaimer, termos de uso, política de privacidade (LGPD)
- **Entregável**: protótipo clicável + 5 fichas revisadas por revisor médico

## Fase 1 — MVP (Semanas 5–12)
- Catálogo inicial: 30 peptídeos com ficha completa (todas as seções + referências Nível A/B), incluindo novos blocos: **Química & Estabilidade**, **Monitoramento**, **selo de modelo de evidência** (in vitro/animal/humano/meta)
- Busca FTS offline + filtros
- Ficha detalhe com blocos colapsáveis, citações inline, modo escuro
- **i18n PT-BR/EN/ES** desde o MVP
- CMS com fluxo git-like + changelog visível + conselho editorial nomeado publicado no app
- Embed YouTube, deep links sociais
- Disclaimer de primeiro uso + rodapé legal
- **Entregável**: TestFlight + Google Play Internal Testing

## Fase 2 — Verificador e Estudo (Semanas 13–20)
- Verificador de Sinergias/Contraindicações (matriz de interações + semáforo) com **100% de cobertura de testes nas regras de segurança**
- **Busca invertida por condição de saúde** + tabela de populações especiais
- Seção **Ortopedia & Reabilitação** por região anatômica
- **Mitos e Verdades** por peptídeo
- **Contexto de treinamento** e tabelas comparativas de ensaios (STEP/SURMOUNT/retatrutida)
- Calculadora de reconstituição/dose (educacional, com disclaimers) + guia "Como ler um CoA"
- PubMed Watcher (ferramenta editorial interna)
- Onboarding por perfil + modo "linguagem simples"
- Seção Aprenda: trilhas + 20 perguntas de aprofundamento com fontes
- Favoritos, destaques, notas
- Mapa corporal **duplo** (aplicação + região anatômica)
- **Entregável**: Beta público (iOS + Android)

## Fase 3 — Lançamento (Semanas 21–26)
- 60+ peptídeos catalogados; auditoria final de referências
- Notificações opt-in de atualizações de evidência ("nova revisão em semaglutida")
- ASO das lojas, páginas de marketing
- Revisão App Store 1.4.1 preparada (documento de fontes para revisores)
- **Entregável**: Lançamento público v1.0

## Fase 4 — Expansão (pós-lançamento)
- Idiomas: EN e ES (PT-BR é o inicial)
- Comunidade curada, CAQUI: coleções compartilháveis de fichas
- Portal web somente leitura (SEO) alimentando downloads
- Programa de revisão por especialistas nomeados (biomédico, médico do esporte, educador físico)

## Riscos e Mitigações
| Risco | Impacto | Mitigação |
|-------|---------|-----------|
| Rejeição App Store (regra médica) | Alto | Disclaimers rigorosos, conteúdo referencial, zero alegações terapêuticas, documentar fontes para revisão |
| Responsabilidade por doses | Alto | Disclaimer por ficha, "doses estudadas ≠ recomendação", CTA para profissional |
| Violação de ToS de mídias sociais | Médio | Apenas deep links + metadados Open Graph |
| Desatualização de evidências | Médio | Pipeline editorial versionado + monitoramento PubMed |
| Conteúdo copiado | Alto | Toda redação original, com curador assinado e fonte citada |