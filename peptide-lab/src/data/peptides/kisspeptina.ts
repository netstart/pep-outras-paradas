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
  referencias: [],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [],
};
