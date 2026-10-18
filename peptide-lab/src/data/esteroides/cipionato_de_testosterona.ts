import { Peptide } from '../types';

export const cipionato_de_testosterona: Peptide = {
  id: 'cipionato_de_testosterona',
  nome: 'Cipionato de Testosterona',
  sinonimos: ['Testosterone Cypionate', 'Depo-Testosterone'],
  categoria: 'Esteroide Anabolizante',
  nivelRegulatorio: 'offlabel',
  resumo: 'Éster de testosterona de ação longa (meia-vida de aproximadamente 8–12 dias), amplamente usado para reposição de testosterona (TRT) e ciclos de massa muscular.',
  mecanismo: 'Liga-se aos receptores de androgênios, promovendo síntese proteica, retenção de nitrogênio, lipólise e efeitos androgênicos nos tecidos alvo.',
  indicacoesEstudadas: [
    {
      condicao: 'Hipogonadismo masculino (TRT)',
      nivel: 'A',
      modelo: 'human',
      referencias: [],
    },
  ],
  dosagem: {
    doseMinima: '50–100 mg/semana',
    doseMedia: '200–250 mg/semana',
    doseMaxima: '400–600 mg/semana',
    frequencia: '1x/semana ou 2x/semana',
    vias: ['Intramuscular'],
    locaisAplicacao: ['Glúteo', 'Deltóide', 'Coxa'],
    duracaoMinima: 'Contínuo (TRT) ou 8 semanas (ciclo)',
    duracaoMaxima: 'Indefinido (TRT sob supervisão) / 16 semanas (ciclo)',
    notas: 'Em TRT, a dose é ajustada conforme níveis séricos e sintomas.',
    referencias: [],
  },
  contraindicacoes: [
    {
      condicao: 'Câncer de próstata ou de mama',
      gravidade: 'alta',
      mecanismo: 'Estimulação de tecidos sensíveis a androgênios.',
      referencias: [],
    },
    {
      condicao: 'Gravidez ou amamentação',
      gravidade: 'alta',
      mecanismo: 'Potencial teratogenicidade e virilização fetal.',
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
    'Retenção de líquidos',
    'Ginecomastia (aromatização para estrogênio)',
    'Acne',
    'Supressão do eixo gonadal',
    'Alterações no perfil lipídico',
    'Hipertensão',
    'Agressão / alterações de humor',
    'Calvície androgenética (predisposição genética)',
  ],
  statusWada: 'Proibido',
  monitoramento: [
    'Testosterona total e livre',
    'Estradiol',
    'Hematócrito / hemoglobina',
    'Função hepática (AST, ALT)',
    'Perfil lipídico',
    'PSA',
    'LH / FSH',
    'Pressão arterial',
  ],
  sinaisAlerta: [
    'Nódulo ou dor prostática',
    'Icterícia ou urina escura',
    'Sinais de trombose venosa profunda',
    'Dor torácica ou dispneia',
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
      titulo: 'Cipionato de Testosterona - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Cipionato+de+Testosterona+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Cipionato de Testosterona - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Cipionato+de+Testosterona+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Cipionato de Testosterona - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Cipionato+de+Testosterona+efeitos+cuidados',
      credito: 'YouTube'
    }
  ],
};
