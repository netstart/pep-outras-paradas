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
  referencias: [
    {
      titulo: 'Anabolic-androgenic steroids and cardiovascular risk',
      fonte: 'Circulation',
      ano: 2017,
      pmid: '28522573',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'Health consequences of anabolic steroid use',
      fonte: 'Endocrine Reviews',
      ano: 2019,
      pmid: '30657291',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'Anabolic steroid use and liver injury',
      fonte: 'Journal of Hepatology',
      ano: 2020,
      pmid: '31877778',
      nivel: 'B',
      modelo: 'human'
    },
    {
      titulo: 'Psychiatric effects of anabolic-androgenic steroids',
      fonte: 'Psychopharmacology',
      ano: 2018,
      pmid: '29185175',
      nivel: 'B',
      modelo: 'human'
    },
    {
      titulo: 'Anabolic steroids in sports and exercise',
      fonte: 'Sports Medicine',
      ano: 2016,
      pmid: '27236058',
      nivel: 'B',
      modelo: 'human'
    },
    {
      titulo: 'Hormonal effects of anabolic steroid misuse',
      fonte: 'Nature Reviews Endocrinology',
      ano: 2019,
      pmid: '30899172',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'Cardiovascular effects of anabolic steroids',
      fonte: 'European Heart Journal',
      ano: 2021,
      pmid: '33443217',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'Anabolic-androgenic steroid dependence',
      fonte: 'Addiction',
      ano: 2017,
      pmid: '28181742',
      nivel: 'B',
      modelo: 'human'
    },
    {
      titulo: 'Anabolic steroids and liver toxicity',
      fonte: 'Clinical Liver Disease',
      ano: 2019,
      pmid: '31877779',
      nivel: 'B',
      modelo: 'human'
    },
    {
      titulo: 'Doping control and anabolic steroid detection',
      fonte: 'Journal of Analytical Toxicology',
      ano: 2018,
      pmid: '29185176',
      nivel: 'B',
      modelo: 'human'
    }
  ],
  revisadoEm: '2026-10 (placeholder)',
  revisadoPor: 'Equipe editorial — dados fictícios para demonstração',
  midias: [
    {
      tipo: 'youtube-embed',
      titulo: 'Proprionato de Testosterona - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Proprionato+de+Testosterona+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Proprionato de Testosterona - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Proprionato+de+Testosterona+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Proprionato de Testosterona - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Proprionato+de+Testosterona+efeitos+cuidados',
      credito: 'YouTube'
    }
  ]
};
