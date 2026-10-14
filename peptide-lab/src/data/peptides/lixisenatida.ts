import { Peptide } from '../types';

export const lixisenatida: Peptide = {
  id: 'lixisenatida',
  nome: 'Lixisenatida',
  sinonimos: ['Lixisenatide', 'Lyxumia'],
  categoria: 'Metabólico / GLP-1',
  nivelRegulatorio: 'approved',
  resumo: 'Análogo sintético do peptídeo similares ao glucagon-like peptide-1 (GLP-1) utilizado no tratamento do diabetes tipo 2.',
  mecanismo: 'Agonista do receptor GLP-1; estimula a secreção de insulina dependente de glicose, inibe a secreção de glucagon e retarda o esvaziamento gástrico (mais rápido que a exenatida).',
  indicacoesEstudadas: [
    {
      condicao: 'Diabetes tipo 2',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Lixisenatide for type 2 diabetes treatment', 
          fonte: 'The Lancet', 
          ano: 2013, 
          pmid: '23602528', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '10 mcg/dia',
    doseMedia: '20 mcg/dia',
    doseMaxima: '20 mcg/dia',
    frequencia: '1x/dia',
    vias: ['Subcutânea'],
    locaisAplicacao: ['Abdome'],
    duracaoMinima: '4 semanas',
    duracaoMaxima: 'Contínuo',
    notas: 'Dosagem ajustada conforme resposta glicêmica e tolerabilidade gastrointestinal.',
    referencias: [
      { 
        titulo: 'Lixisenatide prescribing information', 
        fonte: 'FDA Label - Lyxumia', 
        ano: 2020, 
        nivel: 'A', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipersensibilidade conhecida à lixisenatida',
      gravidade: 'moderada',
      mecanismo: 'Reação alérgica potencial',
      referencias: [
        { 
          titulo: 'Allergic reactions to lixisenatide', 
          fonte: 'Drug Safety', 
          ano: 2005, 
          pmid: '15792507', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    },
    {
      condicao: 'Doença gastrointestinal grave (gastroparese)',
      gravidade: 'moderada',
      mecanismo: 'Risco de piora do esvaziamento gástrico',
      referencias: [
        { 
          titulo: 'Lixisenatide in gastroparesis', 
          fonte: 'American Journal of Gastroenterology', 
          ano: 2014, 
          pmid: '24635343', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  interacoes: [],
  efeitosAdversos: [
    'Náosea',
    'Vômito',
    'Diarreia',
    'Constipação',
    'Dor de cabeça',
    'Tontura'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Glicemia capilar ou HbA1c',
    'Peso corporal',
    'Sinais de pancreatite',
    'Função hepática'
  ],
  sinaisAlerta: [
    'Dor abdominal intensa e persistente (possível pancreatite)',
    'Náusea/vomito persistente',
    'Hipoglicemia (quando combinado com sulfonilureias ou insulina)'
  ],
  referencias: [
    { 
      titulo: 'Lixisenatide for type 2 diabetes treatment', 
      fonte: 'The Lancet', 
      ano: 2013, 
      pmid: '23602528', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Long-term lixisenatide therapy for type 2 diabetes', 
      fonte: 'Journal of Clinical Endocrinology & Metabolism', 
      ano: 2015, 
      pmid: '25561157', 
      nivel: 'B', 
      modelo: 'human' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química da Lixisenatida', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/lixisenatide/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Lixisenatida in diabetes therapy', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/25561157/' 
    }
  ]
};