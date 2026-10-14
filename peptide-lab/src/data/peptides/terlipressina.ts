import { Peptide } from '../types';

export const terlipressina: Peptide = {
  id: 'terlipressina',
  nome: 'Terlipressina',
  sinonimos: ['Terlipressin', 'Glicil-lysina-vasopressina'],
  categoria: 'Cardiovascular / Vasoconstritor',
  nivelRegulatorio: 'approved',
  resumo: 'Análogo da vasopressina com maior resistência à degradação enzymaticamente, utilizado no tratamento de síndrome hepatorrenal e varizes esofágicas.',
  mecanismo: 'Liga-se aos receptores V1 causando vasoconstricção arterial prolongada, reduzindo o fluxo sanguíneo portal e a pressão em varizes.',
  indicacoesEstudadas: [
    {
      condicao: 'Síndrome hepatorrenal tipo 1',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Terlipressin for hepatorenal syndrome', 
          fonte: 'Gastroenterology', 
          ano: 2002, 
          pmid: '11910439', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    },
    {
      condicao: 'Hemorragia por varizes esofágicas',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Terlipressin for esophageal variceal bleeding', 
          fonte: 'The Lancet', 
          ano: 1999, 
          pmid: '10376581', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '1 mg/4h',
    doseMedia: '2 mg/4h',
    doseMaxima: '4 mg/4h',
    frequência: 'A cada 4-6 horas',
    vias: ['Intravenosa'],
    locaisAplicacao: ['Veia periférica'],
    duracaoMinima: '3 dias',
    duracaoMaxima: '14 dias',
    notas: 'Dosagem ajustada conforme resposta clínica e pressão arterial.',
    referencias: [
      { 
        titulo: 'Terlipressin prescribing information', 
        fonte: 'EMA Label - Glypressin', 
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
          titulo: 'Terlipressin in uncontrolled hypertension', 
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
    'Náusea',
    'Dor abdominal'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Pressão arterial',
    'Frequência cardíaca',
    'Sinais de isquemia',
    'Função hepática',
    'Função renal'
  ],
  sinaisAlerta: [
    'Hipertensão significativa',
    'Bradicardia marcada',
    'Dor torácica',
    'Sinais de insuficiência hepatorrenal',
    'Dor abdominal intensa'
  ],
  referencias: [
    { 
      titulo: 'Terlipressin for hepatorenal syndrome', 
      fonte: 'Gastroenterology', 
      ano: 2002, 
      pmid: '11910439', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Terlipressin for esophageal variceal bleeding management', 
      fonte: 'Cochrane Database of Systematic Reviews', 
      ano: 2010, 
      pmid: '20101254', 
      nivel: 'B', 
      modelo: 'human' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química da Terlipressina', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/terlipressin/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Terlipressina in cardiovascular therapy', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/20101254/' 
    }
  ]
};