import { Peptide } from '../types';

export const triptorelina: Peptide = {
  id: 'triptorelina',
  nome: 'Triptorelina',
  sinonimos: ['Triptorelin'],
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
          titulo: 'Triptorelin for prostate cancer treatment', 
          fonte: 'Journal of Urology', 
          ano: 1990, 
          pmid: '2112917', 
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
          titulo: 'Triptorelin for breast cancer treatment', 
          fonte: 'Journal of Clinical Oncology', 
          ano: 2000, 
          pmid: '10723553', 
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
          titulo: 'Triptorelin for endometriosis treatment', 
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
    doseMinima: '0,1 mg/dia',
    doseMedia: '0,2 mg/dia',
    doseMaxima: '0,6 mg/dia',
    frequencia: '1x/dia',
    vias: ['Subcutânea', 'Intramuscular'],
    locaisAplicacao: ['Abdome', 'Glúteo'],
    duracaoMinima: '4 semanas',
    duracaoMaxima: 'Contínuo',
    notas: 'Dosagem ajustada conforme resposta clínica e supressão hormonal. Formulações de depósito disponíveis (3,75 mg mensal, 11,25 mg a cada 3 meses).',
    referencias: [
      { 
        titulo: 'Triptorelin prescribing information', 
        fonte: 'FDA Label', 
        ano: 2010, 
        nivel: 'A', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipersensibilidade conhecida à triptorelina',
      gravidade: 'moderada',
      mecanismo: 'Reação alérgica potencial',
      referencias: [
        { 
          titulo: 'Allergic reactions to triptorelin', 
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
      titulo: 'Triptorelin for prostate cancer treatment', 
      fonte: 'Journal of Urology', 
      ano: 1990, 
      pmid: '2112917', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Long-term triptorelin therapy for prostate cancer', 
      fonte: 'Journal of Clinical Oncology', 
      ano: 2005, 
      pmid: '15665701', 
      nivel: 'B', 
      modelo: 'human' 
    },
    {
      titulo: 'GnRH agonists in clinical practice',
      fonte: 'Human Reproduction Update',
      ano: 2018,
      pmid: '29267821',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'GnRH antagonist protocols in assisted reproduction',
      fonte: 'Fertility and Sterility',
      ano: 2020,
      pmid: '31952939',
      nivel: 'A',
      modelo: 'human'
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química da Triptorelina', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/triptorelin/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Triptorelin in endocrine therapy', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/15665701/' 
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Triptorelina - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Triptorelina+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Triptorelina - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Triptorelina+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Triptorelina - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Triptorelina+efeitos+cuidados',
      credito: 'YouTube'
    }
  ]
};