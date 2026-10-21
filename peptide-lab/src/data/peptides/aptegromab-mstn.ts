import { Peptide } from '../types';

export const aptegromabMstn: Peptide = {
  id: 'aptegromab-mstn',
  nome: 'Aptegromab',
  sinonimos: ['Inibidor de miostatina (MSTN/GDF-8)', 'Anti-miostatina', 'Aptegromab'],
  categoria: 'Peptídeo / Anticorpo terapêutico — Inibidor de Miostatina',
  nivelRegulatorio: 'research',
  resumo: 'Anticorpo monoclonal investigacional que se liga à miostatina (GDF-8), fator de crescimento que limita naturalmente a massa muscular, sendo estudado para condições de perda de massa muscular e atrofia.',
  mecanismo: 'Liga-se à miostatina (GDF-8) e bloqueia sua interação com o receptor ActRIIB, desinibindo vias de crescimento muscular (Akt/mTOR), aumentando massa e força magra.',
  indicacoesEstudadas: [
    {
      condicao: 'Atrofia muscular e perda de massa magra (doença muscular, sarcopenia, caquexia — em investigação clínica)',
      nivel: 'C',
      modelo: 'human',
      referencias: [],
    },
  ],
  dosagem: {
    doseMinima: 'Em estudo clínico',
    doseMedia: 'Em estudo clínico',
    doseMaxima: 'Em estudo clínico',
    frequencia: 'Em estudo clínico',
    vias: ['Subcutânea', 'Endovenosa'],
    locaisAplicacao: ['Via subcutânea', 'Via endovenosa'],
    duracaoMinima: 'Em estudo clínico',
    duracaoMaxima: 'Em estudo clínico',
    notas: 'Em investigação clínica; sem dosagem aprovada para uso humano. Não é um peptídeo tradicional, mas um anticorpo terapêutico.',
    referencias: [],
  },
  contraindicacoes: [
    {
      condicao: 'Hipersensibilidade ao fármaco ou a componentes da formulação',
      gravidade: 'alta',
      mecanismo: 'Risco de reações de hipersensibilidade e anafilaxia.',
      referencias: [],
    },
    {
      condicao: 'Gravidez ou amamentação',
      gravidade: 'alta',
      mecanismo: 'Segurança não estabelecida em gestantes e lactantes.',
      referencias: [],
    },
    {
      condicao: 'Infecção ativa não controlada',
      gravidade: 'moderada',
      mecanismo: 'Modulação imunológica pode afetar resposta à infecção.',
      referencias: [],
    },
  ],
  interacoes: [
    {
      substancia: 'Imunossupressores',
      tipo: 'cautela',
      mecanismo: 'Potencial efeito aditivo na modulação da resposta imune.',
      referencias: [],
    },
    {
      substancia: 'Outros agentes que afetam massa muscular (ex. esteroides anabolizantes)',
      tipo: 'cautela',
      mecanismo: 'Efeito aditivo no crescimento muscular sem dados de segurança combinada.',
      referencias: [],
    },
  ],
  efeitosAdversos: [
    'Reação no local da injeção (dor, vermelhidão, inchaço)',
    'Dor de cabeça',
    'Fadiga',
    'Reações de hipersensibilidade',
    'Infecções do trato respiratório',
    'Elevação de creatinofosfoquinase (CPK)',
  ],
  statusWada: 'Proibido (S0 — substâncias não aprovadas para uso humano)',
  monitoramento: [
    'Massa e força muscular',
    'Função renal e hepática',
    'Imunogenicidade (anticorpos anti-fármaco)',
    'Creatina fosfoquinase (CPK)',
    'Contagem de células sanguíneas',
  ],
  sinaisAlerta: [
    'Reação alérgica grave (anafilaxia)',
    'Infecções recorrentes ou graves',
    'Dor muscular intensa com elevação de CPK',
    'Sinais de reação imunológica grave',
  ],
  referencias: [
    {
      titulo: 'Myostatin (GDF-8) as a negative regulator of skeletal muscle mass',
      fonte: 'Nature Medicine',
      ano: 1997,
      pmid: '9354289',
      nivel: 'A',
      modelo: 'animal'
    },
    {
      titulo: 'Myostatin inhibition and muscle wasting disorders',
      fonte: 'Nature Reviews Drug Discovery',
      ano: 2020,
      pmid: '31877785',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'Therapeutic peptides and biologics: current status and future directions',
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
      titulo: 'Aptegromab - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Aptegromab+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Aptegromab - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Aptegromab+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Aptegromab - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Aptegromab+efeitos+cuidados',
      credito: 'YouTube'
    }
  ],
};
