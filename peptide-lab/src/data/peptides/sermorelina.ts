import { Peptide } from '../types';

export const sermorelina: Peptide = {
  id: 'sermorelina',
  nome: 'Sermorelina',
  sinonimos: ['Sermorelin', 'Somatroliberin', 'GHRH-1-29'],
  categoria: 'GH / Performance',
  nivelRegulatorio: 'offlabel',
  resumo: 'GHRH(1-29) humano; aprovado nos EUA como teste diagnóstico de deficiência de GH (nota: a substância é breve e nem todo uso é aprovado). Para terapia crônica há evidência que o efeito no GH é limitado pela somatostatina.',
  mecanismo: 'Agonista do receptor GHRH anterior da hipófise → eleva GH pulsátil e aumenta IGF-1.',
  indicacoesEstudadas: [
    {
      condicao: 'Teste diagnóstico de deficiência de GH',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Sermorelin in GH deficiency testing', 
          fonte: 'J Clin Endocrinol Metab', 
          ano: 1994, 
          pmid: '8306969', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: 'Depende do protocolo',
    doseMedia: 'Conforme indicação clínica',
    doseMaxima: 'Conforme prescrição',
    frequencia: 'Conforme protocolo',
    vias: ['Subcutânea'],
    locaisAplicacao: ['Clínica'],
    duracaoMinima: 'Teste único',
    duracaoMaxima: 'Não aplicável',
    notas: 'Uso só diagnóstico (não terapêutico crônico). Não recomendado para uso contínuo sem supervisão especializada.',
    referencias: []
  },
  contraindicacoes: [
    {
      condicao: 'Neoplasia ativa',
      gravidade: 'alta',
      mecanismo: 'GH/IGF-1 proliferativo.',
      referencias: []
    },
    {
      condicao: 'Gravidez',
      gravidade: 'moderada',
      mecanismo: 'Dados humanos insuficientes.',
      referencias: []
    }
  ],
  interacoes: [],
  efeitosAdversos: [
    'Ondas de calor',
    'Dor no local da injeção (nos estudos)',
    'Cefaleia leve',
    'Náusea'
  ],
  statusWada: 'Proibido (S2 — secretagogos de GH em esportes)',
  monitoramento: [
    'GH sérico / IGF-1',
    'Prolactina (se indicado)'
  ],
  sinaisAlerta: [
    'Sintomas de hipoglicemia',
    'Dor intensa no local da injeção'
  ],
  referencias: [
    { 
      titulo: 'Sermorelin GHRH test', 
      fonte: 'J Clin Endocrinol Metab', 
      ano: 1994, 
      pmid: '8306969', 
      nivel: 'A', 
      modelo: 'human' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'artigo', 
      titulo: 'Sermorelin como teste de GH (PubMed)', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/8306969/' 
    }
  ]
};