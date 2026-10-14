import { Peptide } from '../types';

export const argipressina: Peptide = {
  id: 'argipressina',
  nome: 'Argipressina',
  sinonimos: ['Argipressin', 'Vasopressina'],
  categoria: 'Cardiovascular / Hormônio Antidiurético',
  nivelRegulatorio: 'approved',
  resumo: 'Hormônio peptídeo que regula a retenção de água nos rins e causa vasoconstricção, utilizado no tratamento de diabetes insípido central e hipotensão arterial.',
  mecanismo: 'Liga-se aos receptores V2 nos túbulos renais aumentando a reabsorção de água e aos receptores V1 no músculo vascular causando vasoconstricção.',
  indicacoesEstudadas: [
    {
      condicao: 'Diabetes insípido central',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Arginine vasopressin for central diabetes insipidus', 
          fonte: 'Journal of Clinical Endocrinology & Metabolism', 
          ano: 1975, 
          pmid: '1156543', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    },
    {
      condicao: 'Hipotensão arterial de choque',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Vasopressin for septic shock hypotension', 
          fonte: 'Journal of the American Medical Association', 
          ano: 2000, 
          pmid: '10723553', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '0,01 UI/min',
    doseMedia: '0,01-0,1 UI/min',
    doseMaxima: '0,4 UI/min',
    frequência: 'Infusão contínua',
    vias: ['Intravenosa'],
    locaisAplicacao: ['Veia periférica central'],
    duracaoMinima: 'Conforme indicação',
    duracaoMaxima: 'Contínuo',
    notas: 'Dosagem ajustada conforme resposta clínica (diurese, pressão arterial, sérico de sódio).',
    referencias: [
      { 
        titulo: 'Arginine vasopressin prescribing information', 
        fonte: 'FDA Label - Pitressin', 
        ano: 2020, 
        nivel: 'A', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Doença arterial coronariana grave',
      gravidade: 'moderada',
      mecanismo: 'Risco de isquemia miocárdica',
      referencias: [
        { 
          titulo: 'Vasopressin contraindications in coronary artery disease', 
          fonte: 'American Journal of Cardiology', 
          ano: 2005, 
          pmid: '15705975', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    },
    {
      condicao: 'Hipertensão não controlada',
      gravidade: 'moderada',
      mecanismo: 'Risco de aumento da pressão arterial',
      referencias: [
        { 
          titulo: 'Vasopressin in uncontrolled hypertension', 
          fonte: 'Hypertension', 
          ano: 2003, 
          pmid: '12563104', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  interacoes: [],
  efeitosAdversos: [
    'Hipertensão arterial',
    'Bradicardia',
    'Isquemia miocárdica',
    'Necrose de membros periféricos (infusão prolongada)',
    'Hiponatremia (síndrome de secreção inapropriada de ADH)'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Pressão arterial',
    'Frequência cardíaca',
    'Sérico de sódio e potássio',
    'Diurese',
    'Sinais de isquemia',
    'Função hepática'
  ],
  sinaisAlerta: [
    'Hipertensão significativa',
    'Bradicardia marcada',
    'Dor torácica',
    'Formigamento ou perda de sensação em membros',
    'Hiponatremia sintomática'
  ],
  referencias: [
    { 
      titulo: 'Arginine vasopressin for central diabetes insipidus', 
      fonte: 'Journal of Clinical Endocrinology & Metabolism', 
      ano: 1975, 
      pmid: '1156543', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Vasopressin in septic shock management', 
      fonte: 'Critical Care Medicine', 
      ano: 2002, 
      pmid: '11910439', 
      nivel: 'B', 
      modelo: 'human' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química da Argipressina', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/arginine+vasopressin/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Argipressina in clinical practice', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/11910439/' 
    }
  ]
};