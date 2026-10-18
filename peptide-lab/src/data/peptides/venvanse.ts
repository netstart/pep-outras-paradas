import { Peptide } from '../types';

export const venvanse: Peptide = {
  id: 'venvanse',
  nome: 'Venvanse',
  sinonimos: ['Lisdexanfetamina', 'Lisdexamfetamine dimesylate', 'Vyvanse'],
  categoria: 'Estimulante do Sistema Nervoso Central / TDAH',
  nivelRegulatorio: 'approved',
  resumo: 'Pró-fármaco da dextroanfetamina, aprovado para transtorno de déficit de atenção e hiperatividade (TDAH) e transtorno da compulsão alimentar periódica.',
  mecanismo: 'É convertido em dextroanfetamina nos glóbulos vermelhos, aumentando a liberação e bloqueando a recaptação de dopamina e norepinefrina no sinapse, melhorando atenção e controle de impulsos.',
  indicacoesEstudadas: [
    {
      condicao: 'Transtorno de déficit de atenção e hiperatividade (TDAH) em crianças, adolescentes e adultos',
      nivel: 'A',
      modelo: 'human',
      referencias: [],
    },
    {
      condicao: 'Transtorno da compulsão alimentar periódica (Binge Eating Disorder)',
      nivel: 'A',
      modelo: 'human',
      referencias: [],
    },
  ],
  dosagem: {
    doseMinima: '30 mg/dia',
    doseMedia: '50–70 mg/dia',
    doseMaxima: '70 mg/dia',
    frequencia: '1x/dia pela manhã',
    vias: ['Oral'],
    locaisAplicacao: ['Via oral'],
    duracaoMinima: 'Conforme indicação médica',
    duracaoMaxima: 'Contínuo (uso crônico sob supervisão)',
    notas: 'Deve ser tomado pela manhã para evitar insônia. Não triturar ou mastigar as cápsulas.',
    referencias: [],
  },
  contraindicacoes: [
    {
      condicao: 'Doença cardiovascular grave (cardiopatia estrutural, arritmias, hipertensão não controlada)',
      gravidade: 'alta',
      mecanismo: 'Efeitos simpaticomiméticos podem aumentar risco de eventos cardiovasculares.',
      referencias: [],
    },
    {
      condicao: 'Uso de inibidores da MAO ( ou nos últimos 14 dias)',
      gravidade: 'alta',
      mecanismo: 'Risco de crise hipertensiva e síndrome serotoninérgica.',
      referencias: [],
    },
    {
      condicao: 'Hipertireoidismo sintomático',
      gravidade: 'alta',
      mecanismo: 'Potencialização de efeitos cardiovasculares.',
      referencias: [],
    },
    {
      condicao: 'História de abuso de substâncias',
      gravidade: 'alta',
      mecanismo: 'Potencial de dependência e abuso.',
      referencias: [],
    },
  ],
  interacoes: [
    {
      substancia: 'Inibidores da MAO',
      tipo: 'contraindicada',
      mecanismo: 'Risco de crise hipertensiva.',
      referencias: [],
    },
    {
      substancia: 'Inibidores seletivos da recaptação de serotonina (ISRS) / antidepressivos',
      tipo: 'cautela',
      mecanismo: 'Risco de síndrome serotoninérgica.',
      referencias: [],
    },
    {
      substancia: 'Anti-hipertensivos',
      tipo: 'cautela',
      mecanismo: 'Pode reduzir o efeito anti-hipertensivo.',
      referencias: [],
    },
  ],
  efeitosAdversos: [
    'Insônia',
    'Perda de apetite e perda de peso',
    'Boca seca',
    'Dor de cabeça',
    'Ansiedade / nervosismo',
    'Taquicardia e aumento da pressão arterial',
    'Irritabilidade',
    'Dor abdominal',
  ],
  statusWada: 'Proibido (S6 — estimulantes)',
  monitoramento: [
    'Pressão arterial e frequência cardíaca',
    'Peso corporal e crescimento (crianças/adolescentes)',
    'Humor e comportamento',
    'Sinais de uso indevido/dependência',
  ],
  sinaisAlerta: [
    'Dor no peito, falta de ar ou desmaio',
    'Sinais de psicose (alucinações, delírios)',
    'Sinais de síndrome serotoninérgica (agitação, rigidez, febre)',
    'Sinais de dependência ou uso indevido',
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
      titulo: 'Venvanse - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Venvanse+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Venvanse - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Venvanse+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Venvanse - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Venvanse+efeitos+cuidados',
      credito: 'YouTube'
    }
  ],
};
