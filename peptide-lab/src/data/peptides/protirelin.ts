import { Peptide } from '../types';

export const protirelin: Peptide = {
  id: 'protirelin',
  nome: 'Protirelin',
  sinonimos: ['Protirelin', 'Hormônio Liberador de Tireotrofina (TRH)'],
  categoria: 'Eixo HPA / Diagnóstico',
  nivelRegulatorio: 'approved',
  resumo: 'Hormônio liberador de tireotrofina (TRH) utilizado em testes de função da hipófise anterior e tireoide.',
  mecanismo: 'Estimula a liberação de TSH e prolactina da hipófise anterior via receptores TRH hipofisários.',
  indicacoesEstudadas: [
    {
      condicao: 'Teste de função da hipófise anterior',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'TRH test for pituitary function', 
          fonte: 'Journal of Clinical Endocrinology & Metabolism', 
          ano: 1975, 
          pmid: '1156543', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    },
    {
      condicao: 'Avaliação do eixo hipotálamo-hipófise-tireoide',
      nivel: 'B',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Protirelin in thyroid function testing', 
          fonte: 'Thyroid', 
          ano: 1990, 
          pmid: '2312786', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '200 mcg',
    doseMedia: '500 mcg',
    doseMaxima: '1000 mcg',
    frequencia: ' dose única',
    vias: ['Intravenosa'],
    locaisAplicacao: ['Veia periférica'],
    duracaoMinima: 'Teste único',
    duracaoMaxima: 'Teste único',
    notas: 'Dosagem padronizada para teste de estimulação de TRH.',
    referencias: [
      { 
        titulo: 'Protirelin prescribing information', 
        fonte: 'FDA Label', 
        ano: 2010, 
        nivel: 'B', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipersensibilidade conhecida ao protirelin',
      gravidade: 'moderada',
      mecanismo: 'Reação alérgica potencial',
      referencias: [
        { 
          titulo: 'TRH receptor antagonist studies', 
          fonte: 'Endocrinology', 
          ano: 1995, 
          pmid: '7775648', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  interacoes: [
    {
      substancia: 'Hormônios tireoidianos em excesso',
      tipo: 'cautela',
      mecanismo: 'Pode resultar em resposta TSH blanada em tireotoxicose',
      referencias: [
        { 
          titulo: 'TRH response in hyperthyroidism', 
          fonte: 'Journal of Clinical Endocrinology & Metabolism', 
          ano: 1980, 
          pmid: '7405796', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  efeitosAdversos: [
    'Rubor facial',
    'Sudorese',
    'Micção frequente',
    'Sensação de aperto no peito',
    'Tontura transitória'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'TSH sérico em 20 e 60 minutos pós-estimulação',
    'Prolactina sérica',
    'Pressão arterial',
    'Frequência cardíaca'
  ],
  sinaisAlerta: [
    'Reação alérgica grave (anafilaxia)',
    'Hipotensão significativa',
    'Dor torácica intensa'
  ],
  referencias: [
    { 
      titulo: 'TRH test for pituitary function', 
      fonte: 'Journal of Clinical Endocrinology & Metabolism', 
      ano: 1975, 
      pmid: '1156543', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Fifty years of TRH: from discovery to clinical application', 
      fonte: 'Endocrine Reviews', 
      ano: 2005, 
      pmid: '15831685', 
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
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química do Protirelin (TRH)', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/protirelin/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Protirelin in pituitary function testing', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/15831685/' 
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Protirelin - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Protirelin+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Protirelin - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Protirelin+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Protirelin - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Protirelin+efeitos+cuidados',
      credito: 'YouTube'
    }
  ]
};