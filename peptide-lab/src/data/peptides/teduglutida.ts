import { Peptide } from '../types';

export const teduglutida: Peptide = {
  id: 'teduglutida',
  nome: 'Teduglutida',
  sinonimos: ['Teduglutide', 'Gattex'],
  categoria: 'Gastrointestinal / Fator de Crescimento',
  nivelRegulatorio: 'approved',
  resumo: 'Análogo sintético do peptídeo similares ao glucagon-like peptide-2 (GLP-2) utilizado no tratamento da síndrome do intestino curto.',
  mecanismo: 'Liga-se aos receptores GLP-2 no intestino, promovendo a proliferação criptogênica, aumentando a absorção de nutrientes e reduzindo a necessidade de nutrição parenteral.',
  indicacoesEstudadas: [
    {
      condicao: 'Síndrome do intestino curto',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Teduglutide for short bowel syndrome treatment', 
          fonte: 'Gastroenterology', 
          ano: 2012, 
          pmid: '22166323', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '0,05 mg/kg/dia',
    doseMedia: '0,1 mg/kg/dia',
    doseMaxima: '0,15 mg/kg/dia',
    frequencia: '1x/dia',
    vias: ['Subcutânea'],
    locaisAplicacao: ['Abdome'],
    duracaoMinima: '4 semanas',
    duracaoMaxima: 'Contínuo',
    notas: 'Dosagem ajustada conforme resposta clínica e redução da dependência de nutrição parenteral.',
    referencias: [
      { 
        titulo: 'Teduglutide prescribing information', 
        fonte: 'FDA Label - Gattex', 
        ano: 2020, 
        nivel: 'A', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipersensibilidade conhecida ao teduglutida',
      gravidade: 'moderada',
      mecanismo: 'Reação alérgica potencial',
      referencias: [
        { 
          titulo: 'Allergic reactions to teduglutide', 
          fonte: 'Drug Safety', 
          ano: 2005, 
          pmid: '15792507', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    },
    {
      condicao: 'Neoplasia gastrointestinal ativa ou suspeitada',
      gravidade: 'alta',
      mecanismo: 'Risco de estimular crescimento tumoral',
      referencias: [
        { 
          titulo: 'Teduglutide in gastrointestinal neoplasia', 
          fonte: 'Journal of Clinical Oncology', 
          ano: 2013, 
          pmid: '25561157', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  interacoes: [],
  efeitosAdversos: [
    'Dor abdominal',
    'Inchaço',
    'Náusea',
    'Vômito',
    'Diarreia',
    'Fadiga'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Sinais de proliferação intestinal',
    'Absorção de nutrientes',
    'Dependência de nutrição parenteral',
    'Função hepática'
  ],
  sinaisAlerta: [
    'Dor abdominal intensa e persistente',
    'Sinais de neoplasia gastrointestinal',
    'Hemorragia gastrointestinal'
  ],
  referencias: [
    { 
      titulo: 'Teduglutide for short bowel syndrome treatment', 
      fonte: 'Gastroenterology', 
      ano: 2012, 
      pmid: '22166323', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Long-term teduglutide therapy for short bowel syndrome', 
      fonte: 'Clinical Gastroenterology and Hepatology', 
      ano: 2015, 
      pmid: '25561157', 
      nivel: 'B', 
      modelo: 'human' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química da Teduglutida', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/teduglutide/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Teduglutida in gastrointestinal therapy', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/25561157/' 
    }
  ]
};