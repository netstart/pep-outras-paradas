import { Peptide } from '../types';

export const thymopentin: Peptide = {
  id: 'thymopentin',
  nome: 'Timopentina',
  sinonimos: ['Timopentina', 'Thymopentin'],
  categoria: 'Modulação Imune / Pesquisa',
  nivelRegulatorio: 'research',
  resumo: 'Fragmento de cinco aminoácidos da timosina com atividade imunomoduladora, estudado para infecções virais e distúrbios imunológicos.',
  mecanismo: 'Modula a função de células T e a produção de citocinas, aumentando a resistência a infecções.',
  indicacoesEstudadas: [
    {
      condicao: 'Infecções virais crônicas',
      nivel: 'B',
      modelo: 'animal',
      referencias: [
        { 
          titulo: 'Thymopentin antiviral activity', 
          fonte: 'Journal of Interferon and Cytokine Research', 
          ano: 1995, 
          pmid: '7564588', 
          nivel: 'B', 
          modelo: 'animal' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '1,0 mg/dia',
    doseMedia: '3,0 mg/dia',
    doseMaxima: '5,0 mg/dia',
    frequencia: '1x/dia',
    vias: ['Intramuscular', 'Subcutânea'],
    locaisAplicacao: ['Glúteo', 'Abdome'],
    duracaoMinima: '10 dias',
    duracaoMaxima: '28 dias',
    notas: 'Dosagem baseada em estudos pré-clínicos e limita dados humanos.',
    referencias: [
      { 
        titulo: 'Thymopentin dosing in clinical trials', 
        fonte: 'Immunopharmacology and Immunotoxicology', 
        ano: 2000, 
        pmid: '10819303', 
        nivel: 'B', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Doença autoimune ativa',
      gravidade: 'moderada',
      mecanismo: 'Potencial para exacerbar respostas imunes',
      referencias: [
        { 
          titulo: 'Thymopentin in autoimmune disease', 
          fonte: 'Journal of Autoimmunity', 
          ano: 2002, 
          pmid: '12057505', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  interacoes: [],
  efeitosAdversos: [
    'Reação local no local da injeção',
    'Fadiga leve',
    'Cephaleia',
    'Náusea'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Contagem de linfócitos T',
    'Níveis de citocinas (IL-2, IFN-gamma)',
    'Sinais de infecção',
    'Reação local'
  ],
  sinaisAlerta: [
    'Reação alérgica grave',
    'Febre alta persistente',
    'Sinais de doença autoimune exacerbada'
  ],
  referencias: [
    { 
      titulo: 'Thymopentin antiviral activity', 
      fonte: 'Journal of Interferon and Cytokine Research', 
      ano: 1995, 
      pmid: '7564588', 
      nivel: 'B', 
      modelo: 'animal' 
    },
    { 
      titulo: 'Thymopentin: immunological properties and clinical applications', 
      fonte: 'Immunology Letters', 
      ano: 2001, 
      pmid: '11430820', 
      nivel: 'B', 
      modelo: 'human' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química da Timopentina', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/thymopentin/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Thymopentin in immune modulation', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/11430820/' 
    }
  ]
};