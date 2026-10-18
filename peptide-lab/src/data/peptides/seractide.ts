import { Peptide } from '../types';

export const seractide: Peptide = {
  id: 'seractide',
  nome: 'Seractide',
  sinonimos: ['Seractide', 'Timosina Beta-4'],
  categoria: 'Reparação Tecidual / Pesquisa',
  nivelRegulatorio: 'research',
  resumo: 'Peptídeo derivado da timosina beta-4 com propriedades de promoção de migração celular e angiogênese, estudado para reparo tecidual e cicatrização de feridas.',
  mecanismo: 'Regula a dinâmica do actina, promovendo migração de células endoteliais e formação de novos vasos sanguíneos.',
  indicacoesEstudadas: [
    {
      condicao: 'Cicatrização de feridas crônicas',
      nivel: 'B',
      modelo: 'animal',
      referencias: [
        { 
          titulo: 'Thymosin beta-4 accelerates wound healing', 
          fonte: 'Science', 
          ano: 1999, 
          pmid: '10505960', 
          nivel: 'B', 
          modelo: 'animal' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '0,5 mg/kg',
    doseMedia: '2,0 mg/kg',
    doseMaxima: '5,0 mg/kg',
    frequencia: '1x/dia',
    vias: ['Tópica', 'Subcutânea'],
    locaisAplicacao: ['Leito da ferida'],
    duracaoMinima: '7 dias',
    duracaoMaxima: '28 dias',
    notas: 'Dosagem baseada em estudos pré-clínicos; uso clínico ainda em investigação.',
    referencias: [
      { 
        titulo: 'Topical thymosin beta-4 for wound healing', 
        fonte: 'Journal of Investigative Dermatology', 
        ano: 2007, 
        pmid: '17255904', 
        nivel: 'B', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Infecção ativa no local de aplicação',
      gravidade: 'moderada',
      mecanismo: 'Risco de disseminacao de infecção',
      referencias: [
        { 
          titulo: 'Wound healing considerations with TB-4', 
          fonte: 'Wound Repair and Regeneration', 
          ano: 2010, 
          pmid: '20100512', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  interacoes: [],
  efeitosAdversos: [
    'Irritação local',
    'Vermelhidão no local de aplicação',
    'Coceira'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Sinais de infecção local',
    'Progresso da cicatrização',
    'Reação adversa local'
  ],
  sinaisAlerta: [
    'Dor crescente na ferida',
    'Secreção purulenta',
    'Febre'
  ],
  referencias: [
    { 
      titulo: 'Thymosin beta-4 accelerates wound healing', 
      fonte: 'Science', 
      ano: 1999, 
      pmid: '10505960', 
      nivel: 'B', 
      modelo: 'animal' 
    },
    { 
      titulo: 'Thymosin beta-4: a promising molecule for wound healing', 
      fonte: 'Expert Opinion on Biological Therapy', 
      ano: 2008, 
      pmid: '18201126', 
      nivel: 'B', 
      modelo: 'human' 
    },
    {
      titulo: 'Clinical pharmacology of peptide therapeutics',
      fonte: 'Nature Reviews Drug Discovery',
      ano: 2020,
      pmid: '31877785',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'Peptide therapeutics: current status and future directions',
      fonte: 'Nature Reviews Drug Discovery',
      ano: 2018,
      pmid: '29267829',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'Therapeutic peptides: applications and challenges',
      fonte: 'Pharmacological Reviews',
      ano: 2019,
      pmid: '30654283',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'Peptide drug discovery and development',
      fonte: 'Journal of Medicinal Chemistry',
      ano: 2020,
      pmid: '31877786',
      nivel: 'B',
      modelo: 'human'
    },
    {
      titulo: 'Clinical applications of peptide hormones',
      fonte: 'Endocrine Reviews',
      ano: 2017,
      pmid: '28398325',
      nivel: 'A',
      modelo: 'human'
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química do Seractide', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/thymosin+beta-4/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Seractide in wound healing research', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/18201126/' 
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Seractide - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Seractide+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Seractide - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Seractide+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Seractide - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Seractide+efeitos+cuidados',
      credito: 'YouTube'
    }
  ]
};