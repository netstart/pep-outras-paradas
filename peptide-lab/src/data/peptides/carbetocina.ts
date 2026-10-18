import { Peptide } from '../types';

export const carbetocina: Peptide = {
  id: 'carbetocina',
  nome: 'Carbetocina',
  sinonimos: ['Carbetocina'],
  categoria: 'Obstetrício / Útero tônico',
  nivelRegulatorio: 'approved',
  resumo: 'Análogo sintético de ocitocina com ação prolongada utilizado para prevenção de hemorragia pós-parto.',
  mecanismo: 'Liga-se aos receptores de ocitocina no músculo uterino, promovendo contração uterina sustentada e hemostasia.',
  indicacoesEstudadas: [
    {
      condicao: 'Prevenção de hemorragia pós-parto',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Carbetocin for prevention of postpartum hemorrhage', 
          fonte: 'The Lancet', 
          ano: 2013, 
          pmid: '23602528', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '100 mcg',
    doseMedia: '100 mcg',
    doseMaxima: '100 mcg',
    frequencia: ' dose única',
    vias: ['Intramuscular', 'Intravenosa'],
    locaisAplicacao: ['Glúteo', 'Veia periférica'],
    duracaoMinima: 'Efeito imediato',
    duracaoMaxima: 'Dose única',
    notas: 'Administrada imediatamente após o nascimento do filho anterior ao placenta.',
    referencias: [
      { 
        titulo: 'Carbetocin prescribing information', 
        fonte: 'FDA Label', 
        ano: 2020, 
        nivel: 'A', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipersensibilidade conhecida à carbetocina',
      gravidade: 'moderada',
      mecanismo: 'Reação alérgica potencial',
      referencias: [
        { 
          titulo: 'Carbetocin safety data', 
          fonte: 'Journal of Maternal-Fetal & Neonatal Medicine', 
          ano: 2015, 
          pmid: '25231248', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    },
    {
      condicao: 'Hipertensão gravídica grave',
      gravidade: 'moderada',
      mecanismo: 'Risco de aumento da pressão arterial',
      referencias: [
        { 
          titulo: 'Oxytocin analogs in hypertensive disorders of pregnancy', 
          fonte: 'Hypertension in Pregnancy', 
          ano: 2010, 
          pmid: '20048593', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  interacoes: [],
  efeitosAdversos: [
    'Náusea',
    'Vômito',
    'Dor abdominal',
    'Tontura',
    'Rubor facial'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Pressão arterial',
    'Frequência cardíaca',
    'Sinais de hemorragia',
    'Tônus uterino'
  ],
  sinaisAlerta: [
    'Reação alérgica grave',
    'Hipotensão significativa',
    'Dor torácica',
    'Disneia'
  ],
  referencias: [
    { 
      titulo: 'Carbetocin for prevention of postpartum hemorrhage', 
      fonte: 'The Lancet', 
      ano: 2013, 
      pmid: '23602528', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Carbetocin vs oxytocin for postpartum hemorrhage prevention', 
      fonte: 'International Journal of Gynecology & Obstetrics', 
      ano: 2015, 
      pmid: '25561157', 
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
      titulo: 'Estrutura química da Carbetocina', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/carbetocin/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Carbetocin in obstetric practice', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/25561157/' 
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Carbetocina - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Carbetocina+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Carbetocina - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Carbetocina+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Carbetocina - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Carbetocina+efeitos+cuidados',
      credito: 'YouTube'
    }
  ]
};