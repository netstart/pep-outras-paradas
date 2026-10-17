import { Peptide } from '../types';

export const cagrilintide: Peptide = {
  id: 'cagrilintide',
  nome: 'Cagrilintide',
  sinonimos: ['Cagrilintida', 'AM833'],
  categoria: 'Peptídeo Metabólico / Análogo de Amilina',
  nivelRegulatorio: 'research',
  resumo: 'Análogo da amilina de ação prolongada, em desenvolvimento para obesidade e diabetes tipo 2, frequentemente estudado em combinação com semaglutida.',
  mecanismo: 'Ativa os receptores de amilina no tronco encefálico, promovendo saciedade, retardando o esvaziamento gástrico e reduzindo a ingestão de alimentos.',
  indicacoesEstudadas: [
    {
      condicao: 'Obesidade (ensaios clínicos de fase 2/3, frequentemente com semaglutida)',
      nivel: 'B',
      modelo: 'human',
      referencias: [],
    },
    {
      condicao: 'Diabetes tipo 2 (controle glicêmico e redução de peso)',
      nivel: 'B',
      modelo: 'human',
      referencias: [],
    },
  ],
  dosagem: {
    doseMinima: '0,3 mg/semana',
    doseMedia: '1,2–2,4 mg/semana',
    doseMaxima: '3,6 mg/semana',
    frequencia: '1x/semana',
    vias: ['Subcutânea'],
    locaisAplicacao: ['Abdome', 'Coxa', 'Braço'],
    duracaoMinima: '12 semanas',
    duracaoMaxima: 'Contínuo (ensaios clínicos)',
    notas: 'Em desenvolvimento clínico; dosagens baseadas em ensaios de fase 2/3.',
    referencias: [],
  },
  contraindicacoes: [
    {
      condicao: 'Gastroparesia severa',
      gravidade: 'alta',
      mecanismo: 'Retarda o esvaziamento gástrico.',
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
      substancia: 'Insulina ou hipoglicemiantes orais',
      tipo: 'cautela',
      mecanismo: 'Pode aumentar o risco de hipoglicemia.',
      referencias: [],
    },
    {
      substancia: 'Agonistas de GLP-1 (ex: semaglutida)',
      tipo: 'sinergia',
      mecanismo: 'Combinação estudada para redução de peso acentuada.',
      referencias: [],
    },
  ],
  efeitosAdversos: [
    'Náusea',
    'Vômito',
    'Diarreia',
    'Dor abdominal',
    'Redução do apetite',
    'Hipoglicemia (em combinação com insulina ou sulfonilureias)',
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Peso corporal',
    'Hemoglobina glicada (HbA1c)',
    'Glicemia capilar',
    'Função gastrointestinal',
  ],
  sinaisAlerta: [
    'Dor abdominal intensa e persistente (possível pancreatite)',
    'Vômitos persistentes com desidratação',
    'Sinais de reação alérgica grave',
  ],
  referencias: [],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [],
};
