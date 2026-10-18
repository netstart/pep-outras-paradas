# Requisitos do Projeto Peptide Lab

Este documento especifica os requisitos obrigatórios que todo conteúdo do aplicativo deve atender. Todos os agentes devem consultar este arquivo antes de iniciar qualquer tarefa relacionada a dados de substâncias.

---

## Requisito 1 — Referências Científicas

**Todas as substâncias do catálogo devem ter no mínimo 10 referências científicas.**

Cada referência deve conter:
- `titulo`: nome do estudo/artigo
- `fonte`: jornal/publicação (ex: N Engl J Med, Lancet, JAMA, Diabetes Care)
- `ano`: ano de publicação
- `pmid`: identificador PubMed (quando disponível)
- `nivel`: nível de evidência ('A', 'B' ou 'C')
- `modelo`: modelo de estudo ('invitro', 'animal', 'human' ou 'meta')

Onde possível, priorizar ensaios clínicos randomizados (RCTs), metanálises e diretrizes de sociedades médicas reconhecidas, indexados no PubMed (NCBI).

---

## Requisito 2 — Vídeos do YouTube

**Todas as substâncias do catálogo devem ter no mínimo 3 vídeos do YouTube.**

Cada vídeo deve ser adicionado ao array `midias` com:
- `tipo`: `'youtube-embed'`
- `titulo`: descritivo do conteúdo do vídeo
- `url`: link para busca ou vídeo específico no YouTube
- `credito`: `'YouTube'`

Sugestão de títulos para os 3 vídeos por substância:
1. `<Nome da Substância> - Visão Geral`
2. `<Nome da Substância> - Uso Clínico`
3. `<Nome da Substância> - Efeitos e Cuidados`

---

## Verificação

Antes de considerar qualquer tarefa concluída, o agente deve:
1. Executar `npx tsc --noEmit` e garantir 0 erros
2. Executar `npx expo lint` e garantir 0 erros
3. Verificar que cada arquivo de substância em `src/data/peptides/` e `src/data/esteroides/` tem pelo menos 10 referências no array `referencias`
4. Verificar que cada arquivo de substância tem pelo menos 3 entradas `tipo: 'youtube-embed'` no array `midias`

---

## Referências Adicionais

- Este documento está referenciado por `peptide-lab/AGENTS.md`
- O arquivo `peptide-lab/requisitos.md` contém a especificação original detalhada