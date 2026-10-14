import { Peptide } from '../types';

export const ganirelix: Peptide = {
  id: 'ganirelix',
  nome: 'Ganirelix',
  sinonimos: ['Ganirelix acetate'],
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
          titulo: 'Ganirelix for ovarian stimulation in assisted reproduction', 
          fonte: 'Human Reproduction', 
          ano: 2000, 
          pmid: '10723553', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '250 mcg/dia',
    doseMedia: '250 mcg/dia',
    doseMaxima: '250 mcg/dia',
    frequência: '1x/dia',
    vias: ['Subcutânea'],
    locaisAplicacao: ['Abdome'],
    duracaoMinima: '3-5 dias',
    duracaoMaxima: '6 dias',
    notas: 'Administrado a partir do dia 5 ou 6 de estimulação até o dia daTrigger de hCG.',
    referencias: [
      { 
        titulo: 'Ganirelix prescribing information', 
        fonte: 'FDA Label', 
        ano: 2020, 
        nivel: 'A', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipersensibilidade conhecida ao ganirelix',
      gravidade: 'moderada',
      mecanismo: 'Reação alérgica potencial',
      referencias: [
        { 
          titulo: 'Allergic reactions to ganirelix', 
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
      titulo: 'Ganirelix for ovarian stimulation in assisted reproduction', 
      fonte: 'Human Reproduction', 
      ano: 2000, 
      pmid: '10723553', 
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
      titulo: 'Estrutura química do Ganirelix', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/ganirelix/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Ganirelix in assisted reproduction', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/12651837/' 
    }
  ]
};