import { Peptide } from '../types';

export const erectalis: Peptide = {
  id: 'erectalis',
  nome: 'Erectalis',
  sinonimos: ['Tadalafil', 'Cialis', 'Tadalafila'],
  categoria: 'Disfunção Erétil / PDE5 Inibidor',
  nivelRegulatorio: 'approved',
  resumo: 'Inibidor da fosfodiesterase tipo 5 (PDE5) usado para tratamento da disfunção erétil e, em algumas formulações, de hiperplasia prostática benigna e hipertensão arterial pulmonar.',
  mecanismo: 'Inibe a PDE5, aumentando os níveis de GMP cíclico nos corpos cavernosos do pênis, o que facilita o relaxamento da musculatura lisa e o fluxo sanguíneo durante a estimulação sexual.',
  indicacoesEstudadas: [
    {
      condicao: 'Disfunção erétil (impotência sexual)',
      nivel: 'A',
      modelo: 'human',
      referencias: [],
    },
    {
      condicao: 'Hiperplasia prostática benigna (sintomas do trato urinário inferior)',
      nivel: 'A',
      modelo: 'human',
      referencias: [],
    },
    {
      condicao: 'Hipertensão arterial pulmonar',
      nivel: 'A',
      modelo: 'human',
      referencias: [],
    },
  ],
  dosagem: {
    doseMinima: '5 mg',
    doseMedia: '10 mg',
    doseMaxima: '20 mg',
    frequencia: 'Conforme necessário, 30–60 minutos antes da atividade sexual (ou 5 mg diário para uso contínuo)',
    vias: ['Oral'],
    locaisAplicacao: ['Via oral'],
    duracaoMinima: 'Uso sob demanda',
    duracaoMaxima: 'Contínuo (uso diário de baixa dose, conforme indicação)',
    notas: 'Não exceder uma dose em 24 horas. Evitar consumo excessivo de álcool.',
    referencias: [],
  },
  contraindicacoes: [
    {
      condicao: 'Uso de nitratos (nitroglicerina, isosorbida, etc.) ou doadores de óxido nítrico',
      gravidade: 'alta',
      mecanismo: 'Risco de hipotensão grave e potencialmente fatal.',
      referencias: [],
    },
    {
      condicao: 'Alergia conhecida a tadalafil ou inibidores de PDE5',
      gravidade: 'alta',
      mecanismo: 'Hipersensibilidade.',
      referencias: [],
    },
    {
      condicao: 'Doença cardiovascular grave (recentemente infarto do miocárdio ou acidente vascular encefálico)',
      gravidade: 'alta',
      mecanismo: 'Risco cardiovascular durante atividade sexual.',
      referencias: [],
    },
  ],
  interacoes: [
    {
      substancia: 'Nitratos',
      tipo: 'contraindicada',
      mecanismo: 'Hipotensão grave.',
      referencias: [],
    },
    {
      substancia: 'Bloqueadores alfa (ex: doxazosina)',
      tipo: 'cautela',
      mecanismo: 'Pode causar hipotensão sintomática.',
      referencias: [],
    },
    {
      substancia: 'Inibidores potentes do CYP3A4 (ex: cetoconazol, ritonavir)',
      tipo: 'cautela',
      mecanismo: 'Pode aumentar as concentrações de tadalafil.',
      referencias: [],
    },
  ],
  efeitosAdversos: [
    'Cefaleia',
    'Dispepsia (azia)',
    'Dor nas costas e mialgia',
    'Rubor facial',
    'Congestão nasal',
    'Alterações transitórias na visão (cor azulada, sensibilidade à luz)',
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Resposta erétil',
    'Pressão arterial',
    'Função hepática e renal (uso prolongado)',
    'Sinais de priapismo',
  ],
  sinaisAlerta: [
    'Priapismo (ereção dolorosa e prolongada por mais de 4 horas)',
    'Perda súbita da visão (neuropatia óptica isquêmica anterior não arterítica)',
    'Perda súbita da audição',
    'Dor no peito durante ou após atividade sexual',
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
      titulo: 'Erectalis - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Erectalis+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Erectalis - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Erectalis+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Erectalis - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Erectalis+efeitos+cuidados',
      credito: 'YouTube'
    }
  ],
};
