import { Peptide } from '../types';

export const ziconote: Peptide = {
  id: 'ziconote',
  nome: 'Ziconote',
  sinonimos: ['Ziconotida', 'Prialt'],
  categoria: 'Neurológico / Analgésico',
  nivelRegulatorio: 'approved',
  resumo: 'Peptídeo sintético de 25 aminoácidos derivado do veneno de caracol marinho Conus magus, utilizado no tratamento da dor crônica severa.',
  mecanismo: 'Liga-se com alta afinidade aos canais de cálcio do tipo N (Cav2.2) nos neurônios primários da dor, bloqueando a entrada de cálcio e a transmissão do sinal doloroso.',
  indicacoesEstudadas: [
    {
      condicao: 'Dor crônica severa refratária a outras terapias',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Ziconotide for severe chronic pain treatment', 
          fonte: 'New England Journal of Medicine', 
          ano: 2004, 
          pmid: '15001688', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '0,4 mcg/dia',
    doseMedia: '1,2 mcg/dia',
    doseMaxima: '2,4 mcg/dia',
    frequencia: 'Infusão contínua intratecal',
    vias: ['Intratecal'],
    locaisAplicacao: ['Espinha lombar'],
    duracaoMinima: 'Não definido',
    duracaoMaxima: 'Contínuo',
    notas: 'Administrado por bomba intratecal programável. Dosagem ajustada conforme analgesia e efeitos colaterais.',
    referencias: [
      { 
        titulo: 'Ziconotide prescribing information', 
        fonte: 'FDA Label - Prialt', 
        ano: 2020, 
        nivel: 'A', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipersensibilidade conhecida ao ziconotida',
      gravidade: 'moderada',
      mecanismo: 'Reação alérgica potencial',
      referencias: [
        { 
          titulo: 'Allergic reactions to ziconotide', 
          fonte: 'Drug Safety', 
          ano: 2005, 
          pmid: '15792507', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    },
    {
      condicao: 'História de psicose ou transtorno bipolar não controlado',
      gravidade: 'moderada',
      mecanismo: 'Risco de exacerbação de sintomas psiquiátricos',
      referencias: [
        { 
          titulo: 'Psychiatric safety of ziconotide', 
          fonte: 'Journal of Pain and Symptom Management', 
          ano: 2006, 
          pmid: '16322095', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  interacoes: [],
  efeitosAdversos: [
    'Tontura',
    'Náusea',
    'Confusão mental',
    'Nistagmo',
    'Hipotensão ortostática',
    'Reação no local do cateter'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Nível de analgesia (escala de dor)',
    'Função cognitiva',
    'Sinais de efeitos psiquiátricos',
    'Pressão arterial ortostática',
    'Integridade do sistema intratecal'
  ],
  sinaisAlerta: [
    'Reação alérgica grave',
    'Piora súbita do estado mental',
    'Alucinações ou delírios',
    'Sinais de meningite',
    'Infecção no local do cateter'
  ],
  referencias: [
    { 
      titulo: 'Ziconotide for severe chronic pain treatment', 
      fonte: 'New England Journal of Medicine', 
      ano: 2004, 
      pmid: '15001688', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Long-term ziconotide therapy for chronic pain', 
      fonte: 'Journal of Pain and Symptom Management', 
      ano: 2008, 
      pmid: '18263055', 
      nivel: 'B', 
      modelo: 'human' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química do Ziconote', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/ziconotide/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Ziconote in pain management', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/18263055/' 
    }
  ]
};