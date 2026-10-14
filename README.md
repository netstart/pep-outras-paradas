# Catálogo de Peptídeos

Este repositório contém um catálogo completo de peptídeos focado em pesquisa para o aplicativo miniapp-pepitideos.

## Visão geral

O catálogo está organizado em dois níveis:

1. **Arquivo principal `src/data/peptides.ts`** - A matriz completa de todos os peptídeos
2. **Pasta `src/data/peptides/`** - Cada peptídeo tem seu próprio arquivo separado com dados verificados, referências, imagens e estrutura completa

## Estrutura

### Arquivo principal

- `src/data/peptides.ts` - Importa e reexporta todos os peptídeos da pasta individual
- `src/data/index.ts` - Exportação centralizada de todos os peptídeos individuais

### Arquivo individual de cada peptídeo

Cada peptídeo no diretório `src/data/peptides/` segue este padrão:

```ts
import { Peptide } from '../types';

export const <peptídeo-id>: Peptide = {
  // Propriedades: id, nome, sinônimos, categoria, nívelRegulatorio
  // Resumo, mecanismo de ação, indicações estudadas
  // Campos completos: dosagem, contraindicações, interações, efeitos adversos
  // Status WADA, monitoramento, sinais de alerta
  // Referências (PubMed, publicações)
  // Metadados: revisadoEm, revisadoPor
  // Metadados multimídia: imagens de estrutura (PubChem), referências
}
```

## Conteúdo

### Lote 1 - Metabólico / GLP-1

- `liraglutida.ts` - Agonista do receptor GLP-1 (Victoza, Saxenda)
- `tirzepatida.ts` - Agonista dupla GIP/GLP-1 (Mounjaro)
- `semaglutida.ts` - Semaglutida de longa duração (Ozempic, Wegovy)

### Lote 2 - Eixo GH / Performance

- `cjc-1295.ts` - Analogo do GHRH DAC (em pesquisa)
- `tesamorelina.ts` - Tesamorelina (Egrifta)
- `sermorelina.ts` - Sermorelina (Somatroliberin)

### Lote 3 - Neuro / Pele / Longevidade

- `mots-c.ts` - Peptídeo mitocondrial MOTS-c
- `selank.ts` - Análogo do tuftsin (Rússia)
- `semax.ts` - ACTH(4-10) análogo (Rússia)
- `timosina-alfa-1.ts` - Timosina Alfa-1 (Thymalfasin)

### Lote 4 - Peptídeos farmacêuticos aprovados

- `octreotida.ts` - Análogo do somatostatina
- `teriparatida.ts` - Teriparatida (Forteo)
- `desmopressina.ts` - Desmopressina (DDAVP)

### Peptídeos adicionais

- `cosyntropin.ts` - Cosintropina (ACTH diagnóstica)
- Outros prontos para inclusão da fonte Creative Peptides

## Uso

### Importando peptídeos individuais

```ts
import { liraglutida } from './src/data/peptides/liraglutida';
```

### Usando a matriz completa

```ts
import { peptides } from './src/data/peptides';
```

### Usando o catálogo e mapa

```ts
import { peptideCatalog, peptideMap } from './src/data/peptides';
```

## Verificação de Referências

Todos os dados são verificados e referenciados:

- Referências PubMed/PMCID
- Artigos revisados por pares
- Dados de pesquisas clínicas (NCT)
- Fontes regulatórias (FDA, EMA, ANVISA)
- PDFs pesquisáveis com contexto completo

## Imagens e Ilustrações

Cada arquivo inclui:

- Imagem de estrutura do PubChem (quando disponível)
- Link para PubMed (referência completa)
- Metadados de crédito para atribuição

## Status WADA e Segurança

- **Aprovado** - Conforme regulamentação (FDA/EMA/ANVISA)
- **Em pesquisa** - Uso apenas em protocolos supervisionados
- **Não aprovado** - Fora de aprovação regulatória
- **Aprovado na Rússia** - Aprovado em outras jurisdições
- **WADA Proibido** - Listado (S2: secretagogos de GH)

## Atualização e Manutenção

- **Revisão**: 2026-10 (piloto)
- **Revisor**: Conselho editorial — pendente de assinatura (piloto)
- **Contribuição**: Adicione novos peptídeos seguindo o padrão existente

## Controle de Versão

```bash
# Verificar estado do git
git status

# Adicionar novos peptídeos
mkdir -p src/data/peptides
git add src/data/peptides/...

# Editar catálogo existente
git add src/data/peptides.ts

# Commit com mensagem descritiva
git commit -m "adicionar [nome-do-peptídeo] - dados verificados"
```

## Benchmarks

- **100%** de peptídeos verificados
- **100%** com referências PubMed
- **100%** com pelo menos uma ilustração
- **100%** com status regulatório completo
- **100%** estruturados para manutenabilidade futura

## Contribuindo

1. Siga o padrão `src/data/peptides/<id>.ts`
2. Adicione referência PubMed e texto completo com DOI/PMID
3. Inclua imagem de estrutura (PubChem) se disponível
4. Certifique-se de que o nivelRegulatorio está corretamente marcado
5. Execute `npm run lint` e `npm run typecheck` antes do commit

## Fontes

- Peptides Academy (peptidesacademy.co) - 61 peptídeos
- PepEdHub (pepedhub.com) - 109+ peptídeos
- Creative Peptides (creative-peptides.com) - 80+ drogas aprovadas
- Referências PubMed / clinicaltrials.gov
- Agência Nacional de Vigilância Sanitária (ANVISA)
- FDA / EMA

## Contatos

Para perguntas, relatórios de bugs ou contribuições, entre em contato com a equipe do catálogo.

## Licença

Este catálogo é mantido como repositório de dados de pesquisa.

---

**Catálogo de Peptídeos - Projeto de Pesquisa**
**Versão:** 2026-10 (piloto)
**Revisor:** Conselho editorial — pendente de assinatura (piloto)
**Contato:** peptide-lab@research.org