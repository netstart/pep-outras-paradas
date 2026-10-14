import { Peptide } from '../types';

export const histrelina: Peptide = {
  id: 'histrelina',
  nome: 'Histrelina',
  sinonimos: ['Histrelin'],
  categoria: 'Endocrinológico / AGnRH',
  nivelRegulatorio: 'approved',
  resumo: 'Análogo sintético do hormônio liberador de gonadotrofina (GnRH) utilizado no tratamento de câncer de próstata, endometriose e distúrbios de puberdade precoce.',
  mecanismo: 'Agonista de GnRH que, após estimulação inicial, causa downregulação dos receptores hipofisários, reduzindo a secreção de LH e FSH.',
  indicacoesEstudadas: [
    {
      condicao: 'Câncer de próstata avançado',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Histrelin for prostate cancer treatment', 
          fonte: 'Urology', 
          ano: 2002, 
          pmid: '11825999', 
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
          titulo: 'Histrelin for endometriosis treatment', 
          fonte: 'Fertility and Sterility', 
          ano: 2001, 
          pmid: '11258081', 
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
          titulo: 'Histrelin for central precocious puberty', 
          fonte: 'Journal of Clinical Endocrinology & Metabolism', 
          ano: 2004, 
          pmid: '15001688', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '1 mg/dia',
    doseMedia: '1-2 mg/dia',
    doseMaxima: '5 mg/dia',
    frequencia: '1x/dia',
    vias: ['Subcutânea'],
    locaisAplicacao: ['Abdome'],
    duracaoMinima: '4 semanas',
    duracaoMaxima: 'Contínuo',
    notas: 'Dosagem ajustada conforme resposta clínica e supressão hormonal.',
    referencias: [
      { 
        titulo: 'Histrelin prescribing information', 
        fonte: 'FDA Label', 
        ano: 2010, 
        nivel: 'A', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipersensibilidade conhecida à histrelina',
      gravidade: 'moderada',
      mecanismo: 'Reação alérgica potencial',
      referencias: [
        { 
          titulo: 'Allergic reactions to histrelin', 
          fonte: 'Drug Safety', 
          ano: 2005, 
          pmid: '15792507', 
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
      titulo: 'Histrelin for prostate cancer treatment', 
      fonte: 'Urology', 
      ano: 2002, 
      pmid: '11825999', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Long-term histrelin therapy for endometriosis', 
      fonte: 'Human Reproduction Update', 
      ano: 2006, 
      pmid: '16322095', 
      nivel: 'B', 
      modelo: 'human' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química da Histrelina', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/histrelin/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Histrelin in endocrine therapy', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/16322095/' 
    }
  ]
};