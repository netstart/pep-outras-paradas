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
  referencias: [],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [],
};
