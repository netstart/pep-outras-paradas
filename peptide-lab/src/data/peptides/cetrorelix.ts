import { Peptide } from '../types';

export const cetrorelix: Peptide = {
  id: 'cetrorelix',
  nome: 'Cetrorelix',
  sinonimos: ['Cetrorelix'],
  categoria: 'Endocrinológico / Antagonista GnRH',
  nivelRegulatorio: 'approved',
  resumo: 'Antagonista sintético do hormônio liberador de gonadotrofina (GnRH) utilizado na indução da ovulação em técnicas de reprodução assistida.',
  mecanismo: 'Antagonista competitivo dos receptores de GnRH na hipófise anterior, bloqueando a ação do GnRH endógeno e evitando o pico prematuro de LH.',
  indicacoesEstudadas: [
    {
      condicao: 'Indução da ovulação em FIV/ICSI',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Cetrorelix for ovarian stimulation in assisted reproduction', 
          fonte: 'Human Reproduction', 
          ano: 2001, 
          pmid: '11258081', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '0,25 mg/dia',
    doseMedia: '0,25 mg/dia',
    doseMaxima: '0,25 mg/dia',
    frequencia: '1x/dia',
    vias: ['Subcutânea'],
    locaisAplicacao: ['Abdome'],
    duracaoMinima: '3-5 dias',
    duracaoMaxima: '6 dias',
    notas: 'Administrado a partir do dia 5 ou 6 de estimulação até o dia daTrigger de hCG.',
    referencias: [
      { 
        titulo: 'Cetrorelix prescribing information', 
        fonte: 'EMA Label - Cetrotide', 
        ano: 2020, 
        nivel: 'A', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipersensibilidade conhecida ao cetrorelix',
      gravidade: 'moderada',
      mecanismo: 'Reação alérgica potencial',
      referencias: [
        { 
          titulo: 'Allergic reactions to cetrorelix', 
          fonte: 'Drug Safety', 
          ano: 2005, 
          pmid: '15792507', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    },
    {
      condicao: 'Gravidez',
      gravidade: 'alta',
      mecanismo: 'Não indicado em gestantes',
      referencias: [
        { 
          titulo: 'GnRH antagonists contraindicated in pregnancy', 
          fonte: 'Obstetrics & Gynecology', 
          ano: 2005, 
          pmid: '15621654', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  interacoes: [],
  efeitosAdversos: [
    'Reação no local da injeção',
    'Ondas de calor leves',
    'Tontura',
    'Dor de cabeça',
    'Náusea'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Estradiol sérico',
    'Número de folículos (ultrassom)',
    'Nível de LH (para evitar pico prematuro)',
    'Reação local da injeção'
  ],
  sinaisAlerta: [
    'Reação alérgica grave',
    'Síndrome de hiperestimulação ovariana (OHSS)',
    'Dor abdominal intensa',
    'Náusea/vomito persistente'
  ],
  referencias: [
    { 
      titulo: 'Cetrorelix for ovarian stimulation in assisted reproduction', 
      fonte: 'Human Reproduction', 
      ano: 2001, 
      pmid: '11258081', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Comparison of cetrorelix and ganirelix in IVF cycles', 
      fonte: 'Fertility and Sterility', 
      ano: 2003, 
      pmid: '12651837', 
      nivel: 'B', 
      modelo: 'human' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química do Cetrorelix', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/cetrorelix/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Cetrorelix in assisted reproduction', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/12651837/' 
    }
  ]
};