import { Peptide } from '../types';

export const bivalirudinina: Peptide = {
  id: 'bivalirudinina',
  nome: 'Bivalirudinina',
  sinonimos: ['Bivalirudin', 'Angiomax'],
  categoria: 'Cardiovascular / Anticoagulante',
  nivelRegulatorio: 'approved',
  resumo: 'Peptídeo sintético de 20 aminoácidos que inibe a trombina de forma específica e reversível, utilizado como anticoagulante em intervenções coronarianas percutâneas.',
  mecanismo: 'Liga-se ao sítio ativo da trombina e ao sítio de exosítio, inibindo tanto a atividade catalítica quanto a ligação à fibrinogênio.',
  indicacoesEstudadas: [
    {
      condicao: 'Anticoagulante em angioplastia coronariana',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Bivalirudin for percutaneous coronary intervention', 
          fonte: 'The Lancet', 
          ano: 2003, 
          pmid: '12651837', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    },
    {
      condicao: 'Anticoagulante em síndrome coronariana aguda',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Bivalirudin in acute coronary syndromes', 
          fonte: 'Journal of the American Medical Association', 
          ano: 2005, 
          pmid: '15705975', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '0,1 mg/kg bolus + 0,25 mg/kg/h',
    doseMedia: '0,1 mg/kg bolus + 0,25 mg/kg/h',
    doseMaxima: '0,1 mg/kg bolus + 0,25 mg/kg/h',
    frequência: 'Bolus + infusão contínua',
    vias: ['Intravenosa'],
    locaisAplicacao: ['Veia periférica'],
    duracaoMinima: 'Durante o procedimento',
    duracaoMaxima: 'Até 24 horas pós-procedimento',
    notas: 'Esquema padrão: bolus inicial seguido de infusão durante e após o procedimento.',
    referencias: [
      { 
        titulo: 'Bivalirudin prescribing information', 
        fonte: 'FDA Label - Angiomax', 
        ano: 2020, 
        nivel: 'A', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipersensibilidade conhecida à bivalirudinina',
      gravidade: 'moderada',
      mecanismo: 'Reação alérgica potencial',
      referencias: [
        { 
          titulo: 'Allergic reactions to bivalirudin', 
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
          titulo: 'Anticoagulants contraindicated in active bleeding', 
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
    'Hipotensão',
    'Náusea',
    'Vômito',
    'Dor no local da injeção'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Tempo de protrombina (TPT)',
    'Tempo de tromboplastina parcial ativada (TTPA)',
    'Contagem de plaquetas',
    'Sinais de hemorragia',
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
      titulo: 'Bivalirudin for percutaneous coronary intervention', 
      fonte: 'The Lancet', 
      ano: 2003, 
      pmid: '12651837', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Safety and efficacy of bivalirudin in ACS', 
      fonte: 'American Heart Journal', 
      ano: 2007, 
      pmid: '17255904', 
      nivel: 'B', 
      modelo: 'human' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química da Bivalirudinina', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/bivalirudin/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Bivalirudinina in cardiovascular therapy', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/17255904/' 
    }
  ]
};