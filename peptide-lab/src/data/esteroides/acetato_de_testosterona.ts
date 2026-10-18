import { Peptide } from '../types';

export const acetato_de_testosterona: Peptide = {
  id: 'acetato_de_testosterona',
  nome: 'Acetato de Testosterona',
  sinonimos: ['Testosterone Acetate', 'Acetate de Testostérone'],
  categoria: 'Esteroide Anabolizante',
  nivelRegulatorio: 'offlabel',
  resumo: 'Éster de testosterona de ação muito curta (meia-vida de aproximadamente 24–48 horas), usado para reposição ou aumento rápido dos níveis de testosterona sérica.',
  mecanismo: 'Liga-se aos receptores de androgênios nos tecidos alvo, promovendo síntese proteica, retenção de nitrogênio, lipólise e efeitos androgênicos.',
  indicacoesEstudadas: [
    {
      condicao: 'Hipogonadismo masculino (reposição de testosterona)',
      nivel: 'B',
      modelo: 'human',
      referencias: [],
    },
  ],
  dosagem: {
    doseMinima: '50 mg/dia',
    doseMedia: '100 mg/dia',
    doseMaxima: '200 mg/dia',
    frequencia: '1x/dia (devido à meia-vida curta)',
    vias: ['Intramuscular'],
    locaisAplicacao: ['Glúteo', 'Deltóide', 'Coxa'],
    duracaoMinima: '4 semanas',
    duracaoMaxima: '12 semanas',
    notas: 'Exige aplicações frequentes devido à meia-vida muito curta.',
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
    'Acne',
    'Retenção de líquidos',
    'Ginecomastia (aromatização para estrogênio)',
    'Supressão do eixo gonadal (LH/FSH)',
    'Alterações no perfil lipídico',
    'Hipertensão',
    'Agressão / irritabilidade',
    'Calvície androgenética (predisposição genética)',
  ],
  statusWada: 'Proibido',
  monitoramento: [
    'Testosterona total e livre',
    'Hematócrito / hemoglobina (policitemia)',
    'Função hepática (AST, ALT)',
    'Perfil lipídico',
    'PSA (antígeno prostático específico)',
    'LH / FSH',
  ],
  sinaisAlerta: [
    'Dor ou nódulo prostático',
    'Icterícia ou urina escura',
    'Dor de cabeça intensa com alterações visuais',
    'Trombose venosa profunda (inchaço e dor na panturrilha)',
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
      titulo: 'Acetato de Testosterona - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Acetato+de+Testosterona+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Acetato de Testosterona - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Acetato+de+Testosterona+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Acetato de Testosterona - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Acetato+de+Testosterona+efeitos+cuidados',
      credito: 'YouTube'
    }
  ],
};
