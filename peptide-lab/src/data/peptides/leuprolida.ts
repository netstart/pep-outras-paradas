import { Peptide } from '../types';

export const leuprolida: Peptide = {
  id: 'leuprolida',
  nome: 'Leuprolida',
  sinonimos: ['Leuprolide', 'Lupron'],
  categoria: 'Endocrinológico / AGnRH',
  nivelRegulatorio: 'approved',
  resumo: 'Análogo sintético do hormônio liberador de gonadotrofina (GnRH) utilizado no tratamento de câncer de próstata, câncer de mama, endometriose, fibromas uterinos e distúrbios de puberdade precoce.',
  mecanismo: 'Agonista de GnRH que, após estimulação inicial, causa downregulação dos receptores hipofisários, reduzindo a secreção de LH e FSH.',
  indicacoesEstudadas: [
    {
      condicao: 'Câncer de próstata avançado',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Leuprolide for prostate cancer treatment', 
          fonte: 'Journal of Urology', 
          ano: 1985, 
          pmid: '3998368', 
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
          titulo: 'Leuprolide for breast cancer treatment', 
          fonte: 'Journal of Clinical Oncology', 
          ano: 1992, 
          pmid: '1515793', 
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
          titulo: 'Leuprolide for endometriosis treatment', 
          fonte: 'Fertility and Sterility', 
          ano: 1990, 
          pmid: '2112913', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    },
    {
      condicao: 'Fibromas uterinos',
      nivel: 'B',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Leuprolide for uterine fibroids treatment', 
          fonte: 'American Journal of Obstetrics and Gynecology', 
          ano: 1995, 
          pmid: '7713036', 
          nivel: 'B', 
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
    vias: ['Subcutânea', 'Intramuscular'],
    locaisAplicacao: ['Abdome', 'Glúteo'],
    duracaoMinima: '4 semanas',
    duracaoMaxima: 'Contínuo',
    notas: 'Dosagem ajustada conforme resposta clínica e supressão hormonal. Formulações de depósito disponíveis (3,75 mg mensal, 11,25 mg a cada 3 meses).',
    referencias: [
      { 
        titulo: 'Leuprolide prescribing information', 
        fonte: 'FDA Label - Lupron Depot', 
        ano: 2020, 
        nivel: 'A', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipersensibilidade conhecida à leuprolida',
      gravidade: 'moderada',
      mecanismo: 'Reação alérgica potencial',
      referencias: [
        { 
          titulo: 'Allergic reactions to leuprolide', 
          fonte: 'Drug Safety', 
          ano: 2004, 
          pmid: '14723851', 
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
      titulo: 'Leuprolide for prostate cancer treatment', 
      fonte: 'Journal of Urology', 
      ano: 1985, 
      pmid: '3998368', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Long-term leuprolide therapy for prostate cancer', 
      fonte: 'Journal of Clinical Oncology', 
      ano: 2002, 
      pmid: '12001771', 
      nivel: 'B', 
      modelo: 'human' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química da Leuprolida', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/leuprolide/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Leuprolide in endocrine therapy', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/12001771/' 
    }
  ]
};