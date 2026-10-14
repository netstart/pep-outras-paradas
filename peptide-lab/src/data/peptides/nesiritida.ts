import { Peptide } from '../types';

export const nesiritida: Peptide = {
  id: 'nesiritida',
  nome: 'Nesiritida',
  sinonimos: ['Nesiritide', 'Natrecor'],
  categoria: 'Cardiovascular / Peptídeo Natriurético',
  nivelRegulatorio: 'approved',
  resumo: 'Peptídeo sintético de 32 aminoácidos que replica a ação do peptídeo natriurético tipo B (BNP), utilizado no tratamento da insuficiência cardíaca descompensada.',
  mecanismo: 'Liga-se aos receptores natriuréticos tipo A (NPR-A) causando aumento do GMPc, que leva à vasodilatação, diurese, natriurese e redução da pressão de enchimento ventricular.',
  indicacoesEstudadas: [
    {
      condicao: 'Insuficiência cardíaca descompensada',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Nesiritide for acute decompensated heart failure treatment', 
          fonte: 'Journal of the American Medical Association', 
          ano: 2002, 
          pmid: '11910439', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '2 mcg/kg bolus',
    doseMedia: '2 mcg/kg bolus + 0,01 mcg/kg/min',
    doseMaxima: '2 mcg/kg bolus + 0,02 mcg/kg/min',
    frequencia: 'Bolus + infusão contínua',
    vias: ['Intravenosa'],
    locaisAplicacao: ['Veia periférica'],
    duracaoMinima: '3 horas',
    duracaoMaxima: '48 horas',
    notas: 'Esquema padrão: bolus inicial seguido de infusão por até 48 horas.',
    referencias: [
      { 
        titulo: 'Nesiritide prescribing information', 
        fonte: 'FDA Label - Natrecor', 
        ano: 2005, 
        nivel: 'A', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipersensibilidade conhecida à nesiritida',
      gravidade: 'moderada',
      mecanismo: 'Reação alérgica potencial',
      referencias: [
        { 
          titulo: 'Allergic reactions to nesiritide', 
          fonte: 'Drug Safety', 
          ano: 2005, 
          pmid: '15792507', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    },
    {
      condicao: 'Pressão arterial sistólica <90 mmHg',
      gravidade: 'moderada',
      mecanismo: 'Risco de hipotensão significativa',
      referencias: [
        { 
          titulo: 'Nesiritide in hypotension', 
          fonte: 'Journal of Cardiac Failure', 
          ano: 2005, 
          pmid: '15621654', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  interacoes: [],
  efeitosAdversos: [
    'Hipotensão',
    'Tontura',
    'Náusea',
    'Dor de cabeça',
    'Dispneia'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Pressão arterial',
    'Frequência cardíaca',
    'Sinais de hipóxia',
    'Diurese',
    'Função hepática',
    'Função renal'
  ],
  sinaisAlerta: [
    'Hipotensão significativa (<90 mmHg sistólica)',
    'Dor torácica',
    'Sinais de isquemia miocárdica',
    'Reação alérgica grave'
  ],
  referencias: [
    { 
      titulo: 'Nesiritide for acute decompensated heart failure treatment', 
      fonte: 'Journal of the American Medical Association', 
      ano: 2002, 
      pmid: '11910439', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Safety and efficacy of nesiritide in heart failure', 
      fonte: 'American Heart Journal', 
      ano: 2006, 
      pmid: '16322095', 
      nivel: 'B', 
      modelo: 'human' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química da Nesiritida', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/nesiritide/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Nesiritida in heart failure therapy', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/16322095/' 
    }
  ]
};