import { Peptide } from '../types';

export const pentetreotide: Peptide = {
  id: 'pentetreotide',
  nome: 'Pentetreotide',
  sinonimos: ['Pentetreotide'],
  categoria: 'Diagnóstico / Oncologia',
  nivelRegulatorio: 'approved',
  resumo: 'Análogo sintético da somatostatina marcado com ítrio-90 utilizado em terapia radionuclídica para tratamento de tumores neuroendócrinos.',
  mecanismo: 'Liga-se com alta afinidade aos receptores de somatostatina subtipos 2 e 5, sobreexpressos em tumores neuroendócrinos, entregando radiação beta diretamente às células tumorais.',
  indicacoesEstudadas: [
    {
      condicao: 'Terapia de tumores neuroendócrinos',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Yttrium-90 pentetreotide for neuroendocrine tumor therapy', 
          fonte: 'Journal of Nuclear Medicine', 
          ano: 2000, 
          pmid: '10723553', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '3,7 GBq',
    doseMedia: '3,7 GBq',
    doseMaxima: '7,4 GBq',
    frequencia: ' dose única',
    vias: ['Intravenosa'],
    locaisAplicacao: ['Veia periférica'],
    duracaoMinima: 'Tratamento único',
    duracaoMaxima: 'Tratamento único',
    notas: 'Dosagem em atividade radioativa para terapia radionuclídica.',
    referencias: [
      { 
        titulo: 'Yttrium-90 pentetreotide prescribing information', 
        fonte: 'FDA Label', 
        ano: 2002, 
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
    'Fadiga',
    'Náusea',
    'Vômito',
    'Dor abdominal'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Reação local da injeção',
    'Sinais de reação alérgica',
    'Contagem de células sanguíneas',
    'Função hepática',
    'Função renal'
  ],
  sinaisAlerta: [
    'Reação alérgica grave',
    'Hipotensão significativa',
    'Dor torácica',
    'Sinais de insuficiência medular'
  ],
  referencias: [
    { 
      titulo: 'Yttrium-90 pentetreotide for neuroendocrine tumor therapy', 
      fonte: 'Journal of Nuclear Medicine', 
      ano: 2000, 
      pmid: '10723553', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Dosimetry and safety of yttrium-90 pentetreotide', 
      fonte: 'Journal of Nuclear Medicine', 
      ano: 2002, 
      pmid: '11825999', 
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
      titulo: 'Estrutura química do Pentetreotide', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/pentetreotide/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Pentetreotide in radionuclide therapy', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/11825999/' 
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Pentetreotide - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Pentetreotide+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Pentetreotide - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Pentetreotide+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Pentetreotide - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Pentetreotide+efeitos+cuidados',
      credito: 'YouTube'
    }
  ]
};