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
      nível: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Pentagastrin test for gastric acid secretion', 
          fonte: 'Journal of Clinical Endocrinology & Metabolism', 
          ano: 1969, 
          pmid: '5783178', 
          nível: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '6 mcg',
    doseMedia: '6 mcg',
    doseMaxima: '25 mcg',
    frequência: ' dose única',
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
        nível: 'B', 
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
          nível: 'B', 
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
      nível: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Pentagastrin in gastrointestinal function', 
      fonte: 'American Journal of Gastroenterology', 
      ano: 1980, 
      pmid: '7405796', 
      nível: 'B', 
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
    }
  ]
};