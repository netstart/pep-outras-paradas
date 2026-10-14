import { Peptide } from '../types';

export const timosinaAlfa1: Peptide = {
  id: 'timosina-alfa-1',
  nome: 'Timosina Alfa-1 (Thymalfasin)',
  sinonimos: ['Thymalfasin', 'Tα1'],
  categoria: 'Imunomodulador / Antiviral',
  nivelRegulatorio: 'approved',
  resumo: 'Peptídeo imunomodulador aprovado (Europa/Ásia) para hepatite B crônica e adjuvante em imunodeficiências.',
  mecanismo: 'Modula maturação de células T e citocinas (IFN, IL-2). Estimula resposta imune celular.',
  indicacoesEstudadas: [
    {
      condicao: 'Hepatite B crônica',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Thymalfasin chronic hepatitis B', 
          fonte: 'J Viral Hepat', 
          ano: 2000, 
          pmid: '10848666', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '1,6 mg 2x/semana',
    doseMedia: '1,6 mg 2x/semana',
    doseMaxima: '1,6 mg 2x/semana',
    frequencia: '2x/sem',
    vias: ['Subcutânea'],
    locaisAplicacao: ['Abdome'],
    duracaoMinima: 'Conforme indicação',
    duracaoMaxima: 'Supervisionado',
    notas: 'Aprovação varia por país (Europa, Ásia, América Latina).',
    referencias: [
      { 
        titulo: 'Thymalfasin chronic hepatitis B', 
        fonte: 'J Viral Hepat', 
        ano: 2000, 
        pmid: '10848666', 
        nivel: 'A', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipersensibilidade',
      gravidade: 'moderada',
      mecanismo: 'Reação imunológica.',
      referencias: []
    }
  ],
  interacoes: [],
  efeitosAdversos: [
    'Dor no local',
    'Rubor local',
    'Cefaleia leve',
    'Febre leve (transitória)'
  ],
  statusWada: 'Não aplicável',
  monitoramento: [
    'Função hepática (ALT, AST, bilirrubina)',
    'Carga viral',
    'Contagem de linfócitos'
  ],
  sinaisAlerta: [
    'Reação alérgica',
    'Febre persistente alta',
    'Dor intensa no local da aplicação'
  ],
  referencias: [
    { 
      titulo: 'Thymalfasin chronic hepatitis B', 
      fonte: 'J Viral Hepat', 
      ano: 2000, 
      pmid: '10848666', 
      nivel: 'A', 
      modelo: 'human' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'artigo', 
      titulo: 'Thymalfasin — PubMed', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/10848666/' 
    },
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura da Timosina Alfa-1 (PubChem)', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/thymosin+alpha-1/PNG', 
      credito: 'PubChem' 
    }
  ]
};