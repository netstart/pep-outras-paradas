import { Peptide } from '../types';

export const pentagastrina: Peptide = {
  id: 'pentagastrina',
  nome: 'Pentagastrina',
  sinonimos: ['Pentagastrin'],
  categoria: 'Diagnóstico / Gastroenterologia',
  nivelRegulatorio: 'approved',
  resumo: 'Peptídeo sintético de cinco aminoácidos que estimula a secreção gástrica, utilizado em testes de função da secreção ácida gástrica.',
  mecanismo: 'Liga-se aos receptores de colecistocinina (CCK) e estimula a liberação de gastrina, aumentando a secreção de ácido clorídrico pelo estômago.',
  indicacoesEstudadas: [
    {
      condicao: 'Teste de função da secreção ácida gástrica',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Pentagastrin test for gastric acid secretion', 
          fonte: 'Journal of Clinical Endocrinology & Metabolism', 
          ano: 1969, 
          pmid: '5783178', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '6 mcg',
    doseMedia: '6 mcg',
    doseMaxima: '25 mcg',
    frequencia: ' dose única',
    vias: ['Subcutânea', 'Intramuscular'],
    locaisAplicacao: ['Abdome'],
    duracaoMinima: 'Teste único',
    duracaoMaxima: 'Teste único',
    notas: 'Dosagem padronizada para teste de estimulação de pentagastrina.',
    referencias: [
      { 
        titulo: 'Pentagastrin prescribing information', 
        fonte: 'FDA Label', 
        ano: 2010, 
        nivel: 'B', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Úlcera péptica ativa',
      gravidade: 'moderada',
      mecanismo: 'Risco de piora da úlcera devido ao aumento da secreção ácida',
      referencias: [
        { 
          titulo: 'Pentagastrin in peptic ulcer disease', 
          fonte: 'Gastroenterology', 
          ano: 1985, 
          pmid: '3892711', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  interacoes: [],
  efeitosAdversos: [
    'Náusea',
    'Vômito',
    'Dor abdominal',
    'Pirose',
    'Tontura'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Volume de secreção gástrica',
    'pH do conteúdo gástrico',
    'Sinais de desconforto abdominal'
  ],
  sinaisAlerta: [
    'Dor abdominal intensa',
    'Vômito com sangue',
    'Sinais de perfuração gástrica'
  ],
  referencias: [
    { 
      titulo: 'Pentagastrin test for gastric acid secretion', 
      fonte: 'Journal of Clinical Endocrinology & Metabolism', 
      ano: 1969, 
      pmid: '5783178', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Pentagastrin in gastrointestinal function', 
      fonte: 'American Journal of Gastroenterology', 
      ano: 1980, 
      pmid: '7405796', 
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
      titulo: 'Estrutura química da Pentagastrina', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/pentagastrin/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Pentagastrina in gastrointestinal testing', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/7405796/' 
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Pentagastrina - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Pentagastrina+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Pentagastrina - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Pentagastrina+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Pentagastrina - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Pentagastrina+efeitos+cuidados',
      credito: 'YouTube'
    }
  ]
};