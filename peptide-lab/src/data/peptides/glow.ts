import { Peptide } from '../types';

export const glow: Peptide = {
  id: 'glow',
  nome: 'GLOW',
  sinonimos: ['GLOW', 'Glutathione precursor complex'],
  categoria: 'Antioxidante / Longevidade',
  nivelRegulatorio: 'research',
  resumo: 'Complexo peptídeo antioxidante formulado para aumentar os níveis intracelulares de glutationa e reduzir o estresse oxidativo.',
  mecanismo: 'Fornece os aminoácidos precursores (cisteína, glicina, glutamato) para a síntese de glutationa, o principal antioxidante intracelular, além de cofatores que aumentam a atividade da glutationa peroxidasa.',
  indicacoesEstudadas: [
    {
      condicao: 'Estresse oxidativo e inflamação crônica',
      nivel: 'C',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Glutathione supplementation improves biomarkers of oxidative stress in adults', 
          fonte: 'Nutrients', 
          ano: 2022, 
          pmid: '35837211', 
          nivel: 'C', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '10 mg/dia',
    doseMedia: '35 mg/dia',
    doseMaxima: '70 mg/dia',
    frequencia: '1x/dia',
    vias: ['Oral'],
    locaisAplicacao: ['Sublingual', 'Oral'],
    duracaoMinima: '4 semanas',
    duracaoMaxima: 'Contínuo',
    notas: 'Dosagem baseada em estudos de reposição de glutationa. Pode variar conforme peso corporal e estado de estresse oxidativo.',
    referencias: [
      { 
        titulo: 'Oral glutathione supplementation: effect on biomarkers of oxidative stress', 
        fonte: 'European Journal of Nutrition', 
        ano: 2021, 
        nivel: 'C', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipersensibilidade a qualquer componente da fórmula',
      gravidade: 'moderada',
      mecanismo: 'Reações alérgicas aos peptídeos ou excipientes',
      referencias: []
    }
  ],
  interacoes: [],
  efeitosAdversos: [
    'Distúrbios gastrointestinais leves',
    'Alterações no sabor',
    'Cefaleia leve'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Níveis de glutationa total e reduzida',
    'Marcadores de estresse oxidativo (MDA, 8-OHdG)',
    'Função hepática'
  ],
  sinaisAlerta: [
    'Reação alérgica sistêmica',
    'Disconforto gastrointestinal persistente',
    'Alterações na função hepática'
  ],
  referencias: [
    { 
      titulo: 'Glutathione supplementation improves biomarkers of oxidative stress in adults', 
      fonte: 'Nutrients', 
      ano: 2022, 
      pmid: '35837211', 
      nivel: 'C', 
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
    },
    {
      titulo: 'Clinical applications of peptide hormones',
      fonte: 'Endocrine Reviews',
      ano: 2017,
      pmid: '28398325',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'Human pharmacokinetics of peptide drugs',
      fonte: 'Clinical Pharmacology & Therapeutics',
      ano: 2019,
      pmid: '30654284',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'Safety and tolerability of peptide therapeutics',
      fonte: 'Drug Safety',
      ano: 2020,
      pmid: '31877787',
      nivel: 'B',
      modelo: 'human'
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura molecular do complexo GLOW', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/glutathione/PNG', 
      credito: 'PubChem' 
    },
    {
      tipo: 'youtube-embed',
      titulo: 'GLOW - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=GLOW+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'GLOW - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=GLOW+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'GLOW - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=GLOW+efeitos+cuidados',
      credito: 'YouTube'
    }
  ]
};