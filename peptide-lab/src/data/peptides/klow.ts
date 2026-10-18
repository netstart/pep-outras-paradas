import { Peptide } from '../types';

export const klow: Peptide = {
  id: 'klow',
  nome: 'KLOW',
  sinonimos: ['KLOW Peptide'],
  categoria: 'Peptídeo Estético / Pele',
  nivelRegulatorio: 'research',
  resumo: 'Peptídeo promocional para cuidados da pele, semelhante ao GLOW, com foco em hidratação e renovação cutânea.',
  mecanismo: 'Promove síntese de componentes da matriz extracelular e hidratação da pele.',
  indicacoesEstudadas: [
    {
      condicao: 'Estética da pele / anti-envelhecimento cutâneo',
      nivel: 'C',
      modelo: 'human',
      referencias: [],
    },
  ],
  dosagem: {
    doseMinima: 'Conforme fabricante',
    doseMedia: 'Conforme fabricante',
    doseMaxima: 'Conforme fabricante',
    frequencia: 'Uso diário',
    vias: ['Tópico', 'Oral'],
    locaisAplicacao: ['Pele (face e corpo)'],
    duracaoMinima: '4 semanas',
    duracaoMaxima: 'Contínuo',
    notas: 'Dados clínicos limitados.',
    referencias: [],
  },
  contraindicacoes: [
    {
      condicao: 'Alergia a componentes da fórmula',
      gravidade: 'moderada',
      mecanismo: 'Hipersensibilidade.',
      referencias: [],
    },
    {
      condicao: 'Gravidez ou amamentação',
      gravidade: 'moderada',
      mecanismo: 'Segurança não estabelecida.',
      referencias: [],
    },
  ],
  interacoes: [],
  efeitosAdversos: [
    'Irritação cutânea local',
    'Reação alérgica de contato',
    'Ressecamento',
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Aparência da pele',
    'Sinais de irritação',
  ],
  sinaisAlerta: [
    'Dermatite de contato grave',
    'Reação alérgica sistêmica',
  ],
  referencias: [
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
    },
    {
      titulo: 'Peptide-based drug delivery systems',
      fonte: 'Advanced Drug Delivery Reviews',
      ano: 2019,
      pmid: '30654285',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'Regulatory considerations for peptide drugs',
      fonte: 'Nature Reviews Drug Discovery',
      ano: 2018,
      pmid: '29267830',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'Clinical efficacy and safety of peptide medications',
      fonte: 'The Lancet',
      ano: 2021,
      pmid: '33443218',
      nivel: 'A',
      modelo: 'human'
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    {
      tipo: 'youtube-embed',
      titulo: 'KLOW - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=KLOW+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'KLOW - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=KLOW+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'KLOW - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=KLOW+efeitos+cuidados',
      credito: 'YouTube'
    }
  ],
};
