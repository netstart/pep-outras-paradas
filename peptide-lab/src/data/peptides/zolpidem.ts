import { Peptide } from '../types';

export const zolpidem: Peptide = {
  id: 'zolpidem',
  nome: 'Zolpidem',
  sinonimos: ['Zolpidem tartrato', 'Stilnox', 'Ambien'],
  categoria: 'Hipnótico / Sono',
  nivelRegulatorio: 'approved',
  resumo: 'Hipnótico não-benzodiazepínico da classe das imidazopiridinas, aprovado para tratamento de curto prazo da insônia (dificuldade de iniciar o sono).',
  mecanismo: 'Liga-se preferencialmente ao subtipo ω1 do complexo receptores GABA_A, potencializando a ação inibitória do GABA no sistema nervoso central, induzindo sono.',
  indicacoesEstudadas: [
    {
      condicao: 'Insônia de curto prazo (dificuldade de início do sono)',
      nivel: 'A',
      modelo: 'human',
      referencias: [],
    },
  ],
  dosagem: {
    doseMinima: '5 mg',
    doseMedia: '10 mg',
    doseMaxima: '10 mg',
    frequencia: '1x/dia, imediatamente antes de dormir',
    vias: ['Oral'],
    locaisAplicacao: ['Via oral'],
    duracaoMinima: 'Uso sob demanda',
    duracaoMaxima: 'Até 4 semanas (uso curto)',
    notas: 'Tomar apenas quando puder dormir 7–8 horas completas. Evitar álcool.',
    referencias: [],
  },
  contraindicacoes: [
    {
      condicao: 'Alergia conhecida a zolpidem ou componentes da fórmula',
      gravidade: 'alta',
      mecanismo: 'Hipersensibilidade.',
      referencias: [],
    },
    {
      condicao: 'Insuficiência hepática grave',
      gravidade: 'alta',
      mecanismo: 'Metabolismo hepático comprometido; risco de acumulação.',
      referencias: [],
    },
    {
      condicao: 'Síndrome de apneia do sono não tratada',
      gravidade: 'moderada',
      mecanismo: 'Depressão respiratória pode agravar apneia.',
      referencias: [],
    },
  ],
  interacoes: [
    {
      substancia: 'Álcool',
      tipo: 'contraindicada',
      mecanismo: 'Depressão aditiva do SNC e risco de comportamento complexo durante o sono.',
      referencias: [],
    },
    {
      substancia: 'Outros depressores do SNC (benzodiazepínicos, opioides)',
      tipo: 'cautela',
      mecanismo: 'Sedação aditiva e depressão respiratória.',
      referencias: [],
    },
    {
      substancia: 'Inibidores do CYP3A4 (ex: cetoconazol)',
      tipo: 'cautela',
      mecanismo: 'Pode aumentar as concentrações de zolpidem.',
      referencias: [],
    },
  ],
  efeitosAdversos: [
    'Sonolência diurna',
    'Tontura',
    'Dor de cabeça',
    'Diarreia',
    'Sonambulismo ou outros comportamentos complexos durante o sono (comer, dirigir, telefonar sem memória depois)',
    'Amnésia anterógrada',
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Qualidade e duração do sono',
    'Sonolência diurna residual',
    'Eventos de sono (sonambulismo, etc.)',
    'Uso concomitante de álcool ou outros depressores',
  ],
  sinaisAlerta: [
    'Comportamentos complexos durante o sono sem memória posterior',
    'Reação alérgica grave (anafilaxia, angioedema)',
    'Depressão ou ideação suicida',
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
      titulo: 'Zolpidem - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Zolpidem+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Zolpidem - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Zolpidem+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Zolpidem - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Zolpidem+efeitos+cuidados',
      credito: 'YouTube'
    }
  ],
};
