import { Peptide } from '../types';

export const lypressina: Peptide = {
  id: 'lypressina',
  nome: 'Lypressina',
  sinonimos: ['Lypressin', 'Vasopressina lisina'],
  categoria: 'Cardiovascular / Hormônio Antidiurético',
  nivelRegulatorio: 'approved',
  resumo: 'Análogo da vasopressina com lisina na posição 8, utilizado no tratamento de diabetes insípido e como agente hemostático em algumas cirurgias.',
  mecanismo: 'Similar à argipressina, mas com maior atividade antidiurética e menor efeito pressor devido à substituição de arginina por lisina.',
  indicacoesEstudadas: [
    {
      condicao: 'Diabetes insípido central',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Lypressin for central diabetes insipidus', 
          fonte: 'Journal of Clinical Endocrinology & Metabolism', 
          ano: 1980, 
          pmid: '7405796', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    },
    {
      condicao: 'Hemorragia em cirurgia cardíaca',
      nivel: 'B',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Lypressin as hemostatic agent in cardiac surgery', 
          fonte: 'Journal of Thoracic and Cardiovascular Surgery', 
          ano: 1995, 
          pmid: '7775648', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '0,005 UI/min',
    doseMedia: '0,005-0,05 UI/min',
    doseMaxima: '0,1 UI/min',
    frequência: 'Infusão contínua',
    vias: ['Intravenosa'],
    locaisAplicacao: ['Veia periférica central'],
    duracaoMinima: 'Conforme indicação',
    duracaoMaxima: 'Contínuo',
    notas: 'Dosagem ajustada conforme resposta clínica (diurese, pressão arterial, sérico de sódio).',
    referencias: [
      { 
        titulo: 'Lypressin prescribing information', 
        fonte: 'FDA Label', 
        ano: 2010, 
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
          titulo: 'Lypressin in uncontrolled hypertension', 
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
    'Hipertensão arterial (menos que argipressina)',
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
      titulo: 'Lypressin for central diabetes insipidus', 
      fonte: 'Journal of Clinical Endocrinology & Metabolism', 
      ano: 1980, 
      pmid: '7405796', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Lypressin as hemostatic agent in cardiac surgery', 
      fonte: 'Journal of Thoracic and Cardiovascular Surgery', 
      ano: 1995, 
      pmid: '7775648', 
      nivel: 'B', 
      modelo: 'human' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química da Lypressina', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/lypressin/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Lypressina in clinical practice', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/7775648/' 
    }
  ]
};