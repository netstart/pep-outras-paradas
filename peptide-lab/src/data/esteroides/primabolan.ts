import { Peptide } from '../types';

export const primabolan: Peptide = {
  id: 'primabolan',
  nome: 'Primobolan',
  sinonimos: ['Metenolone', 'Primobolan'],
  categoria: 'Esteroide Anabolizante',
  nivelRegulatorio: 'offlabel',
  resumo: 'Esteroide anabolizante de ação moderada, favorecendo ganho de massa magra magra e retenção mínima de água, ideal para ciclos de corte.',
  mecanismo: 'Liga-se aos receptores de androgênios, promovendo síntese protéica com baixa aromatização.',
  indicacoesEstudadas: [
    {
      condicao: 'Ciclos de cutting',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        {
          titulo: 'Metenolone: a review of its anabolic effects',
          fonte: 'International Journal of Sports Medicine',
          ano: 2012,
          pmid: '25913128',
          nivel: 'A',
          modelo: 'human'
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '50 mg/semana',
    doseMedia: '100 mg/semana',
    doseMaxima: '200 mg/semana',
    frequencia: '1x/semana',
    vias: ['Intramuscular'],
    locaisAplicacao: ['Glúteo'],
    duracaoMinima: '8 semanas',
    duracaoMaxima: '16 semanas',
    notas: 'Doses mais baixas são bem toleradas; uso prolongado pode causar supressão.',
    referencias: []
  },
  contraindicacoes: [
    {
      condicao: 'Doença hepática grave',
      gravidade: 'moderada',
      mecanismo: 'Embora seja injetável, metabolismo hepático ainda ocorre.',
      referencias: []
    },
    {
      condicao: 'Hipersensibilidade ao metenolone',
      gravidade: 'alta',
      mecanismo: 'Reação alérgica.',
      referencias: []
    }
  ],
  interacoes: [
    {
      substancia: 'Outros esteroides anabolizantes',
      tipo: 'cautela',
      mecanismo: 'Potencial sinergia ou competição de receptores.',
      referencias: []
    }
  ],
  efeitosAdversos: [
    'Acne',
    'Queda de cabelo',
    'Alterações no colesterol',
    'Supressão do eixo gonadal',
    'Reações locais no local de injeção',
    'Alterações de humor'
  ],
  statusWada: 'Proibido',
  monitoramento: [
    'Perfil lipídico',
    'Testosterona sérica',
    'LH/FSH',
    'Hemograma',
    'Função hepática'
  ],
  sinaisAlerta: [
    'Dor no local de injeção',
    'Reações alérgicas',
    'Icterícia',
    'Sinais de virilização',
    'Alterações de humor severas'
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
    }
  ],
  revisadoEm: '2026-10 (placeholder)',
  revisadoPor: 'Equipe editorial — dados fictícios para demonstração',
  midias: [
    {
      tipo: 'youtube-embed',
      titulo: 'Primobolan - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Primobolan+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Primobolan - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Primobolan+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Primobolan - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Primobolan+efeitos+cuidados',
      credito: 'YouTube'
    }
  ]
};
