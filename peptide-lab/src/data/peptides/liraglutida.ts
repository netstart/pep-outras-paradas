import { Peptide } from '../types';

export const liraglutida: Peptide = {
  id: 'liraglutida',
  nome: 'Liraglutida',
  sinonimos: ['Liraglutida', 'Victoza', 'Saxenda'],
  categoria: 'Metabólico / Emagrecimento',
  nivelRegulatorio: 'approved',
  resumo: 'Agonista do receptor GLP-1 aprovado para diabetes tipo 2 e obesidade. Contribui à saciedade e melhorar controle glicêmico.',
  mecanismo: 'Agonista GLP-1; estimula insulina e suprime glucagon.',
  indicacoesEstudadas: [
    {
      condicao: 'DM2 / obesidade',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Liraglutide effect in type 2 diabetes: LEAD-2 trial', 
          fonte: 'Diabetes Care', 
          ano: 2009, 
          pmid: '19246659', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '0,6 mg/dia',
    doseMedia: '1,8 mg/dia',
    doseMaxima: '3,0 mg/dia',
    frequencia: '1x/dia',
    vias: ['Subcutânea'],
    locaisAplicacao: ['Abdome'],
    duracaoMinima: 'Conforme prescrição',
    duracaoMaxima: 'Contínuo',
    notas: 'Ajuste individual baseado na resposta glicêmica e tolerabilidade.',
    referencias: [
      { 
        titulo: 'Liraglutide prescribing information', 
        fonte: 'FDA Label - Victoza', 
        ano: 2023, 
        nivel: 'A', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Histórico de carcinoma medular de tiroides (CMT) ou síndrome de neoplasias endócrinas múltiplas tipo 2 (NEM2)',
      gravidade: 'alta',
      mecanismo: 'Aumento de incidência de tumores tiroideos C em estudos em roedores (alerta FDA caixa preta).',
      referencias: [
        { 
          titulo: 'FDA Drug Safety Communication: Liraglutide and risk of thyroid tumors', 
          fonte: 'FDA', 
          ano: 2020, 
          nivel: 'A', 
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
    'Dispepsia',
    'Tontura',
    'Infecções do trato urinário',
    'Hipoglicemia (quando combinado com insulina ou sulfonilureias)'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Glicemia capilar ou HbA1c',
    'Função tiroideos (TSH, T4 livre) a cada 6-12 meses',
    'Peso corporal',
    'Sinais e sintomas de pancreatite'
  ],
  sinaisAlerta: [
    'Dor abdominal intensa e persistente (possível pancreatite)',
    'Náusea/vomito persistente',
    'Sinais de reação alérgica grave',
    'Massas ou nódulos tiroideos'
  ],
  referencias: [
    { 
      titulo: 'Liraglutide effect in type 2 diabetes: LEAD-2 trial', 
      fonte: 'Diabetes Care', 
      ano: 2009, 
      pmid: '19246659', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Liraglutide for weight management: SCALE Obesity and Prediabetes trial', 
      fonte: 'NEJM', 
      ano: 2015, 
      pmid: '25913128', 
      nivel: 'A', 
      modelo: 'human' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química da Liraglutida', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/liraglutide/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Liraglutide for obesity treatment', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/25913128/' 
    }
  ]
};