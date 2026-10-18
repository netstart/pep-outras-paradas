import { Peptide } from '../types';

export const calcitoninaHumana: Peptide = {
  id: 'calcitonina-humana',
  nome: 'Calcitonina (humana)',
  sinonimos: ['Calcitonina humana'],
  categoria: 'Metabólico / Osteoporose',
  nivelRegulatorio: 'approved',
  resumo: 'Hormônio calcitonina de origem humana utilizado no tratamento da osteoporose e hipercalcemia.',
  mecanismo: 'Inibe a reabsorção óssea pelos osteoclastos, reduzindo a liberação de cálcio do osso.',
  indicacoesEstudadas: [
    {
      condicao: 'Osteoporose pós-menopáusica',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Human calcitonin for osteoporosis treatment', 
          fonte: 'Journal of Clinical Endocrinology & Metabolism', 
          ano: 1978, 
          pmid: '634821', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    },
    {
      condicao: 'Hipercalcemia',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Calcitonin in hypercalcemia management', 
          fonte: 'Clinical Endocrinology', 
          ano: 1980, 
          pmid: '7410628', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '50-100 UI/dia',
    doseMedia: '100-200 UI/dia',
    doseMaxima: '400 UI/dia',
    frequencia: '1x/dia',
    vias: ['Injetável', 'Intranasal'],
    locaisAplicacao: ['Subcutânea/IM', 'Mucosa nasal'],
    duracaoMinima: '4 semanas',
    duracaoMaxima: 'Contínuo',
    notas: 'Dosagem ajustada conforme resposta bioquímica e densidade mineral óssea.',
    referencias: [
      { 
        titulo: 'Calcitonin human prescribing information', 
        fonte: 'FDA Label - Calcimar', 
        ano: 2010, 
        nivel: 'A', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipersensibilidade conhecida à calcitonina humana',
      gravidade: 'moderada',
      mecanismo: 'Reação alérgica potencial',
      referencias: [
        { 
          titulo: 'Allergic reactions to human calcitonin', 
          fonte: 'Journal of Allergy and Clinical Immunology', 
          ano: 1990, 
          pmid: '2112891', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  interacoes: [],
  efeitosAdversos: [
    'Náusea',
    'Vermelhidão no local da injeção (forma injetável)',
    'Irritação nasal (forma intranasal)',
    'Vermelhidão facial',
    'Tontura'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Cálcio sérico',
    'Fósforo sérico',
    'Marcadores de remodelação óssea (CTX, P1NP)',
    'Densidade mineral óssea (DXA)'
  ],
  sinaisAlerta: [
    'Reação alérgica grave',
    'Hipocalcemia sintomática',
    'Reação local severa'
  ],
  referencias: [
    { 
      titulo: 'Human calcitonin for osteoporosis treatment', 
      fonte: 'Journal of Clinical Endocrinology & Metabolism', 
      ano: 1978, 
      pmid: '634821', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Long-term human calcitonin for osteoporosis', 
      fonte: 'Journal of Bone and Mineral Research', 
      ano: 1985, 
      pmid: '3886810', 
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
      titulo: 'Estrutura química da Calcitonina humana', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/calcitonin/human/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Calcitonin human in osteoporosis treatment', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/3886810/' 
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Calcitonina (humana) - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Calcitonina+(humana)+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Calcitonina (humana) - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Calcitonina+(humana)+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Calcitonina (humana) - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Calcitonina+(humana)+efeitos+cuidados',
      credito: 'YouTube'
    }
  ]
};