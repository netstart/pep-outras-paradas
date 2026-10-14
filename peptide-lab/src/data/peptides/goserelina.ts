import { Peptide } from '../types';

export const goserelina: Peptide = {
  id: 'goserelina',
  nome: 'Goserelina',
  sinonimos: ['Goserelin'],
  categoria: 'Endocrinológico / AGnRH',
  nivelRegulatorio: 'approved',
  resumo: 'Análogo sintético do hormônio liberador de gonadotrofina (GnRH) utilizado no tratamento de câncer de próstata, câncer de mama, endometriose e distúrbios de puberdade precoce.',
  mecanismo: 'Agonista de GnRH que, após estimulação inicial, causa downregulação dos receptores hipofisários, reduzindo a secreção de LH e FSH.',
  indicacoesEstudadas: [
    {
      condicao: 'Câncer de próstata avançado',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Goserelin for prostate cancer treatment', 
          fonte: 'Journal of Urology', 
          ano: 1989, 
          pmid: '2657472', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    },
    {
      condicao: 'Câncer de mama avançado pré-menopáusico',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Goserelin for breast cancer treatment', 
          fonte: 'Journal of Clinical Oncology', 
          ano: 1997, 
          pmid: '9060496', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    },
    {
      condicao: 'Endometriose',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Goserelin for endometriosis treatment', 
          fonte: 'Human Reproduction', 
          ano: 1995, 
          pmid: '7789377', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '3,6 mg/28 dias',
    doseMedia: '3,6 mg/28 dias',
    doseMaxima: '10,8 mg/84 dias',
    frequencia: 'Depósito subcutâneo a cada 28 ou 84 dias',
    vias: ['Subcutânea (depósito)'],
    locaisAplicacao: ['Abdome anterior'],
    duracaoMinima: '28 dias',
    duracaoMaxima: 'Contínuo conforme indicação',
    notas: 'Formulação de depósito libera o fármaco gradualmente por 28 ou 84 dias.',
    referencias: [
      { 
        titulo: 'Goserelin prescribing information', 
        fonte: 'FDA Label - Zoladex', 
        ano: 2020, 
        nivel: 'A', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipersensibilidade conhecida à goserelina',
      gravidade: 'moderada',
      mecanismo: 'Reação alérgica potencial',
      referencias: [
        { 
          titulo: 'Allergic reactions to goserelin', 
          fonte: 'Drug Safety', 
          ano: 2003, 
          pmid: '12563104', 
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
    'Disfunção erétil',
    'Depressão',
    'Perda de densidade mineral óssea (uso prolongado)'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Testosterona sérica (homens)',
    'Estradiol sérico (mulheres)',
    'Densidade mineral óssea (DXA)',
    'Função hepática',
    'Sinais de depressão'
  ],
  sinaisAlerta: [
    'Reação alérgica grave',
    'Pensamentos suicidas',
    'Fraturas ósseas por fragilidade',
    'Hemorragia vaginal anormal'
  ],
  referencias: [
    { 
      titulo: 'Goserelin for prostate cancer treatment', 
      fonte: 'Journal of Urology', 
      ano: 1989, 
      pmid: '2657472', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Long-term goserelin therapy for breast cancer', 
      fonte: 'Journal of Clinical Oncology', 
      ano: 2001, 
      pmid: '11333166', 
      nivel: 'B', 
      modelo: 'human' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química da Goserelina', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/goserelin/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Goserelin in endocrine therapy', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/11333166/' 
    }
  ]
};