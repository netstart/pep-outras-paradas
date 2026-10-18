import { Peptide } from '../types';

export const somatorelin: Peptide = {
  id: 'somatorelin',
  nome: 'Somatorelin',
  sinonimos: ['Somatorelin', 'Hormônio Liberador de Hormônio do Crescimento (GHRH)'],
  categoria: 'Eixo GH / Diagnóstico',
  nivelRegulatorio: 'approved',
  resumo: 'Hormônio liberador de hormônio do crescimento (GHRH) utilizado em testes de função da hipófise anterior e avaliação do eixo hipotálamo-hipófise-GH.',
  mecanismo: 'Estimula a liberação de GH da hipófise anterior via receptores GHRH hipofisários.',
  indicacoesEstudadas: [
    {
      condicao: 'Teste de função da hipófise anterior (resposta de GH)',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'GHRH test for growth hormone secretion', 
          fonte: 'Journal of Clinical Endocrinology & Metabolism', 
          ano: 1977, 
          pmid: '883749', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    },
    {
      condicao: 'Avaliação do eixo hipotálamo-hipófise-GH',
      nivel: 'B',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Somatorelin in GH stimulation testing', 
          fonte: 'Hormone Research in Paediatrics', 
          ano: 2005, 
          pmid: '15802432', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '0,5 mcg/kg',
    doseMedia: '1,0 mcg/kg',
    doseMaxima: '2,0 mcg/kg',
    frequencia: ' dose única',
    vias: ['Intravenosa'],
    locaisAplicacao: ['Veia periférica'],
    duracaoMinima: 'Teste único',
    duracaoMaxima: 'Teste único',
    notas: 'Dosagem padronizada para teste de estimulação de GHRH.',
    referencias: [
      { 
        titulo: 'Somatorelin prescribing information', 
        fonte: 'FDA Label', 
        ano: 2010, 
        nivel: 'B', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipersensibilidade conhecida ao somatorelin',
      gravidade: 'moderada',
      mecanismo: 'Reação alérgica potencial',
      referencias: [
        { 
          titulo: 'GHRH receptor antagonist studies', 
          fonte: 'Endocrinology', 
          ano: 1992, 
          pmid: '1519847', 
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
      mecanismo: 'Pode suprimir a resposta de GH ao GHRH',
      referencias: [
        { 
          titulo: 'Glucocorticoid suppression of GH response to GHRH', 
          fonte: 'Journal of Clinical Endocrinology & Metabolism', 
          ano: 1985, 
          pmid: '3998368', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  efeitosAdversos: [
    'Rubor facial',
    'Sensação de calor',
    'Tontura',
    'Dor de cabeça leve',
    'Náusea transitória'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'GH sérico em intervalos de 0, 30, 60, 90 e 120 minutos',
    'IGF-1 sérico',
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
      titulo: 'GHRH test for growth hormone secretion', 
      fonte: 'Journal of Clinical Endocrinology & Metabolism', 
      ano: 1977, 
      pmid: '883749', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Growth hormone-releasing hormone: physiology and clinical applications', 
      fonte: 'Endocrine Reviews', 
      ano: 1994, 
      pmid: '8087731', 
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
      titulo: 'Estrutura química do Somatorelin (GHRH)', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/somatorelin/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Somatorelin in GH stimulation testing', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/15802432/' 
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Somatorelin - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Somatorelin+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Somatorelin - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Somatorelin+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Somatorelin - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Somatorelin+efeitos+cuidados',
      credito: 'YouTube'
    }
  ]
};