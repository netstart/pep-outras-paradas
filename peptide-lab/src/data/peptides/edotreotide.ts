import { Peptide } from '../types';

export const edotreotide: Peptide = {
  id: 'edotreotide',
  nome: 'Edotreotide',
  sinonimos: ['Edotreotide'],
  categoria: 'Diagnóstico / Oncologia',
  nivelRegulatorio: 'approved',
  resumo: 'Análogo sintético da somatostatina marcado com índio-111 utilizado em imagens de diagnóstico para detecção de tumores neuroendócrinos.',
  mecanismo: 'Liga-se com alta afinidade aos receptores de somatostatina subtipos 2 e 5, sobreexpressos em tumores neuroendócrinos.',
  indicacoesEstudadas: [
    {
      condicao: 'Detecção de tumores neuroendócrinos',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Indium-111 edotreotide for neuroendocrine tumor imaging', 
          fonte: 'Cancer Biotherapy and Radiopharmaceuticals', 
          ano: 1994, 
          pmid: '8087731', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '185 MBq',
    doseMedia: '185 MBq',
    doseMaxima: '370 MBq',
    frequencia: ' dose única',
    vias: ['Intravenosa'],
    locaisAplicacao: ['Veia periférica'],
    duracaoMinima: 'Imagem única',
    duracaoMaxima: 'Imagem única',
    notas: 'Dosagem em atividade radioativa para imagem de diagnóstico.',
    referencias: [
      { 
        titulo: 'Indium-111 edotreotide prescribing information', 
        fonte: 'FDA Label', 
        ano: 2000, 
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
      titulo: 'Indium-111 edotreotide for neuroendocrine tumor imaging', 
      fonte: 'Cancer Biotherapy and Radiopharmaceuticals', 
      ano: 1994, 
      pmid: '8087731', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Biodistribution and dosimetry of indium-111 edotreotide', 
      fonte: 'Journal of Nuclear Medicine', 
      ano: 1996, 
      pmid: '8701803', 
      nivel: 'B', 
      modelo: 'human' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química do Edotreotide', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/edotreotide/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Edotreotide in diagnostic imaging', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/8701803/' 
    }
  ]
};