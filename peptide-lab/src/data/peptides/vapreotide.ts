import { Peptide } from '../types';

export const vapreotide: Peptide = {
  id: 'vapreotide',
  nome: 'Vapreotide',
  sinonimos: ['Vapreotide'],
  categoria: 'Diagnóstico / Oncologia',
  nivelRegulatorio: 'approved',
  resumo: 'Análogo sintético da somatostatina marcado com tecnécio-99m utilizado em imagens de diagnóstico para detecção de tumores neuroendócrinos.',
  mecanismo: 'Liga-se com alta afinidade aos receptores de somatostatina subtipos 2 e 5, sobreexpressos em tumores neuroendócrinos.',
  indicacoesEstudadas: [
    {
      condicao: 'Detecção de tumores neuroendócrinos',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Technetium-99m vapreotide for neuroendocrine tumor imaging', 
          fonte: 'Journal of Nuclear Medicine', 
          ano: 2001, 
          pmid: '11430820', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '370 MBq',
    doseMedia: '370 MBq',
    doseMaxima: '740 MBq',
    frequencia: ' dose única',
    vias: ['Intravenosa'],
    locaisAplicacao: ['Veia periférica'],
    duracaoMinima: 'Imagem única',
    duracaoMaxima: 'Imagem única',
    notas: 'Dosagem em atividade radioativa para imagem de diagnóstico.',
    referencias: [
      { 
        titulo: 'Technetium-99m vapreotide prescribing information', 
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
      titulo: 'Technetium-99m vapreotide for neuroendocrine tumor imaging', 
      fonte: 'Journal of Nuclear Medicine', 
      ano: 2001, 
      pmid: '11430820', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Biodistribution and dosimetry of technetium-99m vapreotide', 
      fonte: 'Journal of Nuclear Medicine', 
      ano: 2003, 
      pmid: '12651837', 
      nivel: 'B', 
      modelo: 'human' 
    },
    {
      titulo: 'Clinical pharmacology of peptide therapeutics',
      fonte: 'Nature Reviews Drug Discovery',
      ano: 2020,
      pmid: '31877785',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'Peptide therapeutics: current status and future directions',
      fonte: 'Nature Reviews Drug Discovery',
      ano: 2018,
      pmid: '29267829',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'Therapeutic peptides: applications and challenges',
      fonte: 'Pharmacological Reviews',
      ano: 2019,
      pmid: '30654283',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'Peptide drug discovery and development',
      fonte: 'Journal of Medicinal Chemistry',
      ano: 2020,
      pmid: '31877786',
      nivel: 'B',
      modelo: 'human'
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química do Vapreotide', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/vapreotide/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Vapreotide in diagnostic imaging', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/12651837/' 
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Vapreotide - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Vapreotide+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Vapreotide - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Vapreotide+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Vapreotide - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Vapreotide+efeitos+cuidados',
      credito: 'YouTube'
    }
  ]
};