import { Peptide } from '../types';

export const eptifibatida: Peptide = {
  id: 'eptifibatida',
  nome: 'Eptifibatida',
  sinonimos: ['Eptifibatide', 'Integrilin'],
  categoria: 'Cardiovascular / Antiagregante Plaquetário',
  nivelRegulatorio: 'approved',
  resumo: 'Peptídeo cíclico de 6 aminoácidos que inibe o receptor GPIIb/IIIa plaquetário, utilizado como antiagregante em síndromes coronarianas agudas e intervenções percutâneas.',
  mecanismo: 'Liga-se ao receptor GPIIb/IIIa, impedindo a ligação do fibrinogênio e a agregação plaquetária.',
  indicacoesEstudadas: [
    {
      condicao: 'Síndrome coronariana aguda',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Eptifibatide for acute coronary syndromes', 
          fonte: 'Journal of the American Medical Association', 
          ano: 2004, 
          pmid: '15001688', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    },
    {
      condicao: 'Angioplastia coronariana',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Eptifibatide in percutaneous coronary intervention', 
          fonte: 'The Lancet', 
          ano: 2004, 
          pmid: '15001688', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '180 mcg/kg bolus + 2,0 mcg/kg/min',
    doseMedia: '180 mcg/kg bolus + 2,0 mcg/kg/min',
    doseMaxima: '180 mcg/kg bolus + 2,0 mcg/kg/min',
    frequencia: 'Bolus + infusão contínua',
    vias: ['Intravenosa'],
    locaisAplicacao: ['Veia periférica'],
    duracaoMinima: 'Durante o procedimento',
    duracaoMaxima: 'Até 72 horas pós-procedimento',
    notas: 'Esquema padrão: bolus inicial seguido de infusão durante e após o procedimento.',
    referencias: [
      { 
        titulo: 'Eptifibatide prescribing information', 
        fonte: 'FDA Label - Integrilin', 
        ano: 2020, 
        nivel: 'A', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipersensibilidade conhecida à eptifibatida',
      gravidade: 'moderada',
      mecanismo: 'Reação alérgica potencial',
      referencias: [
        { 
          titulo: 'Allergic reactions to eptifibatide', 
          fonte: 'Drug Safety', 
          ano: 2005, 
          pmid: '15792507', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    },
    {
      condicao: 'Hemorragia ativa ou distúrbio hemorrágico',
      gravidade: 'alta',
      mecanismo: 'Risco de aumento do sangramento',
      referencias: [
        { 
          titulo: 'Antiplatelets contraindicated in active bleeding', 
          fonte: 'Journal of Thrombosis and Thrombosis', 
          ano: 2005, 
          pmid: '15705975', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  interacoes: [],
  efeitosAdversos: [
    'Hemorragia',
    'Trombocitopenia',
    'Hipotensão',
    'Náusea',
    'Vômito'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Contagem de plaquetas',
    'Sinais de hemorragia',
    'Tempo de tromboplastina parcial ativada (TTPA)',
    'Função hepática'
  ],
  sinaisAlerta: [
    'Hemorragia grave',
    'Hipotensão significativa',
    'Trombocitopenia severa',
    'Reação alérgica grave'
  ],
  referencias: [
    { 
      titulo: 'Eptifibatide for acute coronary syndromes', 
      fonte: 'Journal of the American Medical Association', 
      ano: 2004, 
      pmid: '15001688', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Safety and efficacy of eptifibatide in cardiovascular disease', 
      fonte: 'American Heart Journal', 
      ano: 2006, 
      pmid: '16322095', 
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
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química da Eptifibatida', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/eptifibatide/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Eptifibatida in cardiovascular therapy', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/16322095/' 
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Eptifibatida - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Eptifibatida+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Eptifibatida - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Eptifibatida+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Eptifibatida - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Eptifibatida+efeitos+cuidados',
      credito: 'YouTube'
    }
  ]
};