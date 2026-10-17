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
  referencias: [],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [],
};
