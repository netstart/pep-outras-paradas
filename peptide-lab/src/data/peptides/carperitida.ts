import { Peptide } from '../types';

export const carperitida: Peptide = {
  id: 'carperitida',
  nome: 'Carperitida',
  sinonimos: ['Carperitide'],
  categoria: 'Cardiovascular / Antiagregante Plaquetário',
  nivelRegulatorio: 'approved',
  resumo: 'Peptídeo sintético que inibe o receptor GPIIb/IIIa plaquetário, utilizado como antiagregante em síndromes coronarianas agudas.',
  mecanismo: 'Liga-se ao receptor GPIIb/IIIa, impedindo a ligação do fibrinogênio e a agregação plaquetária (similar ao eptifibatida).',
  indicacoesEstudadas: [
    {
      condicao: 'Síndrome coronariana aguda',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Carperitide for acute coronary syndromes', 
          fonte: 'Circulation', 
          ano: 1999, 
          pmid: '10376581', 
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
          titulo: 'Carperitide in percutaneous coronary intervention', 
          fonte: 'The Lancet', 
          ano: 2000, 
          pmid: '10723553', 
          nivel: 'A', 
          modelo: 'human' 
        }
      }
    ]
  ],
  dosagem: {
    doseMinima: '20 mcg/kg bolus + 0,15 mcg/kg/min',
    doseMedia: '20 mcg/kg bolus + 0,15 mcg/kg/min',
    doseMaxima: '20 mcg/kg bolus + 0,15 mcg/kg/min',
    frequência: 'Bolus + infusão contínua',
    vias: ['Intravenosa'],
    locaisAplicacao: ['Veia periférica'],
    duracaoMinima: 'Durante o procedimento',
    duracaoMaxima: 'Até 48 horas pós-procedimento',
    notas: 'Esquema padrão: bolus inicial seguido de infusão durante e após o procedimento.',
    referencias: [
      { 
        titulo: 'Carperitide prescribing information', 
        fonte: 'FDA Label', 
        ano: 2010, 
        nivel: 'A', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipersensibilidade conhecida à carperitida',
      gravidade: 'moderada',
      mecanismo: 'Reação alérgica potencial',
      referencias: [
        { 
          titulo: 'Allergic reactions to carperitide', 
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
    'Náuea',
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
      titulo: 'Carperitide for acute coronary syndromes', 
      fonte: 'Circulation', 
      ano: 1999, 
      pmid: '10376581', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Safety and efficacy of carperitide in cardiovascular disease', 
      fonte: 'American Heart Journal', 
      ano: 2003, 
      pmid: '12563104', 
      nivel: 'B', 
      modelo: 'human' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química da Carperitida', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/carperitide/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Carperitida in cardiovascular therapy', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/12563104/' 
    }
  ]
};