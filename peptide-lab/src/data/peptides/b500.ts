import { Peptide } from '../types';

export const tb500: Peptide = {
  id: 'tb-500',
  nome: 'TB-500',
  sinonimos: ['Timosina Beta-4 fragmento 17–23', 'Ac-SDKP', 'Tβ4 fragmento'],
  categoria: 'Peptídeo de Recuperação / Regeneração',
  nivelRegulatorio: 'research',
  resumo: 'Fragmento sintético da timosina beta-4 (Tβ4), promovido para reparo tecidual, redução de inflamação e recuperação de lesões musculares, tendinosas e cutâneas.',
  mecanismo: 'Regula a polimerização de actina, promove migração celular, angiogênese e reduz citocinas inflamatórias em tecidos lesados, facilitando a cicatrização.',
  indicacoesEstudadas: [
    {
      condicao: 'Lesões musculares, tendinosas e ligamentares (uso off-label/pesquisa)',
      nivel: 'C',
      modelo: 'animal',
      referencias: [],
    },
    {
      condicao: 'Cicatrização de feridas e úlceras cutâneas (pesquisa pré-clínica)',
      nivel: 'C',
      modelo: 'animal',
      referencias: [],
    },
  ],
  dosagem: {
    doseMinima: '2–5 mg/semana',
    doseMedia: '5–10 mg/semana',
    doseMaxima: '20 mg/semana',
    frequencia: '2–3x/semana',
    vias: ['Subcutânea', 'Intramuscular'],
    locaisAplicacao: ['Abdome', 'Próximo à lesão', 'Coxa'],
    duracaoMinima: '4 semanas',
    duracaoMaxima: '8–12 semanas',
    notas: 'Não aprovado para uso humano; dados baseados em pesquisa pré-clínica e relatos de uso off-label.',
    referencias: [],
  },
  contraindicacoes: [
    {
      condicao: 'Câncer ativo ou suspeita de neoplasia',
      gravidade: 'alta',
      mecanismo: 'Pode promover angiogênese e crescimento tumoral.',
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
    'Reação no local da injeção (dor, vermelhidão)',
    'Cansaço ou letargia',
    'Dor de cabeça',
    'Tontura',
  ],
  statusWada: 'Proibido (S0 — substâncias não aprovadas para uso humano)',
  monitoramento: [
    'Evolução da lesão',
    'Sinais de inflamação residual',
    'Exames de imagem (se aplicável)',
  ],
  sinaisAlerta: [
    'Crescimento rápido de nódulos ou lesões cutâneas',
    'Reação alérgica grave no local da injeção',
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
      titulo: 'TB-500 - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=TB-500+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'TB-500 - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=TB-500+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'TB-500 - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=TB-500+efeitos+cuidados',
      credito: 'YouTube'
    }
  ],
};
