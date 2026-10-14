import { Peptide } from '../types';

export const dulaglutida: Peptide = {
  id: 'dulaglutida',
  nome: 'Dulaglutida',
  sinonimos: ['Dulaglutide', 'Trulicity'],
  categoria: 'Metabólico / GLP-1',
  nivelRegulatorio: 'approved',
  resumo: 'Fusão de peptídeo similares ao glucagon-like peptide-1 (GLP-1) com imunoglobulina G humana (IgG-Fc), utilizado no tratamento do diabetes tipo 2.',
  mecanismo: 'Agonista do receptor GLP-1 com meia-vida estendida devido à fusão com IgG-Fc; estimula a secreção de insulina dependente de glicose, inibe a secreção de glucagon e retarda o esvaziamento gástrico.',
  indicacoesEstudadas: [
    {
      condicao: 'Diabetes tipo 2',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Dulaglutide for type 2 diabetes treatment', 
          fonte: 'The Lancet', 
          ano: 2014, 
          pmid: '24635343', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '0,75 mg/semana',
    doseMedia: '1,5 mg/semana',
    doseMaxima: '1,5 mg/semana',
    frequencia: '1x/semana',
    vias: ['Subcutânea'],
    locaisAplicacao: ['Abdome'],
    duracaoMinima: '4 semanas',
    duracaoMaxima: 'Contínuo',
    notas: 'Dosagem ajustada conforme resposta glicêmica e tolerabilidade.',
    referencias: [
      { 
        titulo: 'Dulaglutide prescribing information', 
        fonte: 'FDA Label - Trulicity', 
        ano: 2020, 
        nivel: 'A', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipersensibilidade conhecida à dulaglutida',
      gravidade: 'moderada',
      mecanismo: 'Reação alérgica potencial',
      referencias: [
        { 
          titulo: 'Allergic reactions to dulaglutide', 
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
          titulo: 'Dulaglutide in gastroparesis', 
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
      titulo: 'Dulaglutide for type 2 diabetes treatment', 
      fonte: 'The Lancet', 
      ano: 2014, 
      pmid: '24635343', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Long-term dulaglutide therapy for type 2 diabetes', 
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
      titulo: 'Estrutura química da Dulaglutida (representação)', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/dulaglutide/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Dulaglutida in diabetes therapy', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/25561157/' 
    }
  ]
};