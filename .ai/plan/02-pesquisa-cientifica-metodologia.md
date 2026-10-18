# 02 — Metodologia de Pesquisa Científica e Estrutura do Catálogo

> **Nota importante**: A pesquisa web automatizada não estava disponível nesta sessão (API de busca sem credencial). Esta seção define a **metodologia de pesquisa verificável** que a equipe de conteúdo deverá executar, além da estrutura taxonômica de base construída sobre conhecimento científico consolidado. Todo conteúdo definitivo do app DEVE passar pelo pipeline de verificação descrito abaixo antes da publicação.

---

## 2.1. Fontes Primárias Autorizadas (Critério de Inclusão)

Todo texto do app DEVE citar fonte verificável de pelo menos um destes níveis:

### Nível A — Evidência Máxima
- **PubMed/MEDLINE** (https://pubmed.ncbi.nlm.nih.gov) — artigos revisados por pares; citar PMID
- **Cochrane Library** — revisões sistemáticas e meta-análises
- **ClinicalTrials.gov** — registro de ensaios clínicos (citar NCT ID)
- **Livros-texto de referência**: Goodman & Gilman (Farmacologia), Guyton & Hall (Fisiologia), Lehninger (Bioquímica), Williams Textbook of Endocrinology

### Nível B — Evidência Alta
- Periódicos de referência: *Nature*, *Science*, *Cell*, *The Lancet*, *NEJM*, *JAMA*, *Endocrine Reviews*, *Peptides* (Elsevier), *Journal of Peptide Science*, *British Journal of Sports Medicine*, *American Journal of Sports Medicine*
- Diretrizes de sociedades: FDA (labels aprovados), EMA, ANVISA, WADA (lista de substâncias proibidas), ISSN (International Society of Sports Nutrition)

### Nível C — Evidência Complementar
- Bases de dados: DrugBank, UniProt, PubChem, PharmacPeptide Databases
- Grey literature de qualidade: relatórios técnicos de agências regulatórias

### REGRA DE OURO
> Nenhuma afirmação entra no app sem: (1) citação com link/PMID/DOI, (2) nível de evidência atribuído (A/B/C), (3) data da revisão, (4) revisor responsável. Conteúdo de "uso off-label" ou "apenas pesquisa" recebe marcação visual distinta obrigatória.

#### Regras de Referências Científicas
- **Quantidade Mínima**: É obrigatório ter pelo menos **10 referências científicas** que demonstrem efeitos colaterais, efeitos ruins ou qualquer malefício ao uso para cada peptídeo catalogado.
- **Verificabilidade**: Todas as referências devem conter o link direto para permitir a leitura e verificação do conteúdo original.
- **Exibição na Aplicação**: Na interface do usuário, deve ser exibido apenas o link/título da referência (ex: `[Estudo X](url)`), e não a URL completa e aparente.

---

## 2.6. Referências Contra

Esta seção é dedicada a consolidar a evidência científica negativa. Para cada substância, a equipe de curadoria deve obrigatoriamente listar estudos que apontem:
- **Toxicidade**: Danos a órgãos ou sistemas.
- **Efeitos Adversos Comuns e Raros**: Reações aversivas documentadas.
- **Contraindicações Absolutas**: Casos onde o uso é estritamente proibido.
- **Riscos de Longo Prazo**: Estudos sobre carcinogênese, imunogenicidade ou disfunções endócrinas permanentes.

O objetivo é garantir que o usuário tenha acesso a uma visão equilibrada (benefícios vs. riscos), evitando o viés de confirmação apenas em estudos positivos.

---

## 2.2. Pipeline Editorial de Verificação

```
[Extração de fonte] → [Ficha técnica do peptídeo] → [Revisão farmacológica]
→ [Revisão médica] → [Checagem de contraindicações] → [Publicação versionada]
```

- Cada entrada recebe **hash de versão** e histórico de revisões (estilo Git)
- Alertas de atualização quando novo estudo de alto impacto é publicado (monitoramento PubMed)
- **Disclaimer legal** em cada página: conteúdo educacional, não substitui consulta médica
- **Conselho editorial nomeado** (médico/CRM, biomédico/CRBM, farmacêutico/CRF, educador físico/CREF) com credenciais exibidas no app — a ficha mostra autores, revisores, data e versão
- **Registro de correções público** (errata) — transparência editorial
- Toda referência carrega **selo de modelo**: 🧪 in vitro · 🐭 animal · 👤 humano · 📚 meta-análise
- **Regra anti-paywall**: contraindicações e sinais de alerta nunca ficam atrás de assinatura

---

## 2.3. Taxonomia Completa do Catálogo (Backbone)

### Categoria 1 — Peptídeos Metabólicos / Emagrecimento
| Peptídeo | Classe | Status Regulatório | Evidência |
|----------|--------|--------------------|-----------|
| Semaglutida (Ozempic/Wegovy) | Agonista GLP-1 | Aprovado FDA/ANVISA | Nível A (STEP trials) |
| Tirzepatida (Mounjaro) | Agonista duplo GIP/GLP-1 | Aprovado FDA/ANVISA | Nível A (SURPASS/SURMOUNT) |
| Liraglutida (Saxenda) | Agonista GLP-1 | Aprovado | Nível A (SCALE) |
| Retatrutida | Triplo agonista GIP/GLP-1/glucagon | Fase 3 | Nível B |
| Cagrilintida | Análogo de amilina | Fase 3 | Nível B |
| AOD-9604 | Fragmento de GH | Pesquisa | Nível C |

### Categoria 2 — Peptídeos de Reparo Tissular / Ortopedia
| Peptídeo | Mecanismo | Indicação Estudada | Evidência |
|----------|-----------|--------------------|-----------|
| BPC-157 | Angiogênese, via NO, fator de crescimento | Tendões, músculos, trato GI | Nível B/C (animal) |
| TB-500 (Timosina β4) | Regulação de actina, migração celular | Lesões musculares, cardíacas | Nível B |
| GHK-Cu | Modulação de genes, colágeno | Pele, cicatrização | Nível B |
| KPV | Anti-inflamatório (α-MSH fragmento) | Doença inflamatória intestinal | Nível B/C |
| LL-37 | Antimicrobiano, imunomodulador | Infecções, biofilmes | Nível B |

### Categoria 3 — Peptídeos de GH / Performance
| Peptídeo | Classe | Notas | Evidência |
|----------|--------|-------|-----------|
| CJC-1295 (com/sem DAC) | Análogo GHRH | Eleva GH/IGF-1 | Nível B |
| Ipamorelin | Secretagogo GH (GHS-R) | Seletivo, pouco efeito em cortisol | Nível B |
| GHRP-2 / GHRP-6 | Secretagogo GH | Aumenta apetite (grelina) | Nível B |
| Tesamorelin | GHRH aprovado (lipodistrofia HIV) | Reduz gordura visceral | Nível A |
| MK-677 (Ibutamoren) | Secretagogo oral (não-peptídeo) | Incluído por relevância clínica | Nível B |
| Sermorelin | GHRH 1-29 | Diagnóstico/terapia | Nível B |

### Categoria 4 — Peptídeos Neuroprotetores / Cognição
- **Semax** (neuropeptídeo regulador, aprovado na Rússia)
- **Selank** (ansiolítico peptídico)
- **Dihexa** (hepatocyte growth factor mimético — pesquisa)
- **Cerebrolysin** (mistura peptídica — acidente vascular cerebral, demência)
- **NAP (Davunetide)** — neuroproteção

### Categoria 5 — Peptídeos Moleculares de Longevidade
- **Epitalon** (telomerase)
- **MOTS-c** (peptídeo mitocondrial)
- **Humanin** (peptídeo mitocondrial)
- **SS-31 (Elamipretide)** — visando mitocôndria
- **GHK-Cu** (reversão de senescência celular em modelos)

### Categoria 6 — Peptídeos Sexuais / Hormonais
- **PT-141 (Bremelanotide)** — disfunção sexual (aprovado FDA para HSDD feminino)
- **Melanotan II** — pigmentação (não aprovado, riscos documentados)
- **Kisspeptin** — eixo reprodutivo
- **Gonadorelina (GnRH)** — diagnóstico/terapia

### Categoria 7 — Peptídeos Imunomoduladores
- **Timosina α1 (Zadaxin)** — aprovado em vários países (hepatite, imunidade)
- **Thymosin β4**
- **LL-37**
- **VIP (Peptídeo Intestinal Vasoativo)**

### Categoria 8 — Peptídeos Antimicrobianos
- **LL-37**, **Magaininas**, **Defensinas**, **Nisin**

### Categoria 9 — Peptídeos de Uso Médico Consolidado
- Insulina e análogos, Oxitocina, Vasopressina, Desmopressina, Calcitonina, Teriparatida (osteoporose), Exenatida, etc.

---

## 2.4. Ficha de Dados Padrão por Peptídeo (Schema)

Cada peptídeo no app segue estrutura fixa:

```json
{
  "id": "bpc-157",
  "nomes": { "comum": "BPC-157", "iupac": "...", "sinonimos": [] },
  "categoria": ["reparo-tissular"],
  "estrutura": { "sequencia": "...", "pesoMolecular": 1419.5, "formula": "..." },
  "mecanismo": { "texto": "...", "referencias": ["PMID:..."] },
  "quimica": {
    "numAminoacidos": 0, "ligacoesDissulfeto": 0, "modificacoesTerminais": "...",
    "solubilidade": "...", "estabilidadeLiofilizado": "...", "estabilidadeReconstituido": "...",
    "sensibilidades": ["luz", "agitacao", "ph"], "referencias": []
  },
  "indicacoes_estudadas": [{ "condicao": "...", "nivelEvidencia": "B", "modeloEvidencia": "humano-fase3", "referencias": [] }],
  "monitoramento": { "examesAntes": [], "examesDurante": [], "sinaisAlerta": [], "referencias": [] },
  "populacoesEspeciais": [{ "grupo": "gestantes", "orientacao": "...", "referencias": [] }],
  "contextoTreinamento": { "resumo": "...", "referencias": [] },
  "mitosEVerdades": [{ "afirmacao": "...", "veredito": "...", "referencias": [] }],
  "dosagem": {
    "doseMinima": "...", "doseMedia": "...", "doseMaxima": "...",
    "frequencia": "...", "via": ["subcutanea"], "locaisAplicacao": [],
    "duracaoMinima": "...", "duracaoMaxima": "...", "ciclo": "...",
    "referencias": []
  },
  "sinergias": [{ "substancia": "TB-500", "evidencia": "...", "referencias": [] }],
  "contraindicacoes": [{ "condicao": "...", "gravidade": "alta", "referencias": [] }],
  "interacoes_negativas": [{ "substancia": "...", "mecanismo": "...", "referencias": [] }],
  "efeitosAdversos": [],
  "statusRegulatorio": { "fda": "...", "anvisa": "...", "wada": "..." },
  "midias": { "videos": [], "imagens": [], "postsSociais": [] },
  "perguntasAprofundamento": []
}
```

---

## 2.5. Perguntas de Aprofundamento (FAQ Científico do App)

Perguntas que o próprio curador deve responder com referências e incluir:

1. **Peptídeos orais vs. injetáveis**: por que a maioria não é biodisponível oralmente? (degradação proteolítica, primeira passagem hepática)
2. **Estabilidade e armazenamento**: temperatura, liofilização, reconstituição, prazo após reconstituição
3. **O que acontece com a dose após o ciclo?** — washout, dowregulation de receptores
4. **Diferença entre peptídeo farmacêutico e "research chemical"** — pureza, HPLC, contaminantes
5. **Por que GHS elevam cortisol/prolactina em alguns casos?** — seletividade de receptor
6. **Peptídeos e câncer**: risco teórico de GH/IGF-1 em neoplasias — evidência atual
7. **Interação com treinamento físico**: timing de aplicação vs. exercício
8. **Farmacocinética**: meia-vida, Tmax, biodisponibilidade SC vs IM vs IV
9. **Tolerância e dessensibilização de receptores**: evidência em GHS e GLP-1
10. **Status antidoping**: quais estão na lista WADA e por quê (seção para atletas)

Cada pergunta vira uma página temática com referências Nível A/B.