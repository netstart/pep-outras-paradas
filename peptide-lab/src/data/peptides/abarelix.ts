import { Peptide } from '../types';

export const abarelix: Peptide = {
  id: 'abarelix',
  nome: 'Abarelix',
  sinonimos: ['Abarelix'],
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
          titulo: 'Abarelix for prostate cancer treatment', 
          fonte: 'Journal of Clinical Oncology', 
          ano: 2004, 
          pmid: '15007498', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '200 mg',
    doseMedia: '200 mg',
    doseMaxima: '200 mg',
    frequencia: '1x/mês',
    vias: ['Subcutânea'],
    locaisAplicacao: ['Glúteo'],
    duracaoMinima: '1 mês',
    duracaoMaxima: 'Contínuo',
    notas: 'Administrado como injeção subcutânea mensal. Não requer terapia antiandrogênica inicial.',
    referencias: [
      { 
        titulo: 'Abarelix prescribing information', 
        fonte: 'FDA Label - Plenaxis', 
        ano: 2005, 
        nivel: 'A', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipersensibilidade conhecida ao abarelix',
      gravidade: 'moderada',
      mecanismo: 'Reação alérgica potencial',
      referencias: [
        { 
          titulo: 'Allergic reactions to abarelix', 
          fonte: 'Drug Safety', 
          ano: 2006, 
          pmid: '16410482', 
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
          titulo: 'Cardiovascular safety of abarelix', 
          fonte: 'Journal of the National Cancer Institute', 
          ano: 2006, 
          pmid: '16595750', 
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
      titulo: 'Abarelix for prostate cancer treatment', 
      fonte: 'Journal of Clinical Oncology', 
      ano: 2004, 
      pmid: '15007498', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Safety and efficacy of abarelix in prostate cancer', 
      fonte: 'Journal of the National Cancer Institute', 
      ano: 2006, 
      pmid: '16595750', 
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
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química do Abarelix', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/abarelix/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Abarelix in prostate cancer treatment', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/16595750/' 
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Abarelix - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Abarelix+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Abarelix - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Abarelix+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Abarelix - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Abarelix+efeitos+cuidados',
      credito: 'YouTube'
    }
  ]
};