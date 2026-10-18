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
    },
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
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'artigo', 
      titulo: 'Lidadasta — Scientific Reports (PubMed)', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/32683192/' 
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Lidadasta (Lindalista) - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Lidadasta+(Lindalista)+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Lidadasta (Lindalista) - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Lidadasta+(Lindalista)+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Lidadasta (Lindalista) - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Lidadasta+(Lindalista)+efeitos+cuidados',
      credito: 'YouTube'
    }
  ]
};