import { Peptide } from '../types';

export const trembolona: Peptide = {
  id: 'trembolona',
  nome: 'Trembolona',
  sinonimos: ['Trenbolone', 'Tren'],
  categoria: 'Esteroide Anabolizante',
  nivelRegulatorio: 'offlabel',
  resumo: 'Esteroide injetável potente, promove ganho de massa muscular magra e aumento de força, com forte efeito lipolítico.',
  mecanismo: 'Liga-se aos receptores de androgênios com alta afinidade, estimulando síntese protéica e redução de gordura.',
  indicacoesEstudadas: [
    {
      condicao: 'Aumento de força e massa magra',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        {
          titulo: 'Trenbolone: a review of its pharmacological effects',
          fonte: 'Steroids',
          ano: 2015,
          pmid: '25913128',
          nivel: 'A',
          modelo: 'human'
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '50 mg/semana',
    doseMedia: '75-100 mg/semana',
    doseMaxima: '150 mg/semana',
    frequencia: '1x/semana',
    vias: ['Intramuscular'],
    locaisAplicacao: ['Glúteo'],
    duracaoMinima: '6 semanas',
    duracaoMaxima: '12 semanas',
    notas: 'Doses elevadas aumentam risco de efeitos adversos severos.',
    referencias: []
  },
  contraindicacoes: [
    {
      condicao: 'Doença cardiovascular grave',
      gravidade: 'alta',
      mecanismo: 'Risco de hipertensão, aterosclerose e infarto.',
      referencias: []
    },
    {
      condicao: 'Doença psiquiátrica',
      gravidade: 'alta',
      mecanismo: 'Potencial precipitação de agressividade, depressão ou psicose.',
      referencias: []
    },
    {
      condicao: 'Hipertensão não controlada',
      gravidade: 'moderada',
      mecanismo: 'Aumento da pressão arterial.',
      referencias: []
    }
  ],
  interacoes: [
    {
      substancia: 'Outros esteroides anabolizantes',
      tipo: 'cautela',
      mecanismo: 'Potencial sinergia tóxica.',
      referencias: []
    }
  ],
  efeitosAdversos: [
    'Agressividade',
    'Insônia',
    'Sudorese noturna',
    'Hipertensão',
    'Acne',
    'Queda de cabelo',
    'Virilização em mulheres',
    'Supressão do eixo gonadal',
    'Toxicidade hepática',
    'Alterações de humor',
    'Insônia'
  ],
  statusWada: 'Proibido',
  monitoramento: [
    'Pressão arterial',
    'Perfil lipídico',
    'Função hepática',
    'Testosterona sérica',
    'LH/FSH',
    'Hemograma'
  ],
  sinaisAlerta: [
    'Agressividade extrema',
    'Insônia severa',
    'Sudorese noturna',
    'Hipertensão severa',
    'Icterícia',
    'Dor abdominal',
    'Sangramento inexplicável',
    'Sinais de virilização',
    'Edema'
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
      titulo: 'Trembolona - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Trembolona+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Trembolona - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Trembolona+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Trembolona - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Trembolona+efeitos+cuidados',
      credito: 'YouTube'
    }
  ]
};
