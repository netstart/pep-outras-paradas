import { Peptide } from '../types';

export const oxandrolona: Peptide = {
  id: 'oxandrolona',
  nome: 'Oxandrolona',
  sinonimos: ['Oxandrolone', 'Anavar'],
  categoria: 'Esteroide Anabolizante',
  nivelRegulatorio: 'offlabel',
  resumo: 'Esteroide oral de ação moderada, favorecendo ganho de massa magra magra e queima de gordura sem efeitos estrogênicos fortes.',
  mecanismo: 'Liga-se aos receptores de androgênios, promovendo síntese protéica e lipólise.',
  indicacoesEstudadas: [
    {
      condicao: 'Perda de massa magra em pacientes com HIV',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        {
          titulo: 'Oxandrolone for the treatment of HIV wasting',
          fonte: 'Journal of Acquired Immune Deficiency Syndromes',
          ano: 2007,
          pmid: '17224371',
          nivel: 'A',
          modelo: 'human'
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '2.5 mg/dia',
    doseMedia: '5-10 mg/dia',
    doseMaxima: '20 mg/dia',
    frequencia: '2-3x/dia',
    vias: ['Oral'],
    locaisAplicacao: ['Via oral'],
    duracaoMinima: '4 semanas',
    duracaoMaxima: '12 semanas',
    notas: 'Doses mais altas aumentam risco hepático.',
    referencias: []
  },
  contraindicacoes: [
    {
      condicao: 'Doença hepática grave',
      gravidade: 'alta',
      mecanismo: 'Metabolismo hepático e risco de hepatotoxicidade.',
      referencias: []
    },
    {
      condicao: 'Gravidez ou amamentação',
      gravidade: 'alta',
      mecanismo: 'Potencial teratogenicidade.',
      referencias: []
    }
  ],
  interacoes: [
    {
      substancia: 'Anticoagulantes',
      tipo: 'cautela',
      mecanismo: 'Potencial aumento do efeito anticoagulante.',
      referencias: []
    }
  ],
  efeitosAdversos: [
    'Toxicidade hepática',
    'Náusea',
    'Vômito',
    'Alterações no colesterol',
    'Acne',
    'Queda de cabelo',
    'Supressão do eixo gonadal',
    'Alterações de humor'
  ],
  statusWada: 'Proibido',
  monitoramento: [
    'Função hepática (AST, ALT, bilirrubina)',
    'Perfil lipídico total e fraccionado',
    'Testosterona sérica',
    'LH/FSH',
    'Hemograma'
  ],
  sinaisAlerta: [
    'Icterícia ou urina escura',
    'Dor abdominal intensa',
    'Sangramento inexplicável',
    'Sinais de virilização em mulheres',
    'Dolor torácica',
    'Edema',
    'Confusão mental'
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
      titulo: 'Oxandrolona - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Oxandrolona+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Oxandrolona - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Oxandrolona+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Oxandrolona - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Oxandrolona+efeitos+cuidados',
      credito: 'YouTube'
    }
  ]
};
