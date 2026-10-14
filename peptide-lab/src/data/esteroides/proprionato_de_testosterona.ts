import { Peptide } from '../types';

export const proprionato_de_testosterona: Peptide = {
  id: 'proprionato_de_testosterona',
  nome: 'Proprionato de Testosterona',
  sinonimos: ['Testosterone Propionate', 'Test P'],
  categoria: 'Esteroide Anabolizante',
  nivelRegulatorio: 'offlabel',
  resumo: 'Éster de testosterona de ação rápida, utilizado para aumento de massa muscular e força, com necessidade de aplicação frequente devido à meia-vida curta.',
  mecanismo: 'Liga-se aos receptores de androgênios, promovendo síntese protéica e retenção de nitrogênio, com ação rápida devido ao éster propionato.',
  indicacoesEstudadas: [],
  dosagem: {
    doseMinima: '50 mg/dia',
    doseMedia: '100 mg/dia',
    doseMaxima: '200 mg/dia',
    frequencia: '1x/dia',
    vias: ['Intramuscular'],
    locaisAplicacao: ['Glúteo'],
    duracaoMinima: '6 semanas',
    duracaoMaxima: '12 semanas',
    notas: 'Devido à meia-vida curta (~2 dias), requer aplicação diária ou a cada dois dias.',
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
    'Toxicidade hepática (leve, devido à ação rápida)',
    'Virilização em mulheres',
    'Dor no local de injeção'
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
    'Edema ou ganho de peso rápido',
    'Dor intensa no local de injeção'
  ],
  referencias: [],
  revisadoEm: '2026-10 (placeholder)',
  revisadoPor: 'Equipe editorial — dados fictícios para demonstração',
  midias: []
};
