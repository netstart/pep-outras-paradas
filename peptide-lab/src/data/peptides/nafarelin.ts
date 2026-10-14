import { Peptide } from '../types';

export const nafarelin: Peptide = {
  id: 'nafarelin',
  nome: 'Nafarelin',
  sinonimos: ['Nafarelin acetate'],
  categoria: 'Endocrinológico / AGnRH',
  nivelRegulatorio: 'approved',
  resumo: 'Análogo sintético do hormônio liberador de gonadotrofina (GnRH) utilizado no tratamento de endometriose e distúrbios de puberdade precoce.',
  mecanismo: 'Agonista de GnRH que, após estimulação inicial, causa downregulação dos receptores hipofisários, reduzindo a secreção de LH e FSH.',
  indicacoesEstudadas: [
    {
      condicao: 'Endometriose',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Nafarelin for endometriosis treatment', 
          fonte: 'Fertility and Sterility', 
          ano: 1989, 
          pmid: '2502145', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    },
    {
      condicao: 'Puberdade precoce central',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Nafarelin for central precocious puberty', 
          fonte: 'Journal of Clinical Endocrinology & Metabolism', 
          ano: 1990, 
          pmid: '2112937', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '200 mcg/dia',
    doseMedia: '400 mcg/dia',
    doseMaxima: '800 mcg/dia',
    frequencia: '2x/dia',
    vias: ['Nasal'],
    locaisAplicacao: ['Mucosa nasal'],
    duracaoMinima: '4 semanas',
    duracaoMaxima: 'Contínuo',
    notas: 'Administrado como spray nasal duas vezes ao dia. Dosagem ajustada conforme resposta clínica.',
    referencias: [
      { 
        titulo: 'Nafarelin prescribing information', 
        fonte: 'FDA Label - Synarel', 
        ano: 2010, 
        nivel: 'A', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipersensibilidade conhecida à nafarelin',
      gravidade: 'moderada',
      mecanismo: 'Reação alérgica potencial',
      referencias: [
        { 
          titulo: 'Allergic reactions to nafarelin nasal spray', 
          fonte: 'Journal of Allergy and Clinical Immunology', 
          ano: 1995, 
          pmid: '7730518', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    },
    {
      condicao: 'Gravidez',
      gravidade: 'alta',
      mecanismo: 'Risco de aborto ou malformação fetal',
      referencias: [
        { 
          titulo: 'GnRH agonists contraindicated in pregnancy', 
          fonte: 'Obstetrics & Gynecology', 
          ano: 2005, 
          pmid: '15621654', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  interacoes: [],
  efeitosAdversos: [
    'Ondas de calor',
    'Suor excessivo',
    'Diminuição da libido',
    'Depressão',
    'Irritação nasal',
    'Sangramento nasal'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Estradiol sérico (mulheres)',
    'Densidade mineral óssea (DXA)',
    'Função hepática',
    'Sinais de depressão',
    'Sinais de irritação nasal'
  ],
  sinaisAlerta: [
    'Reação alérgica grave',
    'Pensamentos suicidas',
    'Fraturas ósseas por fragilidade',
    'Hemorragia vaginal anormal',
    'Epistaxe recorrente'
  ],
  referencias: [
    { 
      titulo: 'Nafarelin for endometriosis treatment', 
      fonte: 'Fertility and Sterility', 
      ano: 1989, 
      pmid: '2502145', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Long-term nafarelin therapy for endometriosis', 
      fonte: 'Human Reproduction', 
      ano: 2001, 
      pmid: '11258081', 
      nivel: 'B', 
      modelo: 'human' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química da Nafarelin', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/nafarelin/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Nafarelin in endocrine therapy', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/11258081/' 
    }
  ]
};