import { Peptide } from '../types';

export const icatibant: Peptide = {
  id: 'icatibant',
  nome: 'Icatibant',
  sinonimos: ['Icatibant acetate', 'Firazyr'],
  categoria: 'Imunológico / Antagonista da Bradyquinina',
  nivelRegulatorio: 'approved',
  resumo: 'Peptídeo sintético que atua como antagonista competitivo dos receptores B2 da bradyquinina, utilizado no tratamento do angioedema hereditário.',
  mecanismo: 'Liga-se aos receptores B2 da bradyquinina bloqueando a ação da bradyquinina, reduzindo a vazão vascular e o edema.',
  indicacoesEstudadas: [
    {
      condicao: 'Angioedema hereditário',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Icatibant for hereditary angioedema treatment', 
          fonte: 'The Lancet', 
          ano: 2008, 
          pmid: '18263055', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '10 mg',
    doseMedia: '30 mg',
    doseMaxima: '30 mg',
    frequencia: 'Conforme necessidade (máximo 3 doses em 24h)',
    vias: ['Subcutânea'],
    locaisAplicacao: ['Abdome'],
    duracaoMinima: 'Não definido',
    duracaoMaxima: 'Conforme necessidade',
    notas: 'Administrado como injeção subcutânea no início dos sintomas. Pode ser repetido após 6 horas se necessário.',
    referencias: [
      { 
        titulo: 'Icatibant prescribing information', 
        fonte: 'FDA Label - Firazyr', 
        ano: 2020, 
        nivel: 'A', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipersensibilidade conhecida ao icatibant',
      gravidade: 'moderada',
      mecanismo: 'Reação alérgica potencial',
      referencias: [
        { 
          titulo: 'Allergic reactions to icatibant', 
          fonte: 'Drug Safety', 
          ano: 2009, 
          pmid: '19246659', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  interacoes: [],
  efeitosAdversos: [
    'Reação no local da injeção',
    'Tontura',
    'Dor de cabeça',
    'Náusea',
    'Diarreia'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Sinais de redução do edema',
    'Alívio da dor',
    'Reação local da injeção',
    'Função hepática'
  ],
  sinaisAlerta: [
    'Reação alérgica grave',
    'Dor abdominal intensa',
    'Dificuldade respiratória',
    'Sinais de choque anafilático'
  ],
  referencias: [
    { 
      titulo: 'Icatibant for hereditary angioedema treatment', 
      fonte: 'The Lancet', 
      ano: 2008, 
      pmid: '18263055', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Long-term icatibant therapy for hereditary angioedema', 
      fonte: 'Journal of Allergy and Clinical Immunology', 
      ano: 2012, 
      pmid: '22166323', 
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
      titulo: 'Estrutura química do Icatibant', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/icatibant/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Icatibant in angioedema therapy', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/22166323/' 
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Icatibant - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Icatibant+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Icatibant - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Icatibant+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Icatibant - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Icatibant+efeitos+cuidados',
      credito: 'YouTube'
    }
  ]
};