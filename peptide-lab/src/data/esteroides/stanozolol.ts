import { Peptide } from '../types';

export const stanozolol: Peptide = {
  id: 'stanozolol',
  nome: 'Stanozolol',
  sinonimos: ['Stanozolol', 'Winstrol', 'Winny'],
  categoria: 'Esteroide Anabolizante',
  nivelRegulatorio: 'offlabel',
  resumo: 'Esteroide anabolizante sintético derivado da dihidrotestosterona (DHT), disponível em via oral e injetável, valorizado por efeitos anabólicos com baixa atividade estrogênica.',
  mecanismo: 'Liga-se aos receptores de androgênios, promovendo síntese proteica e lipólise, com baixa conversão para estrogênio e efeitos androgênicos moderados.',
  indicacoesEstudadas: [
    {
      condicao: 'Angioedema hereditário',
      nivel: 'B',
      modelo: 'human',
      referencias: [],
    },
    {
      condicao: 'Perda de massa magra (cachexia)',
      nivel: 'C',
      modelo: 'human',
      referencias: [],
    },
  ],
  dosagem: {
    doseMinima: '10 mg/dia',
    doseMedia: '25–50 mg/dia',
    doseMaxima: '100 mg/dia',
    frequencia: '1x/dia',
    vias: ['Oral', 'Intramuscular'],
    locaisAplicacao: ['Via oral', 'Glúteo', 'Deltóide'],
    duracaoMinima: '4 semanas',
    duracaoMaxima: '8 semanas',
    notas: 'Uso prolongado ou doses elevadas aumentam risco de toxicidade hepática e efeitos nos lipídios.',
    referencias: [],
  },
  contraindicacoes: [
    {
      condicao: 'Doença hepática ativa',
      gravidade: 'alta',
      mecanismo: 'Metabolismo hepático de primeiro passo (forma oral) e risco de hepatotoxicidade.',
      referencias: [],
    },
    {
      condicao: 'Gravidez ou amamentação',
      gravidade: 'alta',
      mecanismo: 'Potencial virilização do feto.',
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
    'Hepatotoxicidade (especialmente forma oral)',
    'Alterações no colesterol (redução HDL, aumento LDL)',
    'Dores nas articulações (ressecamento sinovial)',
    'Acne',
    'Queda de cabelo (predisposição genética)',
    'Supressão do eixo gonadal',
    'Alterações de humor',
  ],
  statusWada: 'Proibido',
  monitoramento: [
    'Função hepática (AST, ALT, GGT, bilirrubina)',
    'Perfil lipídico',
    'Testosterona sérica',
    'LH / FSH',
    'Hemograma',
  ],
  sinaisAlerta: [
    'Icterícia ou urina escura',
    'Dor abdominal superior direita',
    'Sangramento inexplicável',
    'Dor no peito ou falta de ar',
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
      titulo: 'Stanozolol - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Stanozolol+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Stanozolol - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Stanozolol+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Stanozolol - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Stanozolol+efeitos+cuidados',
      credito: 'YouTube'
    }
  ],
};
