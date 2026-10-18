import { Peptide } from '../types';

export const decanoato_de_nandrolona: Peptide = {
  id: 'decanoato_de_nandrolona',
  nome: 'Decanoato de Nandrolona',
  sinonimos: ['Nandrolone Decanoate', 'Deca Durabolin'],
  categoria: 'Esteroide Anabolizante',
  nivelRegulatorio: 'offlabel',
  resumo: 'Éster de nandrolona de ação prolongada, usado para ganho de massa muscular e melhoria da recuperação.',
  mecanismo: 'Liga-se aos receptores de androgênios, promovendo síntese protéica e retenção de nitrogênio.',
  indicacoesEstudadas: [
    {
      condicao: 'Ganho de massa muscular',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        {
          titulo: 'Nandrolone decanoate in the treatment of muscle wasting',
          fonte: 'Clinical Journal of Sports Medicine',
          ano: 2009,
          pmid: '19246659',
          nivel: 'A',
          modelo: 'human'
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '150 mg/semana',
    doseMedia: '200-400 mg/semana',
    doseMaxima: '600 mg/semana',
    frequencia: '1x/semana',
    vias: ['Intramuscular'],
    locaisAplicacao: ['Glúteo'],
    duracaoMinima: '8 semanas',
    duracaoMaxima: 'Indefinido (ciclos de até 12 meses)',
    notas: 'Doses mais altas aumentam risco cardiovascular.',
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
      mecanismo: 'Metabolismo hepático pode ser sobrecarregado.',
      referencias: []
    },
    {
      condicao: 'Hipertensão não controlada',
      gravidade: 'moderada',
      mecanismo: 'Potencial aumento da pressão arterial.',
      referencias: []
    }
  ],
  interacoes: [
    {
      substancia: 'Outros esteroides anabolizantes',
      tipo: 'cautela',
      mecanismo: 'Potencial sobrecarga de receptores e efeitos adversos.',
      referencias: []
    }
  ],
  efeitosAdversos: [
    'Acne',
    'Queda de cabelo',
    'Aumento de pressão arterial',
    'Retenção de líquidos',
    'Ginecomastia (por conversão a estrógeno)',
    'Supressão do eixo gonadal',
    'Alterações de humor',
    'Insônia'
  ],
  statusWada: 'Proibido',
  monitoramento: [
    'Pressão arterial',
    'Perfil lipídico',
    'Função hepática',
    'Hemograma',
    'Testosterona sérica',
    'LH/FSH'
  ],
  sinaisAlerta: [
    'Dor torácica',
    'Dispneia',
    'Inchaço nas extremidades',
    'Sangramento inexplicável',
    'Sinais de virilização',
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
      titulo: 'Decanoato de Nandrolona - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Decanoato+de+Nandrolona+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Decanoato de Nandrolona - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Decanoato+de+Nandrolona+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Decanoato de Nandrolona - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Decanoato+de+Nandrolona+efeitos+cuidados',
      credito: 'YouTube'
    }
  ]
};
