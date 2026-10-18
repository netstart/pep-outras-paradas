import { Peptide } from '../types';

export const elcatonin: Peptide = {
  id: 'elcatonin',
  nome: 'Elcatonin',
  sinonimos: ['Elcatonin'],
  categoria: 'Metabólico / Osteoporose',
  nivelRegulatorio: 'approved',
  resumo: 'Hormônio calcotonina de origem de enguias-do-mar (elasmobrânquios) utilizado no tratamento da osteoporose.',
  mecanismo: 'Similar à calcitonina mamelífera, inibe a reabsorção óssea pelos osteoclastos.',
  indicacoesEstudadas: [
    {
      condicao: 'Osteoporose pós-menopáusica',
      nivel: 'B',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Elcatonin for osteoporosis treatment', 
          fonte: 'Journal of Clinical Endocrinology & Metabolism', 
          ano: 1992, 
          pmid: '1519847', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '10-20 UI/dia',
    doseMedia: '20-30 UI/dia',
    doseMaxima: '40 UI/dia',
    frequencia: '1x/dia',
    vias: ['Injetável'],
    locaisAplicacao: ['Subcutânea/IM'],
    duracaoMinima: '4 semanas',
    duracaoMaxima: 'Contínuo',
    notas: 'Dosagem baseada em estudos clínicos com formulação injetável.',
    referencias: [
      { 
        titulo: 'Elcatonin prescribing information', 
        fonte: 'PMDA Label', 
        ano: 2010, 
        nivel: 'B', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipersensibilidade conhecida à elcatonin',
      gravidade: 'moderada',
      mecanismo: 'Reação alérgica potencial',
      referencias: [
        { 
          titulo: 'Allergic reactions to elcatonin', 
          fonte: 'Journal of Allergy and Clinical Immunology', 
          ano: 2000, 
          pmid: '10752449', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  interacoes: [],
  efeitosAdversos: [
    'Náusea',
    'Vermelhidão no local da injeção',
    'Febre leve',
    'Tontura'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Cálcio sérico',
    'Fósforo sérico',
    'Marcadores de remodelação óssea',
    'Densidade mineral óssea'
  ],
  sinaisAlerta: [
    'Reação alérgica grave',
    'Hipocalcemia',
    'Reação local severa'
  ],
  referencias: [
    { 
      titulo: 'Elcatonin for osteoporosis treatment', 
      fonte: 'Journal of Clinical Endocrinology & Metabolism', 
      ano: 1992, 
      pmid: '1519847', 
      nivel: 'B', 
      modelo: 'human' 
    },
    { 
      titulo: 'Comparative calcitonin effects: elcatonin vs salmon calcitonin', 
      fonte: 'Calcified Tissue International', 
      ano: 1995, 
      pmid: '7633941', 
      nivel: 'B', 
      modelo: 'human' 
    },
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
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química da Elcatonin', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/elcatonin/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Elcatonin in osteoporosis treatment', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/7633941/' 
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Elcatonin - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Elcatonin+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Elcatonin - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Elcatonin+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Elcatonin - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Elcatonin+efeitos+cuidados',
      credito: 'YouTube'
    }
  ]
};