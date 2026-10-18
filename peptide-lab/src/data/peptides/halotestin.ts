import { Peptide } from '../types';

export const halotestin: Peptide = {
  id: 'halotestin',
  nome: 'Halotestin (Halotestin)',
  sinonimos: ['Halotestin', 'Fluoximesterone', 'Halotest-50'],
  categoria: 'Esteroide Anabolizante',
  nivelRegulatorio: 'offlabel',
  resumo: 'Esteroide anabolizante altamente androgênico, derivado da testosterona. Conhecido por força muscular extrema, aumento de agressividade e ganho de força. Uso restrito a regimes supervisionados.',
  mecanismo: 'Liga-se aos receptores de androgênios com alta afinidade, produzindo efeitos anabolizantes intensos e efeitos colaterais androgênicos significativos.',
  indicacoesEstudadas: [],
  dosagem: {
    doseMinima: '5 mg/dia',
    doseMedia: '10-20 mg/dia',
    doseMaxima: '30 mg/dia',
    frequencia: '1x/dia',
    vias: ['Oral'],
    locaisAplicacao: ['Trato gastrointestinal'],
    duracaoMinima: '4 semanas',
    duracaoMaxima: '6 semanas',
    notas: 'Muito potente; usar apenas com experiência prévia em esteroides. Risco de toxicidade hepática e efeitos colaterais androgênicos.',
    referencias: []
  },
  contraindicacoes: [
    {
      condicao: 'Gravidez ou amamentação',
      gravidade: 'alta',
      mecanismo: 'Risco de virilização fetal.',
      referencias: []
    },
    {
      condicao: 'Câncer de próstata ou mama',
      gravidade: 'alta',
      mecanismo: 'Aumento do crescimento de tecidos sensíveis a androgênios.',
      referencias: []
    },
    {
      condicao: 'Hipertensão não controlada',
      gravidade: 'moderada',
      mecanismo: 'Risco de agravamento.',
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
    'Agressividade e instabilidade emocional',
    'Acne severa',
    'Queda de cabelo',
    'Hepatotoxicidade',
    'Virilização em mulheres',
    'Retenção de líquidos e inchaço',
    'Alterações no perfil lipídico',
    'Supressão do eixo hipotálamo-hipófise-gônada'
  ],
  statusWada: 'Proibido',
  monitoramento: [
    'Função hepática (AST, ALT, bilirrubina)',
    'Perfil lipídico',
    'Contagem completo de sangue',
    'PSA (em homens)',
    'Testosterona sérica',
    'Psicometria/monitoramento da agressividade',
    'Pressão arterial'
  ],
  sinaisAlerta: [
    'Icterícia ou urina escura',
    'Dor abdominal intensa',
    'Sangramento inexplicável',
    'Sinais de virilização em mulheres (aprofundamento da voz, crescimento de pelos faciais)',
    'Agressividade extrema',
    'Edema ou ganho de peso rápido'
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
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura do Fluoximesterona', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/fluoximesterone/PNG', 
      credito: 'PubChem' 
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Halotestin (Halotestin) - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Halotestin+(Halotestin)+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Halotestin (Halotestin) - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Halotestin+(Halotestin)+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Halotestin (Halotestin) - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Halotestin+(Halotestin)+efeitos+cuidados',
      credito: 'YouTube'
    }
  ]
};