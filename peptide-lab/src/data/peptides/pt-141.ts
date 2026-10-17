import { Peptide } from '../types';

export const pt141: Peptide = {
  id: 'pt-141',
  nome: 'PT-141',
  sinonimos: ['Bremelanotida', 'Bremelanotide', 'PT 141', 'Vyleesi'],
  categoria: 'Peptídeo de Função Sexual',
  nivelRegulatorio: 'approved',
  resumo: 'Análogo do α-MSH aprovado para tratamento da disfunção do desejo sexual hipoativo (HSDD) em mulheres e disfunção erétil em homens (uso off-label/estudos).',
  mecanismo: 'Agonista dos receptores melanocortina (especialmente MC4R) no sistema nervoso central, aumentando o desejo sexual e a excitação sem agir diretamente sobre o sistema vascular.',
  indicacoesEstudadas: [
    {
      condicao: 'Disfunção do desejo sexual hipoativo (HSDD) em mulheres',
      nivel: 'A',
      modelo: 'human',
      referencias: [],
    },
    {
      condicao: 'Disfunção erétil (homens - uso off-label/estudos)',
      nivel: 'B',
      modelo: 'human',
      referencias: [],
    },
  ],
  dosagem: {
    doseMinima: '0,75 mg',
    doseMedia: '1,75 mg',
    doseMaxima: '2 mg',
    frequencia: 'Conforme necessário, cerca de 45 minutos antes da atividade',
    vias: ['Subcutânea', 'Intranasal (aprovado em alguns mercados)'],
    locaisAplicacao: ['Abdome', 'Coxa'],
    duracaoMinima: 'Uso sob demanda',
    duracaoMaxima: 'Não exceder 1 dose em 24 horas',
    notas: 'Aprovado pela FDA (Vyleesi) para HSDD em mulheres na pré-menopausa.',
    referencias: [],
  },
  contraindicacoes: [
    {
      condicao: 'Doença cardiovascular não controlada',
      gravidade: 'alta',
      mecanismo: 'Pode aumentar temporariamente a pressão arterial e a frequência cardíaca.',
      referencias: [],
    },
    {
      condicao: 'Hipertensão não controlada',
      gravidade: 'alta',
      mecanismo: 'Efeito cardiovascular transitório.',
      referencias: [],
    },
    {
      condicao: 'Gravidez ou amamentação',
      gravidade: 'alta',
      mecanismo: 'Segurança não estabelecida.',
      referencias: [],
    },
  ],
  interacoes: [
    {
      substancia: 'Medicamentos antihipertensivos',
      tipo: 'cautela',
      mecanismo: 'Pode interferir no controle da pressão arterial.',
      referencias: [],
    },
  ],
  efeitosAdversos: [
    'Náusea (comum)',
    'Rubor facial',
    'Dor de cabeça',
    'Vômito',
    'Aumento da pressão arterial (transitório)',
    'Reação no local da injeção',
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Pressão arterial',
    'Frequência cardíaca',
    'Náusea e tolerância gastrointestinal',
  ],
  sinaisAlerta: [
    'Aumento persistente da pressão arterial',
    'Reação alérgica grave',
    'Dor no peito',
  ],
  referencias: [],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [],
};
