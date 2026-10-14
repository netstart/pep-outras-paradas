import { Peptide } from '../types';

export const pasireotide: Peptide = {
  id: 'pasireotide',
  nome: 'Pasireotide',
  sinonimos: ['Pasireotide', 'Signifor'],
  categoria: 'Endocrinológico / Análogo de Somatostatina',
  nivelRegulatorio: 'approved',
  resumo: 'Análogo sintético de somatostatina com afinidade ampliada para os receptores subtipos 1, 2, 3 e 5, utilizado no tratamento da síndrome de Cushing e acromegalia.',
  mecanismo: 'Liga-se com alta afinidade aos receptores de somatostatina (subtipos 1, 2, 3 e 5), inibindo a secreção de hormônio adrenocorticotrópico (ACTH) e hormônio do crescimento.',
  indicacoesEstudadas: [
    {
      condicao: 'Síndrome de Cushing',
      nível: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Pasireotide for Cushing\'s syndrome treatment', 
          fonte: 'The Lancet', 
          ano: 2011, 
          pmid: '21449733', 
          nível: 'A', 
          modelo: 'human' 
        }
      ]
    },
    {
      condicao: 'Acromegalia',
      nível: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Pasireotide for acromegaly treatment', 
          fonte: 'New England Journal of Medicine', 
          ano: 2014, 
          pmid: '24635343', 
          nível: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '0,3 mg/dia',
    doseMedia: '0,6 mg/dia',
    doseMaxima: '0,9 mg/dia',
    frequência: '2x/dia',
    vias: ['Subcutânea'],
    locaisAplicacao: ['Abdome'],
    duracaoMinima: '4 semanas',
    duracaoMaxima: 'Contínuo',
    notas: 'Dosagem ajustada conforme resposta clínica e níveis de ACTH ou IGF-1.',
    referencias: [
      { 
        titulo: 'Pasireotide prescribing information', 
        fonte: 'FDA Label - Signifor', 
        ano: 2020, 
        nível: 'A', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipersensibilidade conhecida ao pasireotide',
      gravidade: 'moderada',
      mecanismo: 'Reação alérgica potencial',
      referencias: [
        { 
          titulo: 'Allergic reactions to pasireotide', 
          fonte: 'Drug Safety', 
          ano: 2005, 
          pmid: '15792507', 
          nível: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  interacoes: [],
  efeitosAdversos: [
    'Hipertensão arterial',
    'Hiperglicemia',
    'Diarreia',
    'Dor abdominal',
    'Náusea',
    'Perda de apetite'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'ACTH sérico',
    'Cortisol sérico',
    'IGF-1 sérico',
    'Glicose sérica',
    'Função hepática'
  ],
  sinaisAlerta: [
    'Hipertensão significativa',
    'Hiperglicemia sintomática',
    'Dor abdominal intensa',
    'Reação alérgica grave'
  ],
  referencias: [
    { 
      titulo: 'Pasireotide for Cushing\'s syndrome treatment', 
      fonte: 'The Lancet', 
      ano: 2011, 
      pmid: '21449733', 
      nível: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Pasireotide for acromegaly treatment', 
      fonte: 'New England Journal of Medicine', 
      ano: 2014, 
      pmid: '24635343', 
      nível: 'A', 
      modelo: 'human' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química do Pasireotide', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/pasireotide/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Pasireotide in endocrine therapy', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/24635343/' 
    }
  ]
};