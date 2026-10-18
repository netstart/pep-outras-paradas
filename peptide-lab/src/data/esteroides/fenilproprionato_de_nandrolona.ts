import { Peptide } from '../types';

export const fenilproprionato_de_nandrolona: Peptide = {
  id: 'fenilproprionato_de_nandrolona',
  nome: 'Fenilproprionato de Nandrolona',
  sinonimos: ['Nandrolone Phenylpropionate', 'NPP', 'Durabolin'],
  categoria: 'Esteroide Anabolizante',
  nivelRegulatorio: 'offlabel',
  resumo: 'Éster de nandrolona de ação curta (meia-vida de aproximadamente 4,5 dias), usado para ganho de massa magra e alívio articular, com menor retenção hídrica que o decanoato.',
  mecanismo: 'Liga-se aos receptores de androgênios, promovendo síntese proteica, retenção de nitrogênio, estimulação da colágeno e aumento da densidade mineral óssea.',
  indicacoesEstudadas: [
    {
      condicao: 'Anemia de falange óssea / osteoporose',
      nivel: 'C',
      modelo: 'human',
      referencias: [],
    },
    {
      condicao: 'Cachexia e perda de massa magra',
      nivel: 'C',
      modelo: 'human',
      referencias: [],
    },
  ],
  dosagem: {
    doseMinima: '50 mg/2 dias',
    doseMedia: '100 mg/dia ou 200 mg/semana',
    doseMaxima: '400 mg/semana',
    frequencia: '1x/dia ou 1x/dia sim outro não',
    vias: ['Intramuscular'],
    locaisAplicacao: ['Glúteo', 'Deltóide', 'Coxa'],
    duracaoMinima: '6 semanas',
    duracaoMaxima: '12 semanas',
    notas: 'Ação mais curta que o decanoato de nandrolona, exigindo aplicações mais frequentes.',
    referencias: [],
  },
  contraindicacoes: [
    {
      condicao: 'Câncer de próstata ou de mama',
      gravidade: 'alta',
      mecanismo: 'Estimulação de tecidos hormono-sensíveis.',
      referencias: [],
    },
    {
      condicao: 'Gravidez ou amamentação',
      gravidade: 'alta',
      mecanismo: 'Virilização fetal e potenciais efeitos teratogênicos.',
      referencias: [],
    },
  ],
  interacoes: [
    {
      substancia: 'Anticoagulantes',
      tipo: 'cautela',
      mecanismo: 'Potencial aumento do efeito anticoagulante.',
      referencias: [],
    },
    {
      substancia: 'Insulina ou hipoglicemiantes orais',
      tipo: 'cautela',
      mecanismo: 'Pode alterar a sensibilidade à insulina.',
      referencias: [],
    },
  ],
  efeitosAdversos: [
    'Supressão do eixo gonadal (LH/FSH/testosterona endógena)',
    'Retenção de líquidos (leve a moderada)',
    'Ginecomastia (progestágena)',
    'Acne',
    'Queda de cabelo (predisposição genética)',
    'Alterações no perfil lipídico',
    'Disfunção erétil pós-ciclo (supressão prolactínica)',
  ],
  statusWada: 'Proibido',
  monitoramento: [
    'Prolactina sérica',
    'Testosterona total e livre',
    'LH / FSH',
    'Perfil lipídico',
    'Função hepática',
    'Hematócrito',
  ],
  sinaisAlerta: [
    'Ginecomastia (nódulo mamário sensível)',
    'Dor ou inchaço nas mamas',
    'Disfunção erétil persistente após o ciclo',
    'Icterícia',
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
      tipo: 'youtube-embed',
      titulo: 'Fenilproprionato de Nandrolona - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Fenilproprionato+de+Nandrolona+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Fenilproprionato de Nandrolona - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Fenilproprionato+de+Nandrolona+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Fenilproprionato de Nandrolona - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Fenilproprionato+de+Nandrolona+efeitos+cuidados',
      credito: 'YouTube'
    }
  ],
};
