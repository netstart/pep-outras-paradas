import { Peptide } from '../types';

export const enantato_de_testosterona: Peptide = {
  id: 'enantato_de_testosterona',
  nome: 'Enantato de Testosterona',
  sinonimos: ['Testosterone Enanthate', 'Test E'],
  categoria: 'Esteroide Anabolizante',
  nivelRegulatorio: 'offlabel',
  resumo: 'Forma esterificada da testosterona, com ação prolongada, utilizada para terapia de substituição hormonal e aumento de massa muscular.',
  mecanismo: 'Liga-se ao receptor de androgênios, regulando expressão génica para desenvolvimento de características masculinas e síntese protéica.',
  indicacoesEstudadas: [],
  dosagem: {
    doseMinima: '250 mg/semana',
    doseMedia: '500 mg/semana',
    doseMaxima: '1000 mg/semana',
    frequencia: '1x/semana',
    vias: ['Intramuscular'],
    locaisAplicacao: ['Glúteo'],
    duracaoMinima: '6 meses',
    duracaoMaxima: 'Indefinido (TRT)',
    notas: 'Doses variam conforme objetivo, idade e resposta individual. Terapia de substituição usa doses menores.',
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
      condicao: 'Câncer de próstata ou mama não diagnosticado',
      gravidade: 'alta',
      mecanismo: 'Estimulação de tecidos sensíveis a androgênios.',
      referencias: []
    },
    {
      condicao: 'Hiperplasia prostática benigna não tratada',
      gravidade: 'moderada',
      mecanismo: 'Aumento do volume prostático e sintomas urinários.',
      referencias: []
    }
  ],
  interacoes: [
    {
      substancia: 'Anticoagulantes',
      tipo: 'cautela',
      mecanismo: 'Potencialização do efeito anticoagulante.',
      referencias: []
    },
    {
      substancia: 'Insulina ou hipoglicemiantes orais',
      tipo: 'cautela',
      mecanismo: 'Potencial alteração do controle glicêmico.',
      referencias: []
    }
  ],
  efeitosAdversos: [
    'Conversão para estrógenos (ginecomastia, retenção hídrica)',
    'Acne',
    'Queda de cabelo',
    'Alterações no lípideo (elevado LDL, reduzido HDL)',
    'Supressão do eixo hipotálamo-hipófise-gônada',
    'Toxicidade hepática (moderada, principalmente com esterificados orais)',
    'Virilização em mulheres (barbear, voz profunda, crescimento de pelos)',
    'Testosterona supressão endogenous',
    'Ganho de peso',
    'Edema'
  ],
  statusWada: 'Proibido',
  monitoramento: [
    'Função hepática (AST, ALT, bilirrubina)',
    'Perfil lipídico total e fraccionado',
    'Contagem completa de sangue (hemoglobina, hematócrito, plaquetas)',
    'PSA (antígeno prostático específico)',
    'Testosterona sérica e LH/FSH',
    'Hertroematócrito',
    'Estróadiol'
  ],
  sinaisAlerta: [
    'Icterícia ou urina escura',
    'Dor abdominal intensa',
    'Sangramento nasal inexplicável',
    'Sinais de virilização em mulheres',
    'Dolor torácica ou dificuldade respiratória',
    'Edema severo ou gain de peso rápido',
    'Confusão mental ou cefaleia severa'
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
      titulo: 'Enantato de Testosterona - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Enantato+de+Testosterona+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Enantato de Testosterona - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Enantato+de+Testosterona+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Enantato de Testosterona - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Enantato+de+Testosterona+efeitos+cuidados',
      credito: 'YouTube'
    }
  ]
};
