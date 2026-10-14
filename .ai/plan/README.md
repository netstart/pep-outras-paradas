# Peptide Lab — Plano Completo do App

## Enciclopédia definitiva de peptídeos para iOS e Android

Este diretório contém o plano completo do app **Peptide Lab** — catálogo enciclopédico de peptídeos baseado em evidência científica verificável.

| # | Documento | Conteúdo |
|---|-----------|----------|
| 01 | [Nome Comercial e Branding](01-nome-comercial-e-branding.md) | Nome **PEPTIDE LAB®**, tagline, identidade visual, proteção de marca |
| 02 | [Pesquisa Científica e Metodologia](02-pesquisa-cientifica-metodologia.md) | Fontes Nível A/B/C (PubMed, Cochrane, FDA, ANVISA), taxonomia de 9 categorias de peptídeos, schema da ficha, perguntas de aprofundamento |
| 03 | [Sinergias, Contraindicações e Doses](03-sinergias-contraindicacoes-doses.md) | Matriz de sinergias (BPC-157+TB-500, etc.), contraindicações por classe com referências, fichas de dosagem (mín/média/máx/via/local/duração), vias de aplicação |
| 04 | [Arquitetura Técnica](04-arquitetura-tecnica.md) | React Native + Expo + TypeScript, Supabase, offline-first SQLite, embed de YouTube/TikTok/Instagram/Reddit, publicação App Store/Play |
| 05 | [UX, Design e Usabilidade](05-ux-design-usabilidade.md) | Pesquisa sobre apps de leitura/estudo (Kindle, Anki, Epocrates, UpToDate), princípios de UX, padrões de interação, métricas |
| 06 | [Conteúdo Multimídia e Integrações](06-conteudo-multimidia-e-integracoes.md) | Modelo de mídia por ficha, política de direitos autorais, curadoria de vídeos e redes sociais |
| 07 | [Roadmap e Entregas](07-roadmap-e-entregas.md) | Fases 0–4 (fundação → MVP → verificador → lançamento → expansão), riscos e mitigações |
| 08 | [Monetização, Legal e Distribuição](08-monetizacao-legal-e-distribuicao.md) | Freemium/Pro, aspects legais (disclaimer médico, LGPD, WADA), estratégia de lojas |
| 09 | [Revisão Multidisciplinar e Melhorias](09-revisao-multidisciplinar-melhorias.md) | Avaliação por especialidade (química, biomedicina, medicina do esporte, ortopedia, ed. física, emagrecimento, software, UX), 20 melhorias incorporadas, governança de conteúdo |
| 10 | [Qualidade e Testes](10-qualidade-e-testes.md) | Pirâmide de testes, 100% de cobertura nas regras do Verificador, gates de CI, validação manual via emulador (scripts em `scripts/`) |

## Scripts de QA
| Script | Função |
|--------|--------|
| <../../scripts/setup.ps1> | Cria o projeto Expo e instala dependências (rodar 1x) |
| <../../scripts/android-emulator.ps1> | Sobe o emulador Android e inicia o app |
| <../../scripts/ios-simulator.ps1> | Orientação/alternativas para iOS (macOS, Expo Go, EAS) |
| <../../scripts/validate.ps1> | Lint + typecheck + testes + abre emulador com checklist |
| <../../scripts/manual-validation-checklist.md> | Checklist de QA manual por release |

## Visão resumida
- **Produto**: enciclopédia offline-first de peptídeos com fichas completas, doses, sinergias, contraindicações, todas com referência científica verificável (PMID/DOI).
- **Tecnologia**: React Native/Expo (um codebase para iOS + Android), Supabase, SQLite offline, RNA de YouTube embed oficial.
- **Diferencial**: selo de nível de evidência por ficha + Verificador de Stacks (matriz de interações) + conteúdo multimídia curado.
- **Nota**: a pesquisa web em tempo real estava indisponível nesta sessão; a taxonomia e fichas base derivam de conhecimento científico consolidado e a metodologia de verificação no doc 02 é obrigatória antes de qualquer publicação.