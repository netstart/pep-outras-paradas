import { Peptide } from '../types';

export const atosiban: Peptide = {
  id: 'atosiban',
  nome: 'Atosiban',
  sinonimos: ['Atosiban'],
  categoria: 'Obstetrício / Tocolítico',
  nivelRegulatorio: 'approved',
  resumo: 'Antagonista competitivo dos receptores de ocitocina e vasopressina utilizado para atrasar o parto prematuro.',
  mecanismo: 'Bloqueia os receptores de ocitocina no útero, reduzindo a frequência e intensidade das contrações uterinas.',
  indicacoesEstudadas: [
    {
      condicao: 'Parto prematuro iminente',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Atosiban for preterm labor treatment', 
          fonte: 'The Lancet', 
          ano: 1999, 
          pmid: '10376581', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '6,75 mg bolus inicial',
    doseMedia: '6,75 mg bolus + 18 mg/hora infusão',
    doseMaxima: '6,75 mg bolus + 36 mg/hora infusão (máximo 48h)',
    frequencia: 'Bolus + infusão contínua',
    vias: ['Intravenosa'],
    locaisAplicacao: ['Veia periférica'],
    duracaoMinima: 'Não recomendado <48h',
    duracaoMaxima: '48 horas',
    notas: 'Regime padrão: bolus inicial de 6,75 mg seguido de infusão de 18 mg/hora por até 48 horas.',
    referencias: [
      { 
        titulo: 'Atosiban prescribing information', 
        fonte: 'EMA Label', 
        ano: 2020, 
        nivel: 'A', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipersensibilidade conhecida ao atosiban',
      gravidade: 'moderada',
      mecanismo: 'Reação alérgica potencial',
      referencias: [
        { 
          titulo: 'Atosiban safety profile', 
          fonte: 'Drug Safety', 
          ano: 2005, 
          pmid: '15616837', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    },
    {
      condicao: 'Sangramento vaginal anormal',
      gravidade: 'moderada',
      mecanismo: 'Risco de mascarar hemorragia obstétrica',
      referencias: [
        { 
          titulo: 'Contraindications to tocolytic therapy', 
          fonte: 'Obstetrics & Gynecology', 
          ano: 2003, 
          pmid: '12563104', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  interacoes: [
    {
      substancia: 'Betametasona',
      tipo: 'sinergia',
      mecanismo: 'Uso combinado para acelerar maturação fetal pulmonar',
      referencias: [
        { 
          titulo: 'Tocolytics and corticosteroids in preterm labor', 
          fonte: 'American Journal of Obstetrics and Gynecology', 
          ano: 2001, 
          pmid: '11263373', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  efeitosAdversos: [
    'Náusea',
    'Tontura',
    'Dor de cabeça',
    'Fadiga',
    'Reação no local da injeção'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Frequência cardíaca materna',
    'Pressão arterial',
    'Contrações uterinas (tocografia)',
    'Frequência cardíaca fetal'
  ],
  sinaisAlerta: [
    'Reação alérgica grave',
    'Hipotensão significativa',
    'Isquemia miocárdica',
    'Hemorragia vaginal'
  ],
  referencias: [
    { 
      titulo: 'Atosiban for preterm labor treatment', 
      fonte: 'The Lancet', 
      ano: 1999, 
      pmid: '10376581', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Comparison of atosiban and ritodrine for preterm labor', 
      fonte: 'British Journal of Obstetrics and Gynaecology', 
      ano: 2000, 
      pmid: '10781040', 
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
      titulo: 'Estrutura química do Atosiban', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/atosiban/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Atosiban in preterm labor management', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/10781040/' 
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Atosiban - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Atosiban+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Atosiban - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Atosiban+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Atosiban - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Atosiban+efeitos+cuidados',
      credito: 'YouTube'
    }
  ]
};