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
  referencias: [],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [],
};
