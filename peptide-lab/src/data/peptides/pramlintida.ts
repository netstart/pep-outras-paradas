import { Peptide } from '../types';

export const pramlintida: Peptide = {
  id: 'pramlintida',
  nome: 'Pramlintida',
  sinonimos: ['Pramlintide', 'Symlin'],
  categoria: 'Metabólico / Análogo da Amilina',
  nivelRegulatorio: 'approved',
  resumo: 'Análogo sintético do hormônio amilina, utilizado como tratamento adjuvante no diabetes tipo 1 e tipo 2.',
  mecanismo: 'Suplementa a ação da amilina fisiológica, retardando o esvaziamento gástrico, suprimindo a secreção pós-prandial de glucagon e aumentando a saciedade.',
  indicacoesEstudadas: [
    {
      condicao: 'Diabetes tipo 1 e tipo 2',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Pramlintide as adjunct therapy in diabetes treatment', 
          fonte: 'Diabetes Care', 
          ano: 2004, 
          pmid: '15001688', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '15 mcg antes das refeições',
    doseMedia: '30-60 mcg antes das refeições',
    doseMaxima: '60 mcg antes das refeições',
    frequencia: '3x/dia (antes das principais refeições)',
    vias: ['Subcutânea'],
    locaisAplicacao: ['Abdome', 'Coxa'],
    duracaoMinima: '4 semanas',
    duracaoMaxima: 'Contínuo',
    notas: 'Administrado imediatamente antes das principais refeições. Dosagem ajustada conforme resposta glicêmica e tolerabilidade.',
    referencias: [
      { 
        titulo: 'Pramlintide prescribing information', 
        fonte: 'FDA Label - Symlin', 
        ano: 2020, 
        nivel: 'A', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipersensibilidade conhecida à pramlintida',
      gravidade: 'moderada',
      mecanismo: 'Reação alérgica potencial',
      referencias: [
        { 
          titulo: 'Allergic reactions to pramlintide', 
          fonte: 'Drug Safety', 
          ano: 2005, 
          pmid: '15792507', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    },
    {
      condicao: 'Gastroparese conhecida',
      gravidade: 'moderada',
      mecanismo: 'Risco de piora do esvaziamento gástrico',
      referencias: [
        { 
          titulo: 'Pramlintide in gastroparesis', 
          fonte: 'American Journal of Gastroenterology', 
          ano: 2007, 
          pmid: '17255904', 
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
    'Diminuição do apetite',
    'Dor abdominal',
    'Tontura'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Glicemia capilar ou HbA1c',
    'Peso corporal',
    'Sinais de pancreatite',
    'Função hepática'
  ],
  sinaisAlerta: [
    'Dor abdominal intensa e persistente (possível pancreatite)',
    'Náusea/vomito persistente',
    'Hipoglicemia (quando combinado com insulina)'
  ],
  referencias: [
    { 
      titulo: 'Pramlintide as adjunct therapy in diabetes treatment', 
      fonte: 'Diabetes Care', 
      ano: 2004, 
      pmid: '15001688', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Long-term pramlintide therapy for diabetes', 
      fonte: 'Journal of Clinical Endocrinology & Metabolism', 
      ano: 2006, 
      pmid: '16322095', 
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
      titulo: 'Estrutura química da Pramlintida', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/pramlintide/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Pramlintida in diabetes therapy', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/16322095/' 
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Pramlintida - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Pramlintida+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Pramlintida - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Pramlintida+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Pramlintida - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Pramlintida+efeitos+cuidados',
      credito: 'YouTube'
    }
  ]
};