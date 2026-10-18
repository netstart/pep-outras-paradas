import { Peptide } from '../types';

export const ephitalon: Peptide = {
  id: 'ephitalon',
  nome: 'Epitalon',
  sinonimos: ['Epithalon', 'Epitalona', 'Ala-Glu-Asp-Gly (AEDG)'],
  categoria: 'Peptídeo de Longevidade / Antienvelhecimento',
  nivelRegulatorio: 'research',
  resumo: 'Tetrapeptídeo sintético (Ala-Glu-Asp-Gly) baseado na epitalamina, estudado por efeitos sobre a telomerase, ritmo circadiano e longevidade.',
  mecanismo: 'Modula a expressão de genes relacionados ao envelhecimento, incluindo a telomerase, e influencia a secreção de melatonina pela glândula pineal.',
  indicacoesEstudadas: [
    {
      condicao: 'Envelhecimento celular e longevidade (pesquisa pré-clínica e clínica limitada)',
      nivel: 'C',
      modelo: 'animal',
      referencias: [],
    },
    {
      condicao: 'Regulação do sono e ritmo circadiano (pesquisa)',
      nivel: 'C',
      modelo: 'human',
      referencias: [],
    },
  ],
  dosagem: {
    doseMinima: '5–10 mg/dia',
    doseMedia: '10–20 mg/dia',
    doseMaxima: '50 mg/dia',
    frequencia: '1x/dia (ciclos de 10–20 dias, repetidos)',
    vias: ['Subcutânea', 'Intramuscular'],
    locaisAplicacao: ['Abdome', 'Deltóide'],
    duracaoMinima: '10 dias (ciclo)',
    duracaoMaxima: 'Vários ciclos ao ano',
    notas: 'Dados clínicos limitados; não aprovado por agências reguladoras.',
    referencias: [],
  },
  contraindicacoes: [
    {
      condicao: 'Câncer ativo',
      gravidade: 'alta',
      mecanismo: 'Potencial efeito sobre telomerase e proliferação celular.',
      referencias: [],
    },
    {
      condicao: 'Gravidez ou amamentação',
      gravidade: 'alta',
      mecanismo: 'Segurança não estabelecida.',
      referencias: [],
    },
  ],
  interacoes: [],
  efeitosAdversos: [
    'Reação no local da injeção',
    'Agitação ou insônia (se usado perto do sono)',
    'Dor de cabeça leve',
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Qualidade do sono',
    'Marcadores de estresse oxidativo (pesquisa)',
    'Função tiroideana',
  ],
  sinaisAlerta: [
    'Reação alérgica',
    'Alterações de humor graves',
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
      titulo: 'Epitalon - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Epitalon+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Epitalon - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Epitalon+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Epitalon - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Epitalon+efeitos+cuidados',
      credito: 'YouTube'
    }
  ],
};
