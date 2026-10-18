import { Peptide } from '../types';

export const nandrobolin: Peptide = {
  id: 'nandrobolin',
  nome: 'Nandrobolin (Deca)',
  sinonimos: ['Nandrobolin', 'Nandrolona', 'Deca-Durabolin', 'Deca'],
  categoria: 'Esteroide Anabolizante',
  nivelRegulatorio: 'offlabel',
  resumo: 'Nandrolona (19-nortestosterona) é um dos esteroides anabolizantes mais populares e utilizados para ganho de massa muscular e força. Conhecida por efeitos relativamente suaves comparado a outros.',
  mecanismo: 'Liga-se aos receptores de androgênios, mas com muito menos atividade androgênica que a testosterona. Promove síntese proteica, retenção de nitrogênio e produção de eritropoietina. Também melhora a síntese de colágeno.',
  indicacoesEstudadas: [],
  dosagem: {
    doseMinima: '200 mg/semana',
    doseMedia: '300-400 mg/semana',
    doseMaxima: '600 mg/semana',
    frequencia: '1x/semana',
    vias: ['Intramuscular'],
    locaisAplicacao: ['Glúteos', 'Deltoides', 'Coxas'],
    duracaoMinima: '8 semanas',
    duracaoMaxima: '16 semanas',
    notas: 'Consideravelmente menos androgenica que a testosterona. Efeitos de retenção de água são menores que outros esteroides. Risco de supressão significativa.',
    referencias: []
  },
  contraindicacoes: [
    {
      condicao: 'Gravidez ou amamentação',
      gravidade: 'alta',
      mecanismo: 'Risco de virilização fetal e riscos maternos.',
      referencias: []
    },
    {
      condicao: 'Câncer de próstata ou mama',
      gravidade: 'alta',
      mecanismo: 'Estimulação de tecidos sensíveis a androgênios.',
      referencias: []
    },
    {
      condicao: 'Doença renal',
      gravidade: 'moderada',
      mecanismo: 'Nandrolona pode piorar a função renal em doses altas.',
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
    'Retenção de líquidos',
    'Ginecomastia',
    'Aumento de pressão arterial',
    'Acne',
    'Queda de cabelo',
    'Alterações no perfil lipídico',
    'Supressão do eixo hipotálamo-hipófise-gônada',
    'Virilização em mulheres',
    'Agressividade',
    'Fadiga',
    'Pechincha nocturna'
  ],
  statusWada: 'Proibido',
  monitoramento: [
    'Função hepática (AST, ALT, bilirrubina)',
    'Perfil lipídico',
    'Contagem completo de sangue',
    'PSA (em homens)',
    'Testosterona sérica',
    'Estradiol',
    'Hemoglobina e hematócrito',
    'Pressão arterial'
  ],
  sinaisAlerta: [
    'Icterícia ou urina escura',
    'Dor abdominal intensa',
    'Sangramento inexplicável',
    'Sinais de virilização em mulheres',
    'Edema ou ganho de peso rápido',
    'Agressividade extrema'
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
      titulo: 'Estrutura da Nandrolona (19-nortestosterona)', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/nandrolone/PNG', 
      credito: 'PubChem' 
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Nandrobolin (Deca) - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Nandrobolin+(Deca)+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Nandrobolin (Deca) - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Nandrobolin+(Deca)+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Nandrobolin (Deca) - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Nandrobolin+(Deca)+efeitos+cuidados',
      credito: 'YouTube'
    }
  ]
};