import { Peptide } from '../types';

export const cjc1295: Peptide = {
  id: 'cjc-1295',
  nome: 'CJC-1295 (com DAC)',
  sinonimos: ['CJC-1295', 'CJC-1295 DAC', 'DAC:GHRH'],
  categoria: 'GH / Performance',
  nivelRegulatorio: 'preliminary',
  resumo: 'Análogo do hormônio liberador de GH (GHRH 1-29) com complexo de afinidade a fármacos (DAC) que prolonga a meia-vida; em voluntários elevou GH e IGF-1 por dias a semanas. Não aprovado; dados apenas de fase 1.',
  mecanismo: 'Agonista do receptor GHRH na hipófise anterior; prolonga pulsos de GH e eleva IGF-1 sérica.',
  indicacoesEstudadas: [
    {
      condicao: 'Aumento fisiológico de GH',
      nivel: 'B',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Prolonged stimulation of GH/IGF-1 by CJC-1295', 
          fonte: 'J Clin Endocrinol Metab', 
          ano: 2006, 
          pmid: '16352683', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '0,6 mg/semana',
    doseMedia: '0,6–1 mg 1–2x/semana',
    doseMaxima: '2 mg (estudo)',
    frequencia: '1–2x/semana',
    vias: ['Subcutânea'],
    locaisAplicacao: ['Abdome (SC)'],
    duracaoMinima: 'Não aplicável',
    duracaoMaxima: 'Protocolo de estudo',
    notas: 'Não aprovado. Uso apenas em estudos clínicos supervisionados.',
    referencias: []
  },
  contraindicacoes: [
    {
      condicao: 'Neoplasia ativa',
      gravidade: 'alta',
      mecanismo: 'GH/IGF-1 têm efeito proliferativo (consenso endócrino).',
      referencias: []
    },
    {
      condicao: 'Gravidez e lactação',
      gravidade: 'alta',
      mecanismo: 'Ausência de dados sobre segurança fetal.',
      referencias: []
    }
  ],
  interacoes: [
    {
      substancia: 'Somatostatina',
      tipo: 'cautela',
      mecanismo: 'Antagonismo fisiológico ao eixo GH.',
      referencias: []
    }
  ],
  efeitosAdversos: [
    'Rubor',
    'Cefaleia',
    'Sensação de calor',
    'Dor no local da injeção (em estudos)',
    'Náusea',
    'Tontura'
  ],
  statusWada: 'Proibido (S2 — secretagogos de GH)',
  monitoramento: [
    'IGF-1 sérico',
    'Glicemia',
    'Prolactina'
  ],
  sinaisAlerta: [
    'Sintomas de reação anafilactoide',
    'Edema persistente',
    'Dor torácica inexplicada'
  ],
  referencias: [
    { 
      titulo: 'Teichman — CJC-1295 JCEM (PubMed)', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/16352683/', 
      fonte: 'J Clin Endocrinol Metab', 
      ano: 2006, 
      nivel: 'B', 
      modelo: 'human' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'artigo', 
      titulo: 'Teichman — CJC-1295 JCEM (PubMed)', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/16352683/' 
    }
  ]
};