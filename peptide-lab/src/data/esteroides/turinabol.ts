import { Peptide } from '../types';

export const turinabol: Peptide = {
  id: 'turinabol',
  nome: 'Turinabol',
  sinonimos: ['4-Chlorodehydromethyltestosterone', 'Oral Turinabol', 'Tbol'],
  categoria: 'Esteroide Anabolizante',
  nivelRegulatorio: 'offlabel',
  resumo: 'Esteroide anabolizante androgênico sintético, derivado da testosterona, utilizado para aumento de massa muscular e desempenho atlético.',
  mecanismo: 'Liga-se aos receptores de androgênios, promovendo síntese protéica e retenção de nitrogênio.',
  indicacoesEstudadas: [],
  dosagem: {
    doseMinima: '10 mg/dia',
    doseMedia: '20-40 mg/dia',
    doseMaxima: '80 mg/dia',
    frequencia: '1x/dia',
    vias: ['Oral'],
    locaisAplicacao: ['Trato gastrointestinal'],
    duracaoMinima: '6 semanas',
    duracaoMaxima: '8 semanas',
    notas: 'Uso não médico; doses variam conforme objetivo e experiência.',
    referencias: []
  },
  contraindicacoes: [
    {
      condicao: 'Gravidez ou amamentação',
      gravidade: 'alta',
      mecanismo: 'Virilização fetal e riscos maternos.',
      referencias: []
    },
    {
      condicao: 'Câncer de próstata ou mama',
      gravidade: 'alta',
      mecanismo: 'Estimulação de tecidos sensíveis a androgênios.',
      referencias: []
    }
  ],
  interacoes: [
    {
      substancia: 'Anticoagulantes',
      tipo: 'cautela',
      mecanismo: 'Potencialização do efeito anticoagulante.',
      referencias: []
    }
  ],
  efeitosAdversos: [
    'Acne',
    'Queda de cabelo',
    'Alterações no lípideo',
    'Supressão do eixo hipotálamo-hipófise-gônada',
    'Toxicidade hepática',
    'Virilização em mulheres'
  ],
  statusWada: 'Proibido',
  monitoramento: [
    'Função hepática (AST, ALT, bilirrubina)',
    'Perfil lipídico',
    'Contagem completo de sangue',
    'PSA (em homens)',
    'Testosterona sérica'
  ],
  sinaisAlerta: [
    'Icterícia ou urina escura',
    'Dor abdominal intensa',
    'Sangramento inexplicável',
    'Sinais de virilização em mulheres (aprofundamento da voz, crescimento de pelos faciais)',
    'Edema ou ganho de peso rápido'
  ],
  referencias: [],
  revisadoEm: '2026-10 (placeholder)',
  revisadoPor: 'Equipe editorial — dados fictícios para demonstração',
  midias: []
};
