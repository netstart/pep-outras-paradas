import { Peptide } from '../types';

export const alprazolam: Peptide = {
  id: 'alprazolam',
  nome: 'Alprazolam',
  sinonimos: ['Alprazolam', 'Xanax', 'Tranxene'],
  categoria: 'Benzodiazepínico / Ansiedade',
  nivelRegulatorio: 'approved',
  resumo: 'Benzodiazepínico de ação curta a intermediária, aprovado para transtorno de ansiedade generalizada (TAG), transtorno do pânico e ansiedade associada à depressão.',
  mecanismo: 'Potencia a ação inibitória do GABA no receptores GABA_A no sistema nervoso central, produzindo efeitos ansiolíticos, sedativos, relaxantes musculares e anticonvulsivantes.',
  indicacoesEstudadas: [
    {
      condicao: 'Transtorno de ansiedade generalizada (TAG)',
      nivel: 'A',
      modelo: 'human',
      referencias: [],
    },
    {
      condicao: 'Transtorno do pânico (com ou sem agorafobia)',
      nivel: 'A',
      modelo: 'human',
      referencias: [],
    },
    {
      condicao: 'Ansiedade associada a sintomas depressivos',
      nivel: 'B',
      modelo: 'human',
      referencias: [],
    },
  ],
  dosagem: {
    doseMinima: '0,25 mg',
    doseMedia: '0,5–1 mg',
    doseMaxima: '4 mg/dia',
    frequencia: '2–3x/dia',
    vias: ['Oral'],
    locaisAplicacao: ['Via oral'],
    duracaoMinima: 'Conforme indicação médica',
    duracaoMaxima: 'Uso de curto prazo (geralmente até 4–12 semanas)',
    notas: 'Risco de dependência e síndrome de abstinência; não interromper abruptamente após uso prolongado.',
    referencias: [],
  },
  contraindicacoes: [
    {
      condicao: 'Alergia conhecida a alprazolam ou outras benzodiazepínicos',
      gravidade: 'alta',
      mecanismo: 'Hipersensibilidade.',
      referencias: [],
    },
    {
      condicao: 'Miaestenia gravis',
      gravidade: 'alta',
      mecanismo: 'Relaxamento muscular pode agravar fraqueza.',
      referencias: [],
    },
    {
      condicao: 'Síndrome de apneia do sono grave não tratada',
      gravidade: 'alta',
      mecanismo: 'Depressão respiratória.',
      referencias: [],
    },
    {
      condicao: 'Gravidez (especialmente primeiro trimestre)',
      gravidade: 'alta',
      mecanismo: 'Risco de malformações e síndrome de abstinência neonatal.',
      referencias: [],
    },
  ],
  interacoes: [
    {
      substancia: 'Álcool',
      tipo: 'contraindicada',
      mecanismo: 'Depressão aditiva do SNC e depressão respiratória.',
      referencias: [],
    },
    {
      substancia: 'Opioides',
      tipo: 'contraindicada',
      mecanismo: 'Risco de sedação profunda, depressão respiratória e morte.',
      referencias: [],
    },
    {
      substancia: 'Inibidores do CYP3A4 (ex: cetoconazol, itraconazol)',
      tipo: 'cautela',
      mecanismo: 'Pode aumentar significativamente as concentrações de alprazolam.',
      referencias: [],
    },
  ],
  efeitosAdversos: [
    'Sedação e sonolência',
    'Tontura',
    'Dor de cabeça',
    'Boca seca',
    'Alterações de memória e concentração',
    'Dependência física e psicológica',
    'Síndrome de abstinência na interrupção abrupta',
    'Rebound de ansiedade e insônia',
  ],
  statusWada: 'Não proibido (substância controlada)',
  monitoramento: [
    'Nível de ansiedade e sintomas',
    'Sinais de uso indevido ou dependência',
    'Função cognitiva e memória',
    'Sinais de abstinência ao reduzir/interromper',
  ],
  sinaisAlerta: [
    'Sinais de overdose (sonolência profunda, confusão, reflexos diminuídos, coma)',
    'Síndrome de abstinência grave (convulsões, tremores, ansiedade severa)',
    'Reação alérgica grave',
    'Ideação suicida',
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
      titulo: 'Alprazolam - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Alprazolam+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Alprazolam - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Alprazolam+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Alprazolam - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Alprazolam+efeitos+cuidados',
      credito: 'YouTube'
    }
  ],
};
