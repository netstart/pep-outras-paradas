import { Peptide } from '../types';

export const boldenona: Peptide = {
  id: 'boldenona',
  nome: 'Boldenona',
  sinonimos: ['Boldenona', 'Boldenone', 'Equipoise', 'EQ', 'Boldebol'],
  categoria: 'Esteroide Anabolizante',
  nivelRegulatorio: 'offlabel',
  resumo: 'Esteroide anabolizante derivado da testosterona, popular no mundo do bodybuilding e performance. Conhecido por efeitos suaves e aumento de massa muscular magra.',
  mecanismo: 'Liga-se aos receptores de androgênios, promovendo síntese proteica e retenção de nitrogênio. Também aumenta a produção de eritropoietina, melhorando a oxigenação muscular.',
  indicacoesEstudadas: [],
  dosagem: {
    doseMinima: '200 mg/semana',
    doseMedia: '300-500 mg/semana',
    doseMaxima: '600 mg/semana',
    frequencia: '2 vezes/semana',
    vias: ['Intramuscular'],
    locaisAplicacao: ['Glúteos', 'Deltoides', 'Coxas'],
    duracaoMinima: '8 semanas',
    duracaoMaxima: '12 semanas',
    notas: 'Uso não médico apenas por protocolos de pesquisa. Risco de virilização e alteração do perfil lipídico.',
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
    'Alterações no lípideo (redução HDL)',
    'Supressão do eixo hipotálamo-hipófise-gônada',
    'Virilização em mulheres',
    'Agressividade (em alguns casos)'
  ],
  statusWada: 'Proibido',
  monitoramento: [
    'Função hepática (AST, ALT, bilirrubina)',
    'Perfil lipídico',
    'Contagem completo de sangue',
    'PSA (em homens)',
    'Testosterona sérica',
    'Hemoglobina e hematócrito'
  ],
  sinaisAlerta: [
    'Icterícia ou urina escura',
    'Dor abdominal intensa',
    'Sangramento inexplicável',
    'Sinais de virilização em mulheres',
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
      titulo: 'Estrutura da Boldenona', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/boldenone/PNG', 
      credito: 'PubChem' 
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Boldenona - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Boldenona+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Boldenona - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Boldenona+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Boldenona - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Boldenona+efeitos+cuidados',
      credito: 'YouTube'
    }
  ]
};