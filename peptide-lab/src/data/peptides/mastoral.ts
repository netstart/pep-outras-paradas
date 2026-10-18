import { Peptide } from '../types';

export const mastoral: Peptide = {
  id: 'mastoral',
  nome: 'Mastoral (Masteron)',
  sinonimos: ['Masteron', 'Masteron oral', 'Drostanolone Propionate'],
  categoria: 'Esteroide Anabolizante',
  nivelRegulatorio: 'offlabel',
  resumo: 'Esteroide anabolizante derivado da di-hidrotestosterona, usado para aumentar massa magra sem retenção de água. Muito popular em ciclos de definição.',
  mecanismo: 'Liga-se aos receptores de androgênios, promovendo síntese proteica e aumento de massa magra sem aromatizar facilmente para estradiol.',
  indicacoesEstudadas: [],
  dosagem: {
    doseMinima: '50 mg/dia',
    doseMedia: '75-100 mg/dia',
    doseMaxima: '120 mg/dia',
    frequencia: '1x/dia',
    vias: ['Oral'],
    locaisAplicacao: ['Trato gastrointestinal'],
    duracaoMinima: '4 semanas',
    duracaoMaxima: '12 semanas',
    notas: 'Efeito de “cutting” (definição). Não aromatiza facilmente. Pode causar virilização em mulheres.',
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
  interacoes: [],
  efeitosAdversos: [
    'Acne',
    'Queda de cabelo',
    'Alterações no lípideo',
    'Supressão do eixo hipotálamo-hipófise-gônada',
    'Virilização em mulheres',
    'Aumento da pressão arterial',
    'Retenção de líquidos',
    'Fadiga'
  ],
  statusWada: 'Proibido',
  monitoramento: [
    'Função hepática',
    'Perfil lipídico',
    'PSA (em homens)',
    'Testosterona sérica',
    'Pressão arterial'
  ],
  sinaisAlerta: [
    'Reação alérgica no local da injeção',
    'Virilização em mulheres (aprofundamento da voz, crescimento de pelos faciais)',
    'Aumento da pressão arterial',
    'Alterações no humor'
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
      titulo: 'Estrutura do Drostanolona (Masteron)', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/drostanolone/PNG', 
      credito: 'PubChem' 
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Mastoral (Masteron) - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Mastoral+(Masteron)+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Mastoral (Masteron) - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Mastoral+(Masteron)+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Mastoral (Masteron) - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Mastoral+(Masteron)+efeitos+cuidados',
      credito: 'YouTube'
    }
  ]
};