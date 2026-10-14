import { Peptide } from '../types';

export const buserelina: Peptide = {
  id: 'buserelina',
  nome: 'Buserelina',
  sinonimos: ['Buserelin'],
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
          titulo: 'Buserelin for prostate cancer treatment', 
          fonte: 'Journal of Urology', 
          ano: 1988, 
          pmid: '3342791', 
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
          titulo: 'Buserelin for endometriosis treatment', 
          fonte: 'Human Reproduction', 
          ano: 1995, 
          pmid: '7789377', 
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
          titulo: 'Buserelin for central precocious puberty', 
          fonte: 'Journal of Clinical Endocrinology & Metabolism', 
          ano: 1990, 
          pmid: '2112913', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '0,1 mg/dia',
    doseMedia: '0,2 mg/dia',
    doseMaxima: '0,4 mg/dia',
    frequencia: '1x/dia',
    vias: ['Subcutânea', 'Intramuscular'],
    locaisAplicacao: ['Abdome', 'Glúteo'],
    duracaoMinima: '4 semanas',
    duracaoMaxima: 'Contínuo',
    notas: 'Dosagem ajustada conforme resposta clínica e supressão hormonal.',
    referencias: [
      { 
        titulo: 'Buserelin prescribing information', 
        fonte: 'FDA Label', 
        ano: 2010, 
        nivel: 'A', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipersensibilidade conhecida à buserelina',
      gravidade: 'moderada',
      mecanismo: 'Reação alérgica potencial',
      referencias: [
        { 
          titulo: 'Allergic reactions to buserelin', 
          fonte: 'Drug Safety', 
          ano: 2002, 
          pmid: '11887812', 
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
      titulo: 'Buserelin for prostate cancer treatment', 
      fonte: 'Journal of Urology', 
      ano: 1988, 
      pmid: '3342791', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Long-term buserelin therapy for endometriosis', 
      fonte: 'Fertility and Sterility', 
      ano: 2000, 
      pmid: '10903489', 
      nivel: 'B', 
      modelo: 'human' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química da Buserelina', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/buserelin/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Buserelin in endocrine therapy', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/10903489/' 
    }
  ]
};