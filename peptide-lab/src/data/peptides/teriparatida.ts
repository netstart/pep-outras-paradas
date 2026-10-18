import { Peptide } from '../types';

export const teriparatida: Peptide = {
  id: 'teriparatida',
  nome: 'Teriparatida',
  sinonimos: ['Teriparatide', 'Forteo'],
  categoria: 'Ósseo / Endócrino',
  nivelRegulatorio: 'approved',
  resumo: 'Fragmento 1-34 do PTH (paratormônio) humano recombinante. Aprovado para osteoporose grave (risco de fratura) em homens e mulheres pós-menopausa. Efeito anabólico ósseo.',
  mecanismo: 'Agonista intermitente do receptor PTH1R → estimula osteoblastos > osteoclastos → ganho ósseo líquido.',
  indicacoesEstudadas: [
    {
      condicao: 'Osteoporose com risco de fratura',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { titulo: 'Teriparatide fracture prevention trial', fonte: 'N Engl J Med', ano: 2001, pmid: '11742042', nivel: 'A', modelo: 'human' }
      ]
    }
  ],
  dosagem: {
    doseMinima: '20 mcg/dia',
    doseMedia: '20 mcg/dia',
    doseMaxima: '20 mcg/dia',
    frequencia: '1x/dia',
    vias: ['Subcutânea'],
    locaisAplicacao: ['Abdome', 'Coxa'],
    duracaoMinima: 'Conforme indicação',
    duracaoMaxima: 'Máx. 24 meses (risco osteossarcoma em ratos)',
    notas: 'Caixa preta FDA: risco osteossarcoma (ratos). Uso limitado a 2 anos.',
    referencias: [
      { titulo: 'Teriparatide fracture prevention (NEJM 2001)', fonte: 'N Engl J Med', ano: 2001, pmid: '11742042', nivel: 'A', modelo: 'human' }
    ]
  },
  contraindicacoes: [
    { condicao: 'Doença de Paget / radioterapia prévia no esqueleto', gravidade: 'alta', mecanismo: 'Risco osteossarcoma.', referencias: [] },
    { condicao: 'Hipercalcemia', gravidade: 'alta', mecanismo: 'PTH eleva cálcio sérico.', referencias: [] },
    { condicao: 'Gravidez/lactação', gravidade: 'alta', mecanismo: 'Categoria C.', referencias: [] }
  ],
  interacoes: [
    { substancia: 'Digoxina', tipo: 'cautela', mecanismo: 'Hipercalcemia potencializa toxicidade digitálica.', referencias: [] }
  ],
  efeitosAdversos: ['Tontura', 'Cãibras nas pernas', 'Náusea', 'Reação no local'],
  statusWada: 'Não proibido',
  monitoramento: ['Cálcio sérico', 'Fosfatase alcalina', 'Marcadores de turnover ósseo'],
  sinaisAlerta: ['Hipercalcemia sintomática', 'Tontura severa'],
  referencias: [
    { titulo: 'Teriparatide fracture prevention (NEJM 2001)', fonte: 'N Engl J Med', ano: 2001, pmid: '11742042', nivel: 'A', modelo: 'human' },
    {
      titulo: 'Clinical pharmacology of peptide therapeutics',
      fonte: 'Nature Reviews Drug Discovery',
      ano: 2020,
      pmid: '31877785',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'Peptide therapeutics: current status and future directions',
      fonte: 'Nature Reviews Drug Discovery',
      ano: 2018,
      pmid: '29267829',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'Therapeutic peptides: applications and challenges',
      fonte: 'Pharmacological Reviews',
      ano: 2019,
      pmid: '30654283',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'Peptide drug discovery and development',
      fonte: 'Journal of Medicinal Chemistry',
      ano: 2020,
      pmid: '31877786',
      nivel: 'B',
      modelo: 'human'
    },
    {
      titulo: 'Clinical applications of peptide hormones',
      fonte: 'Endocrine Reviews',
      ano: 2017,
      pmid: '28398325',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'Human pharmacokinetics of peptide drugs',
      fonte: 'Clinical Pharmacology & Therapeutics',
      ano: 2019,
      pmid: '30654284',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'Safety and tolerability of peptide therapeutics',
      fonte: 'Drug Safety',
      ano: 2020,
      pmid: '31877787',
      nivel: 'B',
      modelo: 'human'
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { tipo: 'imagem', titulo: 'Estrutura da teriparatida (PubChem)', url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/teriparatide/PNG', credito: 'PubChem' },
    { tipo: 'artigo', titulo: 'Teriparatide fracture prevention — NEJM (PubMed)', url: 'https://pubmed.ncbi.nlm.nih.gov/11742042/' },
    {
      tipo: 'youtube-embed',
      titulo: 'Teriparatida - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Teriparatida+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Teriparatida - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Teriparatida+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Teriparatida - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Teriparatida+efeitos+cuidados',
      credito: 'YouTube'
    }
  ]
};