import { Peptide } from '../types';

export const gonadorelina: Peptide = {
  id: 'gonadorelina',
  nome: 'Gonadorelina',
  sinonimos: ['Gonadorelin', 'Hormônio Liberador de Gonadotrofina (GnRH)'],
  categoria: 'Endocrinológico / Diagnóstico',
  nivelRegulatorio: 'approved',
  resumo: 'Hormônio liberador de gonadotrofina (GnRH) utilizado em testes de função da hipófise anterior e avaliação do eixo hipotálamo-hipófise-gonades.',
  mecanismo: 'Estimula a liberação de LH e FSH da hipófise anterior via receptores GnRH hipofisários.',
  indicacoesEstudadas: [
    {
      condicao: 'Teste de função da hipófise anterior (resposta de LH/FSH)',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'GnRH test for pituitary function', 
          fonte: 'Journal of Clinical Endocrinology & Metabolism', 
          ano: 1974, 
          pmid: '4470501', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    },
    {
      condicao: 'Avaliação do eixo hipotálamo-hipófise-gonades',
      nivel: 'B',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Gonadorelin in gonadotropin stimulation testing', 
          fonte: 'Fertility and Sterility', 
          ano: 1985, 
          pmid: '3892711', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '100 mcg',
    doseMedia: '500 mcg',
    doseMaxima: '1000 mcg',
    frequencia: ' dose única',
    vias: ['Intravenosa', 'Subcutânea'],
    locaisAplicacao: ['Veia periférica', 'Abdome'],
    duracaoMinima: 'Teste único',
    duracaoMaxima: 'Teste único',
    notas: 'Dosagem padronizada para teste de estimulação de GnRH.',
    referencias: [
      { 
        titulo: 'Gonadorelin prescribing information', 
        fonte: 'FDA Label', 
        ano: 2010, 
        nivel: 'B', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipersensibilidade conhecida à gonadorelina',
      gravidade: 'moderada',
      mecanismo: 'Reação alérgica potencial',
      referencias: [
        { 
          titulo: 'Allergic reactions to gonadotropin-releasing hormone', 
          fonte: 'Allergy and Asthma Proceedings', 
          ano: 1995, 
          pmid: '7730518', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  interacoes: [
    {
      substancia: 'Glicocorticoides em alta dose',
      tipo: 'cautela',
      mecanismo: 'Pode suprimir a resposta de LH/FSH ao GnRH',
      referencias: [
        { 
          titulo: 'Glucocorticoid suppression of gonadotropin response to GnRH', 
          fonte: 'Journal of Clinical Endocrinology & Metabolism', 
          ano: 1988, 
          pmid: '3285291', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  efeitosAdversos: [
    'Rubor facial',
    'Sudorese',
    'Tontura',
    'Dor de cabeça leve',
    'Náusea transitória'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'LH e FSH séricos em intervalos de 0, 30, 60, 90 e 120 minutos',
    'Testosterona sérica (homens) ou estradiol (mulheres)',
    'Pressão arterial',
    'Frequência cardíaca'
  ],
  sinaisAlerta: [
    'Reação alérgica grave',
    'Hipotensão significativa',
    'Dor torácica'
  ],
  referencias: [
    { 
      titulo: 'GnRH test for pituitary function', 
      fonte: 'Journal of Clinical Endocrinology & Metabolism', 
      ano: 1974, 
      pmid: '4470501', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Thirty years of GnRH: from discovery to clinical application', 
      fonte: 'Endocrine Reviews', 
      ano: 2005, 
      pmid: '15831685', 
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
      titulo: 'Estrutura química da Gonadorelina (GnRH)', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/gonadorelin/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Gonadorelin in pituitary function testing', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/15831685/' 
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Gonadorelina - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Gonadorelina+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Gonadorelina - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Gonadorelina+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Gonadorelina - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Gonadorelina+efeitos+cuidados',
      credito: 'YouTube'
    }
  ]
};