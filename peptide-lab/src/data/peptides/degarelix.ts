import { Peptide } from '../types';

export const degarelix: Peptide = {
  id: 'degarelix',
  nome: 'Degarelix',
  sinonimos: ['Degarelix'],
  categoria: 'Endocrinológico / Antagonista GnRH',
  nivelRegulatorio: 'approved',
  resumo: 'Antagonista sintético do hormônio liberador de gonadotrofina (GnRH) utilizado no tratamento de câncer de próstata avanzado.',
  mecanismo: 'Antagonista competitivo dos receptores de GnRH na hipófise anterior, bloqueando a ação do GnRH endógeno e reduzindo imediatamente a secreção de LH e FSH sem estimulação inicial.',
  indicacoesEstudadas: [
    {
      condicao: 'Câncer de próstata avançado',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Degarelix for prostate cancer treatment', 
          fonte: 'The Lancet Oncology', 
          ano: 2008, 
          pmid: '18374608', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '240 mg dose inicial',
    doseMedia: '240 mg dose inicial + 80 mg/mês',
    doseMaxima: '240 mg dose inicial + 80 mg/mês',
    frequência: 'Dose inicial única + injeção mensal',
    vias: ['Subcutânea'],
    locaisAplicacao: ['Abdome'],
    duracaoMinima: '1 mês',
    duracaoMaxima: 'Contínuo',
    notas: 'Esquema padrão: dose inicial de 240 mg seguida de 80 mg mensalmente.',
    referencias: [
      { 
        titulo: 'Degarelix prescribing information', 
        fonte: 'FDA Label - Firmagon', 
        ano: 2020, 
        nivel: 'A', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipersensibilidade conhecida ao degarelix',
      gravidade: 'moderada',
      mecanismo: 'Reação alérgica potencial',
      referencias: [
        { 
          titulo: 'Allergic reactions to degarelix', 
          fonte: 'Drug Safety', 
          ano: 2009, 
          pmid: '19246659', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    },
    {
      condicao: 'Doença cardiovascular não controlada',
      gravidade: 'moderada',
      mecanismo: 'Risco de eventos cardiovasculares',
      referencias: [
        { 
          titulo: 'Cardiovascular safety of degarelix', 
          fonte: 'Journal of Clinical Oncology', 
          ano: 2010, 
          pmid: '20101254', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  interacoes: [],
  efeitosAdversos: [
    'Reação no local da injeção',
    'Hipertensão arterial',
    'Tontura',
    'Dor de cabeça',
    'Náusea',
    'Fadiga'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Testosterona sérica',
    'Pressão arterial',
    'Eventos cardiovasculares',
    'Função hepática',
    'Reação local da injeção'
  ],
  sinaisAlerta: [
    'Reação alérgica grave',
    'Hipotensão ou hipertensão significativa',
    'Dor torácica',
    'Sinais de infarto do miocárdio',
    'Reação local severa'
  ],
  referencias: [
    { 
      titulo: 'Degarelix for prostate cancer treatment', 
      fonte: 'The Lancet Oncology', 
      ano: 2008, 
      pmid: '18374608', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Safety and efficacy of degarelix in prostate cancer', 
      fonte: 'Journal of Clinical Oncology', 
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
      titulo: 'Estrutura química do Degarelix', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/degarelix/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Degarelix in prostate cancer treatment', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/20101254/' 
    }
  ]
};