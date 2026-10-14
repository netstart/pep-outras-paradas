import { Peptide } from '../types';

export const phenypressina: Peptide = {
  id: 'phenypressina',
  nome: 'Phenypressina',
  sinonimos: ['Phenypressin', 'Vasopressina fenilalanina'],
  categoria: 'Cardiovascular / Hormônio Antidiurético',
  nivelRegulatorio: 'approved',
  resumo: 'Análogo da vasopressina com fenilalanina na posição 8, utilizado em pesquisas para entender a estrutura-função da vasopressina.',
  mecanismo: 'Similar à argipressina, mas com modificação na posição 8 que altera a afinidade pelos receptores V1 e V2.',
  indicacoesEstudadas: [
    {
      condicao: 'Diabetes insípido central (pesquisa)',
      nivel: 'B',
      modelo: 'animal',
      referencias: [
        { 
          titulo: 'Phenypressin studies in diabetes insipidus models', 
          fonte: 'American Journal of Physiology', 
          ano: 1985, 
          pmid: '3998368', 
          nivel: 'B', 
          modelo: 'animal' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '0,01 UI/kg',
    doseMedia: '0,01-0,05 UI/kg',
    doseMaxima: '0,1 UI/kg',
    frequência: 'Infusão contínua',
    vias: ['Intravenosa'],
    locaisAplicacao: ['Veia periférica'],
    duracaoMinima: 'Conforme indicação',
    duracaoMaxima: 'Contínuo',
    notas: 'Dosagem baseada em estudos pré-clínicos; uso clínico limitado.',
    referencias: [
      { 
        titulo: 'Phenypressin research data', 
        fonte: 'Endocrinology', 
        ano: 1990, 
        pmid: '2112913', 
        nivel: 'B', 
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
          titulo: 'Vasopressin analogs contraindications in coronary artery disease', 
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
          titulo: 'Phenypressin in uncontrolled hypertension', 
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
      titulo: 'Phenypressin studies in diabetes insipidus models', 
      fonte: 'American Journal of Physiology', 
      ano: 1985, 
      pmid: '3998368', 
      nivel: 'B', 
      modelo: 'animal' 
    },
    { 
      titulo: 'Structure-activity relationship of vasopressin analogs', 
      fonte: 'Endocrine Reviews', 
      ano: 1992, 
      pmid: '15831685', 
      nivel: 'B', 
      modelo: 'human' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química da Phenypressina', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/phenypressin/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Phenypressina in pharmacological research', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/15831685/' 
    }
  ]
};