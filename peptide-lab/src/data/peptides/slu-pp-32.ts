import { Peptide } from '../types';

export const sluPp32: Peptide = {
  id: 'slu-pp-32',
  nome: 'SLU-PP-32',
  sinonimos: ['SLU-PP32', 'Estrogênio receptor ERR agonist mimético'],
  categoria: 'Peptídeo Metabólico / Mimetismo de Exercício',
  nivelRegulatorio: 'research',
  resumo: 'Pequeno composto peptidomimético que ativa os receptores relacionados a estrogênio (ERR), imitando efeitos do exercício sobre o metabolismo energético.',
  mecanismo: 'Ativa os ERRα e ERRγ, aumentando a oxidação de ácidos graxos, a biogênese mitocondrial e o gasto energético em tecidos como músculo esquelético e fígado.',
  indicacoesEstudadas: [
    {
      condicao: 'Obesidade e diabetes tipo 2 (pesquisa pré-clínica)',
      nivel: 'C',
      modelo: 'animal',
      referencias: [],
    },
    {
      condicao: 'Doença hepática gordurosa não alcoólica (NAFLD) (pesquisa pré-clínica)',
      nivel: 'C',
      modelo: 'animal',
      referencias: [],
    },
  ],
  dosagem: {
    doseMinima: 'Não estabelecido para humanos',
    doseMedia: 'Não estabelecido para humanos',
    doseMaxima: 'Não estabelecido para humanos',
    frequencia: 'Não estabelecido',
    vias: ['Pesquisa'],
    locaisAplicacao: ['Não aplicável'],
    duracaoMinima: 'Não aplicável',
    duracaoMaxima: 'Não aplicável',
    notas: 'Apenas em estudos pré-clínicos; não há dosagem estabelecida para humanos.',
    referencias: [],
  },
  contraindicacoes: [
    {
      condicao: 'Não estabelecido (uso apenas em pesquisa)',
      gravidade: 'alta',
      mecanismo: 'Segurança em humanos não avaliada.',
      referencias: [],
    },
  ],
  interacoes: [],
  efeitosAdversos: [
    'Não estabelecido para humanos',
  ],
  statusWada: 'Não proibido (em avaliação)',
  monitoramento: [],
  sinaisAlerta: [
    'Não estabelecido',
  ],
  referencias: [],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [],
};
