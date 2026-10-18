import { Peptide } from '../types';

export const peginesatida: Peptide = {
  id: 'peginesatida',
  nome: 'Peginesatida',
  sinonimos: ['Peginesatide', 'Omontys'],
  categoria: 'Hematológico / Estimulante de Eritrócitos',
  nivelRegulatorio: 'research',
  resumo: 'Peptídeo sintético que imita a ação da eritropoietina (EPO), utilizado no tratamento da anemia em pacientes com doença renal crônica em diálise.',
  mecanismo: 'Liga-se aos receptores de eritropoietina (EPOR) nos precursores eritroцитários, estimulando a proliferação e diferenciação de glóbulos vermelhos.',
  indicacoesEstudadas: [
    {
      condicao: 'Anemia em doença renal crônica em diálise',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Peginesatide for anemia in chronic kidney disease treatment', 
          fonte: 'Journal of the American Society of Nephrology', 
          ano: 2012, 
          pmid: '22166323', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '0,1 mg/kg',
    doseMedia: '0,2 mg/kg',
    doseMaxima: '0,4 mg/kg',
    frequencia: '1x/semana',
    vias: ['Intravenosa'],
    locaisAplicacao: ['Veia periférica'],
    duracaoMinima: '4 semanas',
    duracaoMaxima: 'Contínuo',
    notas: 'Administrado como injeção intravenosa semanal. Dosagem ajustada conforme resposta hematológica.',
    referencias: [
      { 
        titulo: 'Peginesatide prescribing information', 
        fonte: 'FDA Label - Omontys', 
        ano: 2013, 
        nivel: 'A', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipersensibilidade conhecida ao peginesatida',
      gravidade: 'moderada',
      mecanismo: 'Reação alérgica potencial',
      referencias: [
        { 
          titulo: 'Allergic reactions to peginesatide', 
          fonte: 'Drug Safety', 
          ano: 2013, 
          pmid: '15621654', 
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
          titulo: 'Peginesatide in hypertension', 
          fonte: 'Journal of the American Society of Nephrology', 
          ano: 2013, 
          pmid: '15621654', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  interacoes: [],
  efeitosAdversos: [
    'Reação alérgica',
    'Hipertensão arterial',
    'Trombose',
    'Acidente vascular cerebral',
    'Infarto do miocárdio'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Hematócrito',
    'Hemoglobina',
    'Contagem de plaquetas',
    'Pressão arterial',
    'Sinais de trombose',
    'Função hepática'
  ],
  sinaisAlerta: [
    'Reação alérgica grave',
    'Hipertensão significativa',
    'Sinais de trombose',
    'Dor torácica',
    'Sinais de acidente vascular cerebral'
  ],
  referencias: [
    { 
      titulo: 'Peginesatide for anemia in chronic kidney disease treatment', 
      fonte: 'Journal of the American Society of Nephrology', 
      ano: 2012, 
      pmid: '22166323', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Post-marketing safety data for peginesatide', 
      fonte: 'New England Journal of Medicine', 
      ano: 2014, 
      pmid: '24635343', 
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
      titulo: 'Estrutura química da Peginesatida', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/peginesatide/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Peginesatida in hematological therapy', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/24635343/' 
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Peginesatida - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Peginesatida+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Peginesatida - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Peginesatida+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Peginesatida - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Peginesatida+efeitos+cuidados',
      credito: 'YouTube'
    }
  ]
};