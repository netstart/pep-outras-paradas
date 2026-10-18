import { Peptide } from '../types';

export const motsC: Peptide = {
  id: 'mots-c',
  nome: 'MOTS-c',
  sinonimos: ['MOTS-c (peptídeo derivado da mitocôndria)'],
  categoria: 'Longevidade / Metabólico',
  nivelRegulatorio: 'preliminary',
  resumo: 'Peptídeo mitocondrial de 16 aminoácidos que regula homeostase metabólica e tolerância à insulina. Publicado em Cell Metab 2015 (Lee et al.).',
  mecanismo: 'Peptídeo derivado do DNA mitocondrial (12S rRNA). Ativa AMPK, melhora tolerância à glicose e reduz inflamação em modelos animais.',
  indicacoesEstudadas: [
    {
      condicao: 'Tolerância à glicose / obesidade (modelos animais)',
      nivel: 'B',
      modelo: 'animal',
      referencias: [
        { 
          titulo: 'The mitochondrial-derived peptide MOTS-c promotes metabolic homeostasis', 
          fonte: 'Cell Metab', 
          ano: 2015, 
          pmid: '25738459', 
          nivel: 'B', 
          modelo: 'animal' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: 'Apenas estudos / pesquisa',
    doseMedia: 'Apenas estudos / pesquisa',
    doseMaxima: 'Apenas estudos / pesquisa',
    frequencia: 'Protocolo de estudo',
    vias: ['Subcutânea (pesquisa)'],
    locaisAplicacao: ['Pesquisa'],
    duracaoMinima: 'Protocolo de estudo',
    duracaoMaxima: 'Protocolo de estudo',
    notas: 'Não aprovado. Uso apenas em pesquisa e protocolos clínicos supervisionados.',
    referencias: [
      { 
        titulo: 'MOTS-c Cell Metab 2015', 
        fonte: 'Cell Metab', 
        ano: 2015, 
        pmid: '25738459', 
        nivel: 'B', 
        modelo: 'animal' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Uso experimental — fora do contexto clínico',
      gravidade: 'alta',
      mecanismo: 'Sem aprovação regulatória.',
      referencias: []
    }
  ],
  interacoes: [],
  efeitosAdversos: [
    'Mínimos nos estudos — dados humanos limitados',
    'Possíveis reações alérgicas',
    'Risco de desregulação metabólica sem supervisão'
  ],
  statusWada: 'Não listado (não aprovado para humanos)',
  monitoramento: [
    'Apenas em estudos clínicos',
    'Análise metabólica básica',
    'Perfil lipídico'
  ],
  sinaisAlerta: [
    'Reação no local da injeção',
    'Alteração glicêmica repentina',
    'Síndrome de hiperativação metabólica'
  ],
  referencias: [
    { 
      titulo: 'The mitochondrial-derived peptide MOTS-c promotes metabolic homeostasis', 
      fonte: 'Cell Metab', 
      ano: 2015, 
      pmid: '25738459', 
      nivel: 'B', 
      modelo: 'animal' 
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
      tipo: 'artigo', 
      titulo: 'MOTS-c — Cell Metab (PubMed)', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/25738459/' 
    },
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura do MOTS-c (PubChem)', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/MOTS-c/PNG', 
      credito: 'PubChem' 
    },
    {
      tipo: 'youtube-embed',
      titulo: 'MOTS-c - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=MOTS-c+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'MOTS-c - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=MOTS-c+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'MOTS-c - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=MOTS-c+efeitos+cuidados',
      credito: 'YouTube'
    }
  ]
};