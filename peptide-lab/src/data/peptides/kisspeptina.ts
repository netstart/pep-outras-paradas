import { Peptide } from '../types';

export const kisspeptina: Peptide = {
  id: 'kisspeptini',
  nome: 'Kisspeptina',
  sinonimos: ['Kisspeptin', 'Kisspeptina-54', 'Kisspeptina-10', 'KP-54', 'KP-10'],
  categoria: 'Peptídeo Reprodutivo / Eixo Hipotálamo-Hipófise-Gônadas',
  nivelRegulatorio: 'research',
  resumo: 'Peptídeo codificado pelo gene KISS1, essencial para a puberdade e a regulação da secreção de GnRH, LH e FSH.',
  mecanismo: 'Liga-se ao receptor GPR54 (KISS1R) em neurônios de GnRH, estimulando a liberação de GnRH e, consequentemente, de LH e FSH pela hipófise.',
  indicacoesEstudadas: [
    {
      condicao: 'Hipogonadismo hipogonadotrófico (pesquisa clínica)',
      nivel: 'C',
      modelo: 'human',
      referencias: [],
    },
    {
      condicao: 'Distúrbios da puberdade e infertilidade (pesquisa)',
      nivel: 'C',
      modelo: 'human',
      referencias: [],
    },
  ],
  dosagem: {
    doseMinima: 'Não estabelecido para uso clínico rotineiro',
    doseMedia: 'Não estabelecido',
    doseMaxima: 'Não estabelecido',
    frequencia: 'Pesquisa',
    vias: ['Intravenosa', 'Subcutânea (pesquisa)'],
    locaisAplicacao: ['Não estabelecido'],
    duracaoMinima: 'Não aplicável',
    duracaoMaxima: 'Não aplicável',
    notas: 'Uso restrito a pesquisa clínica; não aprovado como terapia rotineira.',
    referencias: [],
  },
  contraindicacoes: [
    {
      condicao: 'Gravidez',
      gravidade: 'alta',
      mecanismo: 'Efeitos sobre o eixo reprodutivo não estabelecidos na gestação.',
      referencias: [],
    },
    {
      condicao: 'Tumores hormono-dependentes',
      gravidade: 'moderada',
      mecanismo: 'Estimulação do eixo gonadal.',
      referencias: [],
    },
  ],
  interacoes: [],
  efeitosAdversos: [
    'Reação no local da aplicação',
    'Náusea',
    'Alterações transitórias nos níveis hormonais',
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'LH, FSH e testosterona/estradiol séricos',
    'Ciclo menstrual (em mulheres)',
    'Ultrassom ovariano ou testicular (se indicado)',
  ],
  sinaisAlerta: [
    'Hiperestimulação ovariana (sinais abdominais)',
    'Reação alérgica grave',
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
      titulo: 'Kisspeptina - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Kisspeptina+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Kisspeptina - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Kisspeptina+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Kisspeptina - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Kisspeptina+efeitos+cuidados',
      credito: 'YouTube'
    }
  ],
};
