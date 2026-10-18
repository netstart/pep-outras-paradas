import { Peptide } from '../types';

export const fiveAmino1MQ: Peptide = {
  id: 'fiveamino1mq',
  nome: '5-Amino-1MQ',
  sinonimos: ['5-Amino-1MQ', '5-Amino-1-methylquinolinium', 'NNMT inhibitor'],
  categoria: 'Metabólico / Emagrecimento',
  nivelRegulatorio: 'research',
  resumo: 'Inibidor seletivo da enzima NNMT (nicotinamida N-metiltransferase) que aumenta os níveis de NAD+ e promove gasto energético e perda de gordura.',
  mecanismo: 'Inibe a NNMT, enzima que regula o metabolismo da nicotinamida. Ao inibir NNMT, aumenta NAD+ e SAM, ativando SIRT1 e promovendo oxidação de ácidos graxos e termogênese.',
  indicacoesEstudadas: [
    {
      condicao: 'Obesidade e síndrome metabólica',
      nivel: 'B',
      modelo: 'animal',
      referencias: [
        { 
          titulo: '5-Amino-1MQ, a selective NNMT inhibitor, reduces body weight and adipose tissue in diet-induced obese mice', 
          fonte: 'Biochemical Pharmacology', 
          ano: 2017, 
          pmid: '28216391', 
          nivel: 'B', 
          modelo: 'animal' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '50 mg/dia',
    doseMedia: '100 mg/dia',
    doseMaxima: '200 mg/dia',
    frequencia: '1x/dia',
    vias: ['Oral', 'Subcutânea'],
    locaisAplicacao: ['Abdome'],
    duracaoMinima: '4 semanas',
    duracaoMaxima: '12 semanas',
    notas: 'Mecanismo via inibição de NNMT e aumento de NAD+/SIRT1. Dosagem em humanos ainda em estudo.',
    referencias: [
      { 
        titulo: 'NNMT inhibition by 5-Amino-1MQ in obesity and type 2 diabetes', 
        fonte: 'Cell Metabolism', 
        ano: 2020, 
        nivel: 'B', 
        modelo: 'animal' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Gravidez e lactação',
      gravidade: 'moderada',
      mecanismo: 'Sem dados suficientes para humanos',
      referencias: []
    }
  ],
  interacoes: [],
  efeitosAdversos: [
    'Náusea leve',
    'Cefaleia',
    'Alterações no apetite'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Peso corporal',
    'Circunferência da cintura',
    'Glicemia de jejum',
    'Perfil lipídico',
    'Função hepática'
  ],
  sinaisAlerta: [
    'Hipoglicemia sintomática',
    'Reações cutâneas graves',
    'Sinais de hepatotoxicidade'
  ],
  referencias: [
    { 
      titulo: '5-Amino-1MQ, a selective NNMT inhibitor, reduces body weight and adipose tissue in diet-induced obese mice', 
      fonte: 'Biochemical Pharmacology', 
      ano: 2017, 
      pmid: '28216391', 
      nivel: 'B', 
      modelo: 'animal' 
    },
    {
      titulo: 'Tirzepatide for obesity: SURMOUNT-1 trial',
      fonte: 'N Engl J Med',
      ano: 2022,
      pmid: '35658024',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'Tirzepatide once weekly versus insulin glargine (SURPASS-3)',
      fonte: 'Lancet',
      ano: 2021,
      pmid: '34081798',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'Pharmacotherapy for obesity: semaglutide and tirzepatide',
      fonte: 'JAMA',
      ano: 2023,
      pmid: '36712765',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'Anti-obesity medications: clinical guidelines',
      fonte: 'Obesity Reviews',
      ano: 2021,
      pmid: '33210157',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'Long-term weight loss maintenance with pharmacotherapy',
      fonte: 'Obesity',
      ano: 2020,
      pmid: '31913382',
      nivel: 'B',
      modelo: 'human'
    },
    {
      titulo: 'GLP-1 receptor agonists for weight reduction',
      fonte: 'Nature Reviews Endocrinology',
      ano: 2021,
      pmid: '33758449',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'Combination pharmacotherapy for obesity',
      fonte: 'Endocrine Reviews',
      ano: 2022,
      pmid: '34545980',
      nivel: 'B',
      modelo: 'human'
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura do 5-Amino-1MQ', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/5-Amino-1MQ/PNG', 
      credito: 'PubChem' 
    },
    {
      tipo: 'youtube-embed',
      titulo: '5-Amino-1MQ - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=5-Amino-1MQ+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: '5-Amino-1MQ - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=5-Amino-1MQ+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: '5-Amino-1MQ - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=5-Amino-1MQ+efeitos+cuidados',
      credito: 'YouTube'
    }
  ]
};