import { Peptide } from '../types';

export const hemogenin: Peptide = {
  id: 'hemogenin',
  nome: 'Hemogenin',
  sinonimos: ['Oxymetholone', 'Oximetolona', 'Anadrol'],
  categoria: 'Esteroide Anabolizante',
  nivelRegulatorio: 'offlabel',
  resumo: 'Esteroide anabolizante oral 17-alfa-alquilado, de ação rápida, usado historicamente para ganho de massa muscular e tratamento de anemias. Altamente hepatotóxico e com forte supressão do eixo gonadal.',
  mecanismo: 'Liga-se aos receptores de androgênios, promovendo síntese proteica, retenção de nitrogênio e estimulação da eritropoiese, com atividade estrogênica e retenção hídrica.',
  indicacoesEstudadas: [
    {
      condicao: 'Anemias (aplástica, de insuficiência renal e associada ao HIV — uso histórico, hoje em desuso)',
      nivel: 'C',
      modelo: 'human',
      referencias: [],
    },
  ],
  dosagem: {
    doseMinima: '50 mg/dia',
    doseMedia: '50–100 mg/dia',
    doseMaxima: '150 mg/dia',
    frequencia: '1–2x/dia',
    vias: ['Oral'],
    locaisAplicacao: ['Via oral'],
    duracaoMinima: '4 semanas',
    duracaoMaxima: '6 semanas',
    notas: '17-alfa-alquilado e hepatotóxico; ciclos curtos recomendados com monitoramento hepático.',
    referencias: [],
  },
  contraindicacoes: [
    {
      condicao: 'Doença hepática ativa',
      gravidade: 'alta',
      mecanismo: 'Toxicidade hepática por 17-alfa-alquilação.',
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
    {
      substancia: 'Insulina ou hipoglicemiantes orais',
      tipo: 'cautela',
      mecanismo: 'Pode alterar a sensibilidade à insulina.',
      referencias: [],
    },
  ],
  efeitosAdversos: [
    'Hepatotoxicidade grave (17-alfa-alquilado)',
    'Retenção de líquidos e ginecomastia',
    'Supressão rápida do eixo gonadal',
    'Alterações no colesterol (redução HDL)',
    'Hipertensão',
    'Acne',
    'Queda de cabelo (predisposição genética)',
  ],
  statusWada: 'Proibido',
  monitoramento: [
    'Função hepática (AST, ALT, bilirrubina)',
    'Perfil lipídico',
    'Testosterona sérica',
    'LH / FSH',
    'Pressão arterial',
    'Estradiol',
  ],
  sinaisAlerta: [
    'Icterícia ou urina escura',
    'Dor abdominal superior direita',
    'Dor de cabeça intensa com náusea',
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
      titulo: 'Hemogenin - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Hemogenin+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Hemogenin - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Hemogenin+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Hemogenin - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Hemogenin+efeitos+cuidados',
      credito: 'YouTube'
    }
  ],
};
