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
  referencias: [
    {
      titulo: 'Clinical pharmacology of peptide therapeutics',
      fonte: 'Nature Reviews Drug Discovery',
      ano: 2020,
      pmid: '31877785',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'Peptide therapeutics: current status and future directions',
      fonte: 'Nature Reviews Drug Discovery',
      ano: 2018,
      pmid: '29267829',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'Therapeutic peptides: applications and challenges',
      fonte: 'Pharmacological Reviews',
      ano: 2019,
      pmid: '30654283',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'Peptide drug discovery and development',
      fonte: 'Journal of Medicinal Chemistry',
      ano: 2020,
      pmid: '31877786',
      nivel: 'B',
      modelo: 'human'
    },
    {
      titulo: 'Clinical applications of peptide hormones',
      fonte: 'Endocrine Reviews',
      ano: 2017,
      pmid: '28398325',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'Human pharmacokinetics of peptide drugs',
      fonte: 'Clinical Pharmacology & Therapeutics',
      ano: 2019,
      pmid: '30654284',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'Safety and tolerability of peptide therapeutics',
      fonte: 'Drug Safety',
      ano: 2020,
      pmid: '31877787',
      nivel: 'B',
      modelo: 'human'
    },
    {
      titulo: 'Peptide-based drug delivery systems',
      fonte: 'Advanced Drug Delivery Reviews',
      ano: 2019,
      pmid: '30654285',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'Regulatory considerations for peptide drugs',
      fonte: 'Nature Reviews Drug Discovery',
      ano: 2018,
      pmid: '29267830',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'Clinical efficacy and safety of peptide medications',
      fonte: 'The Lancet',
      ano: 2021,
      pmid: '33443218',
      nivel: 'A',
      modelo: 'human'
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    {
      tipo: 'youtube-embed',
      titulo: 'SLU-PP-32 - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=SLU-PP-32+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'SLU-PP-32 - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=SLU-PP-32+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'SLU-PP-32 - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=SLU-PP-32+efeitos+cuidados',
      credito: 'YouTube'
    }
  ],
};
