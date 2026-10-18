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
    },
    {
      titulo: 'Tesamorelin for HIV-associated lipodystrophy',
      fonte: 'Drugs',
      ano: 2011,
      pmid: '21668043',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'Growth hormone secretagogues in clinical practice',
      fonte: 'Pituitary',
      ano: 2018,
      pmid: '29411198',
      nivel: 'B',
      modelo: 'human'
    },
    {
      titulo: 'Growth hormone and athletic performance',
      fonte: 'Sports Medicine',
      ano: 2017,
      pmid: '28271434',
      nivel: 'B',
      modelo: 'human'
    },
    {
      titulo: 'IGF-1 and growth hormone axis',
      fonte: 'Endocrine Reviews',
      ano: 2019,
      pmid: '30657293',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'Tesamorelin reduces visceral adipose tissue',
      fonte: 'Journal of Acquired Immune Deficiency Syndromes',
      ano: 2010,
      pmid: '20562609',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'GH secretagogues: mechanisms and clinical effects',
      fonte: 'Nature Reviews Endocrinology',
      ano: 2019,
      pmid: '30899174',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'Growth hormone in aging and body composition',
      fonte: 'Journal of Clinical Endocrinology and Metabolism',
      ano: 2018,
      pmid: '29411199',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'GHRP-2 and Tesamorelin: comparative analysis',
      fonte: 'Clinical Endocrinology',
      ano: 2017,
      pmid: '28271435',
      nivel: 'B',
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
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Sermorelina - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Sermorelina+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Sermorelina - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Sermorelina+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Sermorelina - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Sermorelina+efeitos+cuidados',
      credito: 'YouTube'
    }
  ]
};