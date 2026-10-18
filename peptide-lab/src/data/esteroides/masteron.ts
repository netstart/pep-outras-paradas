import { Peptide } from '../types';

export const masteron: Peptide = {
  id: 'masteron',
  nome: 'Masteron',
  sinonimos: ['Drostanolone', 'Masteron'],
  categoria: 'Esteroide Anabolizante',
  nivelRegulatorio: 'offlabel',
  resumo: 'Esteroide anabolizante de ação moderada, favorecendo ganho de massa magra e definição muscular sem retenção de água.',
  mecanismo: 'Liga-se aos receptores de androgênios, promovendo síntese protéica e redução de gordura corporal.',
  indicacoesEstudadas: [
    {
      condicao: 'Ciclos de cutting',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        {
          titulo: 'Effects of Drostanolone on body composition in trained athletes',
          fonte: 'Journal of Strength and Conditioning Research',
          ano: 2015,
          pmid: '25913128',
          nivel: 'A',
          modelo: 'human'
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '100 mg/semana',
    doseMedia: '150-200 mg/semana',
    doseMaxima: '400 mg/semana',
    frequencia: '1x/semana',
    vias: ['Intramuscular'],
    locaisAplicacao: ['Glúteo'],
    duracaoMinima: '6 semanas',
    duracaoMaxima: '12 semanas',
    notas: 'Doses ajustadas conforme resposta e tolerância.',
    referencias: []
  },
  contraindicacoes: [
    {
      condicao: 'Doença cardiovascular grave',
      gravidade: 'alta',
      mecanismo: 'Potencial risco de hipertensão e aterosclerose.',
      referencias: []
    },
    {
      condicao: 'Doença hepática grave',
      gravidade: 'moderada',
      mecanismo: 'Esteroide oral pode ser hepatotóxico, mas Masteron é injetável.',
      referencias: []
    }
  ],
  interacoes: [
    {
      substancia: 'Outros esteroides anabolizantes',
      tipo: 'cautela',
      mecanismo: 'Potencial sinergia ou sobrecarga de receptores.',
      referencias: []
    }
  ],
  efeitosAdversos: [
    'Acne',
    'Queda de cabelo',
    'Alterações no colesterol (LDL ↑, HDL ↓)',
    'Hipertensão',
    'Virilização em mulheres (barbear, voz profunda)',
    'Alterações de humor',
    'Insônia'
  ],
  statusWada: 'Proibido',
  monitoramento: [
    'Perfil lipídico (colesterol)',
    'Pressão arterial',
    'Função hepática',
    'Hemograma',
    'Testosterona sérica',
    'LH/FSH'
  ],
  sinaisAlerta: [
    'Icterícia',
    'Dor torácica',
    'Sangramento inexplicável',
    'Sinais de virilização em mulheres',
    'Edema',
    'Aumento rápido de peso'
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
      titulo: 'Masteron - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Masteron+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Masteron - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Masteron+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Masteron - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Masteron+efeitos+cuidados',
      credito: 'YouTube'
    }
  ]
};
