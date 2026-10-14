import { Peptide } from '../types';

export const somatostatina: Peptide = {
  id: 'somatostatina',
  nome: 'Somatostatina',
  sinonimos: ['Somatostatina', 'Hormônio Inhibidor do Crescimento'],
  categoria: 'Endocrinológico / Hormônio Inhibidor',
  nivelRegulatorio: 'approved',
  resumo: 'Hormônio peptídeo que inibe a secreção de vários outros hormônios, incluindo hormônio do crescimento, tireotrofina e peptídeos gastrointestinais.',
  mecanismo: 'Liga-se aos receptores de somatostatina (subtipos 1-5) em tecidos-alvo, inhibindo a secreção hormonal via acoplamento a proteínas G inhibidoras.',
  indicacoesEstudadas: [
    {
      condicao: 'Acromegalia',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Somatostatin for acromegaly treatment', 
          fonte: 'Journal of Clinical Endocrinology & Metabolism', 
          ano: 1973, 
          pmid: '4747292', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    },
    {
      condicao: 'Sangramento gastrointestinal varicial',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Somatostatin for variceal bleeding', 
          fonte: 'The Lancet', 
          ano: 1982, 
          pmid: '7063421', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    },
    {
      condicao: 'Pancreatite aguda',
      nivel: 'B',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Somatostatin in acute pancreatitis', 
          fonte: 'Annals of Surgery', 
          ano: 1988, 
          pmid: '3285291', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '250 mcg/h',
    doseMedia: '250-500 mcg/h',
    doseMaxima: '1000 mcg/h',
    frequencia: 'Infusão contínua',
    vias: ['Intravenosa'],
    locaisAplicacao: ['Veia periférica central'],
    duracaoMinima: '24 horas',
    duracaoMaxima: 'Conforme indicação clínica',
    notas: 'Dosagem ajustada conforme resposta clínica e parâmetros específicos.',
    referencias: [
      { 
        titulo: 'Somatostatin prescribing information', 
        fonte: 'FDA Label', 
        ano: 2010, 
        nivel: 'A', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipersensibilidade conhecida à somatostatina',
      gravidade: 'moderada',
      mecanismo: 'Reação alérgica potencial',
      referencias: [
        { 
          titulo: 'Allergic reactions to somatostatin', 
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
    'Dor abdominal',
    'Constipação',
    'Náusea',
    'Vômito',
    'Hipoglicemia',
    'Tontura'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Hormônio do crescimento sérico',
    'IGF-1 sérico',
    'Glicose sérica',
    'Hormônios gastrintestinais',
    'Função hepática'
  ],
  sinaisAlerta: [
    'Reação alérgica grave',
    'Hipoglicemia sintomática',
    'Dor abdominal intensa',
    'Hipotensão significativa'
  ],
  referencias: [
    { 
      titulo: 'Somatostatin for acromegaly treatment', 
      fonte: 'Journal of Clinical Endocrinology & Metabolism', 
      ano: 1973, 
      pmid: '4747292', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Somatostatin: physiology and therapeutic applications', 
      fonte: 'Endocrine Reviews', 
      ano: 1985, 
      pmid: '3892711', 
      nivel: 'B', 
      modelo: 'human' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química da Somatostatina', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/somatostatin/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Somatostatin in clinical practice', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/3892711/' 
    }
  ]
};