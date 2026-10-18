import { Peptide } from '../types';

export const proviron: Peptide = {
  id: 'proviron',
  nome: 'Proviron',
  sinonimos: ['Mesterolona', 'Mesterolone'],
  categoria: 'Esteroide Anabolizante',
  nivelRegulatorio: 'offlabel',
  resumo: 'Androgênio oral não anabólico significativo, derivado da DHT, usado principalmente por seus efeitos androgênicos e anti-estrogênicos leves (ligação à globulina transportadora de hormônios sexuais).',
  mecanismo: 'Liga-se fortemente à globulina transportadora de hormônios sexuais (SHBG), aumentando a fração livre de testosterona; tem baixa atividade anabólica e não aromatiza.',
  indicacoesEstudadas: [
    {
      condicao: 'Hipogonadismo (suporte androgênio)',
      nivel: 'C',
      modelo: 'human',
      referencias: [],
    },
    {
      condicao: 'Infertilidade masculina (uso histórico)',
      nivel: 'C',
      modelo: 'human',
      referencias: [],
    },
  ],
  dosagem: {
    doseMinima: '25 mg/dia',
    doseMedia: '50 mg/dia',
    doseMaxima: '150 mg/dia',
    frequencia: '1–2x/dia',
    vias: ['Oral'],
    locaisAplicacao: ['Via oral'],
    duracaoMinima: '4 semanas',
    duracaoMaxima: '12 semanas',
    notas: 'Não é 17-alfa-alquilado; menor toxicidade hepática que outros orais.',
    referencias: [],
  },
  contraindicacoes: [
    {
      condicao: 'Câncer de próstata',
      gravidade: 'alta',
      mecanismo: 'Efeitos androgênicos no tecido prostático.',
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
    'Supressão do eixo gonadal (doses elevadas/prolongado)',
    'Acne',
    'Queda de cabelo (predisposição genética)',
    'Alterações de humor',
    'Agressão',
    'Priapismo (raro)',
  ],
  statusWada: 'Proibido',
  monitoramento: [
    'Testosterona total e livre',
    'LH / FSH',
    'PSA',
    'Perfil lipídico',
  ],
  sinaisAlerta: [
    'Ereções prolongadas e dolorosas (priapismo)',
    'Sinais de problemas prostáticos',
    'Alterações humorais graves',
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
      titulo: 'Proviron - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Proviron+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Proviron - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Proviron+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Proviron - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Proviron+efeitos+cuidados',
      credito: 'YouTube'
    }
  ],
};
