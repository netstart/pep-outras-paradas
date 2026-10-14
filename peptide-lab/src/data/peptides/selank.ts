import { Peptide } from '../types';

export const selank: Peptide = {
  id: 'selank',
  nome: 'Selank',
  sinonimos: ['Selank', 'TUF-7', 'TP7'],
  categoria: 'Neuro / Cognição',
  nivelRegulatorio: 'preliminary',
  resumo: 'Análogo do tuftsin — usado como ansiolítico na Rússia. Não aprovado por FDA/EMA.',
  mecanismo: 'Modula o sistema serotoninérgico e GABAérgico; reduz ansiedade sem sedação significativa.',
  indicacoesEstudadas: [
    {
      condicao: 'Ansiedade generalizada / transtorno de ansiedade',
      nivel: 'C',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Selank novel anxiolytic — review', 
          fonte: 'Rev Neurosci', 
          ano: 2009, 
          pmid: '19328840', 
          nivel: 'C', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '0,15 mg/dose',
    doseMedia: '0,3–0,6 mg/dia',
    doseMaxima: '0,6 mg/dia',
    frequencia: '1–2x ao dia (nasal)',
    vias: ['Intranasal'],
    locaisAplicacao: ['Intranasal'],
    duracaoMinima: 'Conforme indicação',
    duracaoMaxima: 'Uso supervisionado',
    notas: 'Aprovado apenas na Rússia; não aprovado por FDA/EMA. Não há registro na ANVISA ou EMA.',
    referencias: []
  },
  contraindicacoes: [
    {
      condicao: 'Estudos de longo prazo escassos',
      gravidade: 'moderada',
      mecanismo: 'Dados limitados sobre segurança de longo prazo.',
      referencias: []
    }
  ],
  interacoes: [],
  efeitosAdversos: [
    'Rinite leve',
    'Dor de cabeça leve',
    'Fadiga leve',
    'Sensação de formigamento'
  ],
  statusWada: 'Não listado (não aprovado para humanos)',
  monitoramento: [
    'Avaliação clínica psiquiátrica',
    'Escala de ansiedade (GAD-7, STAI)',
    'Função cognitiva (memória, atenção)'
  ],
  sinaisAlerta: [
    'Reação alérgica',
    'Sintomas de ansiedade aumentada',
    'Dor no local da aplicação'
  ],
  referencias: [
    { 
      titulo: 'Selank novel anxiolytic — review', 
      fonte: 'Rev Neurosci', 
      ano: 2009, 
      pmid: '19328840', 
      nivel: 'C', 
      modelo: 'human' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'artigo', 
      titulo: 'Selank — PubMed', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/19328840/' 
    }
  ]
};