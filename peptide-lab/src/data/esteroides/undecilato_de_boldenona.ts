import { Peptide } from '../types';

export const undecilato_de_boldenona: Peptide = {
  id: 'undecilato_de_boldenona',
  nome: 'Undecilato de Boldenona',
  sinonimos: ['Boldenone Undecylenate', 'Equipose', 'EQ', 'Boldenone'],
  categoria: 'Esteroide Anabolizante',
  nivelRegulatorio: 'offlabel',
  resumo: 'Éster de boldenona de ação longa (meia-vida de aproximadamente 14 dias), derivado da testosterona, usado para ganho gradual de massa magra e aumento de apetite.',
  mecanismo: 'Liga-se aos receptores de androgênios, promovendo síntese proteica, retenção de nitrogênio e estimulação da eritropoese (aumento de glóbulos vermelhos), com baixa aromatização.',
  indicacoesEstudadas: [
    {
      condicao: 'Anemia (uso veterinário histórico)',
      nivel: 'C',
      modelo: 'animal',
      referencias: [],
    },
  ],
  dosagem: {
    doseMinima: '200 mg/semana',
    doseMedia: '400–600 mg/semana',
    doseMaxima: '800 mg/semana',
    frequencia: '1x/semana ou 2x/semana',
    vias: ['Intramuscular'],
    locaisAplicacao: ['Glúteo', 'Deltóide', 'Coxa'],
    duracaoMinima: '8 semanas',
    duracaoMaxima: '16 semanas',
    notas: 'Ciclos longos devido à meia-vida longa; aumenta significativamente o hematócrito.',
    referencias: [],
  },
  contraindicacoes: [
    {
      condicao: 'Policitemia ou eritrocitose',
      gravidade: 'alta',
      mecanismo: 'Estimulação da eritropoese pode elevar excessivamente o hematócrito.',
      referencias: [],
    },
    {
      condicao: 'Câncer de próstata ou de mama',
      gravidade: 'alta',
      mecanismo: 'Tecidos sensíveis a androgênios.',
      referencias: [],
    },
    {
      condicao: 'Gravidez ou amamentação',
      gravidade: 'alta',
      mecanismo: 'Potencial virilização fetal.',
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
  ],
  efeitosAdversos: [
    'Aumento do hematócrito / policitemia',
    'Acne',
    'Queda de cabelo (predisposição genética)',
    'Supressão do eixo gonadal',
    'Alterações no colesterol',
    'Aumento do apetite',
    'Voz grave (em mulheres, risco de virilização)',
  ],
  statusWada: 'Proibido',
  monitoramento: [
    'Hematócrito / hemoglobina',
    'Perfil lipídico',
    'Testosterona sérica',
    'LH / FSH',
    'Função hepática',
    'Pressão arterial',
  ],
  sinaisAlerta: [
    'Tontura, dor de cabeça, rubor facial (policitemia)',
    'Dor no peito ou falta de ar',
    'Icterícia',
    'Sinais de trombose',
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
      titulo: 'Undecilato de Boldenona - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Undecilato+de+Boldenona+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Undecilato de Boldenona - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Undecilato+de+Boldenona+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Undecilato de Boldenona - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Undecilato+de+Boldenona+efeitos+cuidados',
      credito: 'YouTube'
    }
  ],
};
