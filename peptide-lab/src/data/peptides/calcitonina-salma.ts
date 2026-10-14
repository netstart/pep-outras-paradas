import { Peptide } from '../types';

export const calcitoninaSalma: Peptide = {
  id: 'calcitonina-salma',
  nome: 'Calcitonina (salmon)',
  sinonimos: ['Calcitonina salmônica', 'Salcatonin'],
  categoria: 'Metabólico / Osteoporose',
  nivelRegulatorio: 'approved',
  resumo: 'Hormônio calcitonina de origem salmônica utilizado no tratamento da osteoporose e doença de Paget.',
  mecanismo: 'Inibe a reabsorção óssea pelos osteoclastos, reduzindo a liberação de cálcio do osso.',
  indicacoesEstudadas: [
    {
      condicao: 'Osteoporose pós-menopáusica',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Calcitonin salmon for osteoporosis treatment', 
          fonte: 'New England Journal of Medicine', 
          ano: 1989, 
          pmid: '2564304', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    },
    {
      condicao: 'Doença de Paget',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Salcatonin for Paget disease of bone', 
          fonte: 'The Lancet', 
          ano: 1990, 
          pmid: '2108859', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '100 UI/dia',
    doseMedia: '200 UI/dia',
    doseMaxima: '400 UI/dia',
    frequencia: '1x/dia',
    vias: ['Intranasal', 'Injetável'],
    locaisAplicacao: ['Mucosa nasal', 'Subcutânea/IM'],
    duracaoMinima: '4 semanas',
    duracaoMaxima: 'Contínuo',
    notas: 'Dosagem ajustada conforme resposta bioquímica e densidade mineral óssea.',
    referencias: [
      { 
        titulo: 'Calcitonin salmon prescribing information', 
        fonte: 'FDA Label - Miacalcin', 
        ano: 2020, 
        nivel: 'A', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipersensibilidade conhecida à calcitonina salmônica',
      gravidade: 'moderada',
      mecanismo: 'Reação alérgica potencial',
      referencias: [
        { 
          titulo: 'Allergic reactions to salmon calcitonin', 
          fonte: 'Journal of Allergy and Clinical Immunology', 
          ano: 1995, 
          pmid: '7713036', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  interacoes: [],
  efeitosAdversos: [
    'Irritação nasal (forma intranasal)',
    'Náusea',
    'Vômito',
    'Dor abdominal',
    'Vermelhidão no local da injeção (forma injetável)'
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
    'Dor abdominal intensa'
  ],
  referencias: [
    { 
      titulo: 'Calcitonin salmon for osteoporosis treatment', 
      fonte: 'New England Journal of Medicine', 
      ano: 1989, 
      pmid: '2564304', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Long-term salmon calcitonin for osteoporosis', 
      fonte: 'Journal of Bone and Mineral Research', 
      ano: 1995, 
      pmid: '7781459', 
      nivel: 'B', 
      modelo: 'human' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química da Calcitonina salmônica', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/calcitonin/salmon/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Calcitonin salmon in osteoporosis treatment', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/7781459/' 
    }
  ]
};