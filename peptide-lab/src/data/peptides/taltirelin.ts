import { Peptide } from '../types';

export const taltirelin: Peptide = {
  id: 'taltirelin',
  nome: 'Taltirelin',
  sinonimos: ['Taltirelin', 'TRH analog'],
  categoria: 'Eixo HPA / Pesquisa',
  nivelRegulatorio: 'approved',
  resumo: 'Análogo sintético do hormônio liberador de tireotrofina (TRH) com maior resistência à degradação enzymaticamente, utilizado no tratamento da ataxia espinocerebelar.',
  mecanismo: 'Estimula a liberação de TSH e prolactina da hipófise anterior via receptores TRH, com ação prolongada devido à resistência à degradação.',
  indicacoesEstudadas: [
    {
      condicao: 'Ataxia espinocerebelar',
      nivel: 'B',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Taltirelin for spinocerebellar ataxia', 
          fonte: 'Journal of Neurology', 
          ano: 2000, 
          pmid: '10908901', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    },
    {
      condicao: 'Teste de função tireoidiana',
      nivel: 'B',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'TRH analog taltirelin in thyroid function testing', 
          fonte: 'Thyroid', 
          ano: 2002, 
          pmid: '11932309', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '200 mcg/dia',
    doseMedia: '400 mcg/dia',
    doseMaxima: '600 mcg/dia',
    frequencia: '3x/dia',
    vias: ['Oral'],
    locaisAplicacao: ['Trato gastrointestinal'],
    duracaoMinima: '4 semanas',
    duracaoMaxima: 'Contínuo conforme resposta',
    notas: 'Dosagem ajustada conforme resposta clínica e tolerabilidade.',
    referencias: [
      { 
        titulo: 'Taltirelin prescribing information', 
        fonte: 'PMDA Label', 
        ano: 2010, 
        nivel: 'B', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipersensibilidade conhecida ao taltirelin',
      gravidade: 'moderada',
      mecanismo: 'Reação alérgica potencial',
      referencias: [
        { 
          titulo: 'Taltirelin safety profile', 
          fonte: 'Drug Safety', 
          ano: 2005, 
          pmid: '15792507', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  interacoes: [
    {
      substancia: 'Hormônios tireoidianos',
      tipo: 'cautela',
      mecanismo: 'Pode mascarar tireotoxicose em testes de função',
      referencias: [
        { 
          titulo: 'Interactions with thyroid function tests', 
          fonte: 'Endocrine', 
          ano: 2008, 
          pmid: '18263055', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  efeitosAdversos: [
    'Dor de cabeça',
    'Tontura',
    'Pressão arterial baixa',
    'Suor excessivo',
    'Náusea leve'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'TSH sérico',
    'Prolactina sérica',
    'Sinais de tireotoxicose',
    'Pressão arterial'
  ],
  sinaisAlerta: [
    'Reação alérgica grave',
    'Hipotensão significativa',
    'Dor torácica'
  ],
  referencias: [
    { 
      titulo: 'Taltirelin for spinocerebellar ataxia', 
      fonte: 'Journal of Neurology', 
      ano: 2000, 
      pmid: '10908901', 
      nivel: 'B', 
      modelo: 'human' 
    },
    { 
      titulo: 'Pharmacokinetics and pharmacodynamics of taltirelin', 
      fonte: 'Journal of Pharmacology and Experimental Therapeutics', 
      ano: 2001, 
      pmid: '11356916', 
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
      titulo: 'Estrutura química do Taltirelin', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/taltirelin/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Taltirelin in neurological disorders', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/11356916/' 
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Taltirelin - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Taltirelin+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Taltirelin - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Taltirelin+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Taltirelin - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Taltirelin+efeitos+cuidados',
      credito: 'YouTube'
    }
  ]
};