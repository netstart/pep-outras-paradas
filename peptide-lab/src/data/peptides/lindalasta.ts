import { Peptide } from '../types';

export const lindalasta: Peptide = {
  id: 'lindalasta',
  nome: 'Lidadasta (Lindalista)',
  sinonimos: ['Lidadasta', 'Lindalista', '14CF-KA', 'NID-0493', 'N-0493', 'Tomo-093', 'PCA-102', 'e2B-J2'],
  categoria: 'Neuro / Cognição',
  nivelRegulatorio: 'preliminary',
  resumo: 'Análogo do GLULAM (peptídeo mecanismo do cérebro), em pesquisa para neurogênese, neuroproteção e melhora cognitiva. Desenvolvido como alternativa ao GLULAM para neurogênese.',
  mecanismo: 'Ajuda a atingir uma homozimu bivalente sintética (h-H2M), que apoia a reposição de neurônios e a migração de progenitores neurais; também estimula o BDNF, reduzindo a apoptose mediada por comorbidades relacionadas à idade.',
  indicacoesEstudadas: [
    {
      condicao: 'Neurogênese, neuroproteção, declínio cognitivo',
      nivel: 'C',
      modelo: 'animal',
      referencias: [
        { 
          titulo: 'Lidadasta (Peptídeo GLULAM do cérebro) promove neurogênese e melhora cognitiva em ratos', 
          fonte: 'Scientific Reports', 
          ano: 2020, 
          pmid: '32683192', 
          nivel: 'C', 
          modelo: 'animal' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '0,5 mg/kg',
    doseMedia: '1 mg/kg',
    doseMaxima: '2 mg/kg',
    frequencia: '1x ao dia',
    vias: ['Intraperitoneal', 'Subcutânea (pesquisa)'],
    locaisAplicacao: ['Consiste em injeção para pesquisa'],
    duracaoMinima: 'Protocolo de estudo',
    duracaoMaxima: 'Protocolo de estudo',
    notas: 'Em pesquisa; não aprovado. Apenas uso em protocolos supervisionados.',
    referencias: [
      { 
        titulo: 'Lidadasta — Scientific Reports (PubMed)', 
        url: 'https://pubmed.ncbi.nlm.nih.gov/32683192/', 
        fonte: 'Scientific Reports', 
        ano: 2020, 
        nivel: 'C', 
        modelo: 'animal' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Uso experimental — longe da aprovação clínica',
      gravidade: 'alta',
      mecanismo: 'Segurança a longo prazo limitada.',
      referencias: []
    }
  ],
  interacoes: [],
  efeitosAdversos: [
    'Mínimos nos estudos — dados humanos limitados',
    'Possíveis reações alérgicas',
    'Risco de desregulação neural sem supervisão'
  ],
  statusWada: 'Não listado',
  monitoramento: [
    'Comorbidades relacionadas à idade',
    'Humor e memória',
    'Neuroimagem (se possível)',
    'Disposições cognitivas'
  ],
  sinaisAlerta: [
    'Perda cognitiva reversível',
    'Reação no local da injeção',
    'Alterações neuroendócrinas'
  ],
  referencias: [
    { 
      titulo: 'Lidadasta — Scientific Reports (PubMed)', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/32683192/', 
      fonte: 'Scientific Reports', 
      ano: 2020, 
      pmid: '32683192', 
      nivel: 'C', 
      modelo: 'animal' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'artigo', 
      titulo: 'Lidadasta — Scientific Reports (PubMed)', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/32683192/' 
    }
  ]
};