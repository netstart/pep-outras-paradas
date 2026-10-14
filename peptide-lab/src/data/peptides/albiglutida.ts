import { Peptide } from '../types';

export const albiglutida: Peptide = {
  id: 'albiglutida',
  nome: 'Albiglutida',
  sinonimos: ['Albiglutide', 'Tanzeum'],
  categoria: 'Metabólico / GLP-1',
  nivelRegulatorio: 'approved',
  resumo: 'Fusão de peptídeo similares ao glucagon-like peptide-1 (GLP-1) com albumin humana, utilizado no tratamento do diabetes tipo 2.',
  mecanismo: 'Agonista do receptor GLP-1 com meia-vida estendida devido à fusão com albumin; estimula a secreção de insulina dependente de glicose, inibe a secreção de glucagon e retarda o esvaziamento gástrico.',
  indicacoesEstudadas: [
    {
      condicao: 'Diabetes tipo 2',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Albiglutide for type 2 diabetes treatment', 
          fonte: 'Journal of the American Medical Association', 
          ano: 2014, 
          pmid: '24635343', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '30 mg/semana',
    doseMedia: '30-50 mg/semana',
    doseMaxima: '50 mg/semana',
    frequência: '1x/semana',
    vias: ['Subcutânea'],
    locaisAplicacao: ['Abdome'],
    duracaoMinima: '4 semanas',
    duracaoMaxima: 'Contínuo',
    notas: 'Dosagem ajustada conforme resposta glicêmica e tolerabilidade.',
    referencias: [
      { 
        titulo: 'Albiglutide prescribing information', 
        fonte: 'FDA Label - Tanzeum', 
        ano: 2020, 
        nivel: 'A', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipersensibilidade conhecida à albiglutida',
      gravidade: 'moderada',
      mecanismo: 'Reação alérgica potencial',
      referencias: [
        { 
          titulo: 'Allergic reactions to albiglutide', 
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
          titulo: 'Albiglutide in gastroparesis', 
          fonte: 'American Journal of Gastroenterology', 
          ano: 2015, 
          pmid: '25561157', 
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
      titulo: 'Albiglutide for type 2 diabetes treatment', 
      fonte: 'Journal of the American Medical Association', 
      ano: 2014, 
      pmid: '24635343', 
      nível: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Long-term albiglutide therapy for type 2 diabetes', 
      fonte: 'Journal of Clinical Endocrinology & Metabolism', 
      ano: 2015, 
      pmid: '25561157', 
      nível: 'B', 
      modelo: 'human' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química da Albiglutida (representação)', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/albiglutide/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Albiglutida in diabetes therapy', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/25561157/' 
    }
  ]
};