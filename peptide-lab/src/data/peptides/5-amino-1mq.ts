import { Peptide } from '../types';

export const fiveAmino1MQ: Peptide = {
  id: 'fiveamino1mq',
  nome: '5-Amino-1MQ',
  sinonimos: ['5-Amino-1MQ', '5-Amino-1-methylquinolinium', 'NNMT inhibitor'],
  categoria: 'Metabólico / Emagrecimento',
  nivelRegulatorio: 'research',
  resumo: 'Inibidor seletivo da enzima NNMT (nicotinamide N-methyltransferase) que aumenta os níveis de NAD+ e promove gasto energético e perda de gordura.',
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
    }
  ]
};