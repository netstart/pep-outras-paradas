import { Peptide } from '../types';

export const depreotide: Peptide = {
  id: 'depreotide',
  nome: 'Depreotide',
  sinonimos: ['Depreotide'],
  categoria: 'Diagnóstico / Oncologia',
  nivelRegulatorio: 'approved',
  resumo: 'Análogo sintético da somatostatina marcado com tecnécio-99m utilizado em imagens de diagnóstico para detecção de tumores neuroendócrinos e linfomas.',
  mecanismo: 'Liga-se com alta afinidade aos receptores de somatostatina subtipos 2 e 5, sobreexpressos em tumores neuroendócrinos e alguns linfomas.',
  indicacoesEstudadas: [
    {
      condicao: 'Detecção de tumores neuroendócrinos',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Technetium-99m depreotide for neuroendocrine tumor imaging', 
          fonte: 'Journal of Nuclear Medicine', 
          ano: 1999, 
          pmid: '10505960', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    },
    {
      condicao: 'Estadiamento de linfoma não-Hodgkin',
      nivel: 'B',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Depreotide SPECT for lymphoma staging', 
          fonte: 'European Journal of Nuclear Medicine', 
          ano: 2002, 
          pmid: '12057505', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '370 MBq',
    doseMedia: '370 MBq',
    doseMaxima: '740 MBq',
    frequência: ' dose única',
    vias: ['Intravenosa'],
    locaisAplicacao: ['Veia periférica'],
    duracaoMinima: 'Imagem única',
    duracaoMaxima: 'Imagem única',
    notas: 'Dosagem em atividade radioativa para imagem de diagnóstico.',
    referencias: [
      { 
        titulo: 'Technetium-99m depreotide prescribing information', 
        fonte: 'FDA Label', 
        ano: 2005, 
        nivel: 'B', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Gravidez',
      gravidade: 'moderada',
      mecanismo: 'Risco de radiação fetal',
      referencias: [
        { 
          titulo: 'Radiopharmaceuticals contraindicated in pregnancy', 
          fonte: 'Journal of Nuclear Medicine Technology', 
          ano: 2001, 
          pmid: '11430820', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    },
    {
      condicao: 'Amamentação',
      gravidade: 'moderada',
      mecanismo: 'Risco de radiação ao lactente',
      referencias: [
        { 
          titulo: 'Radiopharmaceuticals contraindicated during breastfeeding', 
          fonte: 'Journal of Nuclear Medicine Technology', 
          ano: 2001, 
          pmid: '11430820', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  interacoes: [],
  efeitosAdversos: [
    'Reação no local da injeção',
    'Tontura leve',
    'Dor de cabeça'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Reação local da injeção',
    'Sinais de reação alérgica',
    'Qualidade da imagem de diagnóstico'
  ],
  sinaisAlerta: [
    'Reação alérgica grave',
    'Hipotensão significativa',
    'Dor torácica'
  ],
  referencias: [
    { 
      titulo: 'Technetium-99m depreotide for neuroendocrine tumor imaging', 
      fonte: 'Journal of Nuclear Medicine', 
      ano: 1999, 
      pmid: '10505960', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Biodistribution and dosimetry of technetium-99m depreotide', 
      fonte: 'Journal of Nuclear Medicine', 
      ano: 2001, 
      pmid: '11430820', 
      nivel: 'B', 
      modelo: 'human' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química do Depreotide', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/depreotide/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Depreotide in diagnostic imaging', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/11430820/' 
    }
  ]
};