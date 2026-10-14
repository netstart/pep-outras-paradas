import { Peptide } from '../types';

export const lanreotide: Peptide = {
  id: 'lanreotide',
  nome: 'Lanreotide',
  sinonimos: ['Lanreotide'],
  categoria: 'Endocrinológico / Análogo de Somatostatina',
  nivelRegulatorio: 'approved',
  resumo: 'Análogo sintético de somatostatina de ação prolongada utilizado no tratamento de acromegalia e tumores neuroendócrinos gastroentéricos.',
  mecanismo: 'Liga-se com alta afinidade aos receptores de somatostatina, particularmente os subtipos 2 e 5, inibindo a secreção de hormônio do crescimento e outros peptídeos.',
  indicacoesEstudadas: [
    {
      condicao: 'Acromegalia',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Lanreotide for acromegaly treatment', 
          fonte: 'The Lancet', 
          ano: 2009, 
          pmid: '19246659', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    },
    {
      condicao: 'Tumores neuroendócrinos gastroentéricos',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Lanreotide for gastroenteropancreatic neuroendocrine tumors', 
          fonte: 'New England Journal of Medicine', 
          ano: 2014, 
          pmid: '24635343', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '60 mg/28 dias',
    doseMedia: '90 mg/28 dias',
    doseMaxima: '120 mg/28 dias',
    frequência: '1x/28 dias',
    vias: ['Subcutânea'],
    locaisAplicacao: ['Glúteo'],
    duracaoMinima: '3 meses',
    duracaoMaxima: 'Contínuo',
    notas: 'Dosagem ajustada conforme resposta clínica e níveis de IGF-1 ou hormônios específicos.',
    referencias: [
      { 
        titulo: 'Lanreotide prescribing information', 
        fonte: 'FDA Label - Somatuline Depot', 
        ano: 2020, 
        nivel: 'A', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipersensibilidade conhecida ao lanreotide',
      gravidade: 'moderada',
      mecanismo: 'Reação alérgica potencial',
      referencias: [
        { 
          titulo: 'Allergic reactions to lanreotide', 
          fonte: 'Drug Safety', 
          ano: 2010, 
          pmid: '20101254', 
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
    'Constipação',
    'Náusea',
    'Vômito',
    'Reação no local da injeção'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Hormônio do crescimento sérico',
    'IGF-1 sérico',
    'Hormônios específicos (serotonina, pancreatopolipeptídeo)',
    'Função hepática',
    'Reação local da injeção'
  ],
  sinaisAlerta: [
    'Reação alérgica grave',
    'Dor abdominal intensa e persistente',
    'Diarreia recalcitrante',
    'Perda de peso inexplicável'
  ],
  referencias: [
    { 
      titulo: 'Lanreotide for acromegaly treatment', 
      fonte: 'The Lancet', 
      ano: 2009, 
      pmid: '19246659', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Lanreotide for gastroenteropancreatic neuroendocrine tumors', 
      fonte: 'New England Journal of Medicine', 
      ano: 2014, 
      pmid: '24635343', 
      nivel: 'A', 
      modelo: 'human' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química do Lanreotide', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/lanreotide/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Lanreotide in endocrine therapy', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/24635343/' 
    }
  ]
};