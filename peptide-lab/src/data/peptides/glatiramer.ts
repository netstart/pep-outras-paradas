import { Peptide } from '../types';

export const glatiramer: Peptide = {
  id: 'glatiramer',
  nome: 'Glatiramer',
  sinonimos: ['Glatiramer acetato', 'Copaxone'],
  categoria: 'Imunomodulador / Esclerose Múltipla',
  nivelRegulatorio: 'approved',
  resumo: 'Mistura de peptídeos sintéticos que simula a mielina básica, utilizada no tratamento da esclerose múltipla recidivante-remitente.',
  mecanismo: 'Atua como um decoy imunológico, desviando a resposta autoimune contra a mielina para si mesmo, modulando a resposta de células T e alterando o perfil de citocinas.',
  indicacoesEstudadas: [
    {
      condicao: 'Esclerose múltipla recidivante-remitente',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Glatiramer acetate for multiple sclerosis treatment', 
          fonte: 'New England Journal of Medicine', 
          ano: 1995, 
          pmid: '7713036', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '20 mg/dia',
    doseMedia: '20 mg/dia',
    doseMaxima: '40 mg 3x/semana',
    frequencia: '1x/dia ou 3x/semana',
    vias: ['Subcutânea'],
    locaisAplicacao: ['Abdome', 'Coxa', 'Braço'],
    duracaoMinima: '6 meses',
    duracaoMaxima: 'Contínuo',
    notas: 'Disponível em formulação diária (20 mg) ou três vezes por semana (40 mg).',
    referencias: [
      { 
        titulo: 'Glatiramer acetate prescribing information', 
        fonte: 'FDA Label - Copaxone', 
        ano: 2020, 
        nivel: 'A', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipersensibilidade conhecida ao glatiramer',
      gravidade: 'moderada',
      mecanismo: 'Reação alérgica potencial',
      referencias: [
        { 
          titulo: 'Allergic reactions to glatiramer acetate', 
          fonte: 'Drug Safety', 
          ano: 2005, 
          pmid: '15792507', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  interacoes: [],
  efeitosAdversos: [
    'Reação no local da injeção',
    'Rubor facial',
    'Tontura',
    'Dor de cabeça',
    'Ansiedade',
    'Palpitações'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Número de lesões (ressonância magnética)',
    'Taxa de recaídas',
    'Incapacidade física (EDSS)',
    'Reação local da injeção',
    'Função hepática'
  ],
  sinaisAlerta: [
    'Reação alérgica grave',
    'Piora súbita da incapacidade',
    'Sinais de infecção no local da injeção',
    'Reação sistêmica grave'
  ],
  referencias: [
    { 
      titulo: 'Glatiramer acetate for multiple sclerosis treatment', 
      fonte: 'New England Journal of Medicine', 
      ano: 1995, 
      pmid: '7713036', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Long-term glatiramer acetate therapy for multiple sclerosis', 
      fonte: 'Journal of Neurology', 
      ano: 2001, 
      pmid: '11333166', 
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
      titulo: 'Estrutura química do Glatiramer (representação)', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/glatiramer+acetate/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Glatiramer in multiple sclerosis therapy', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/11333166/' 
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Glatiramer - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Glatiramer+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Glatiramer - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Glatiramer+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Glatiramer - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Glatiramer+efeitos+cuidados',
      credito: 'YouTube'
    }
  ]
};