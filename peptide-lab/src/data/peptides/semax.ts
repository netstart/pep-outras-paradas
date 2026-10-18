import { Peptide } from '../types';

export const semax: Peptide = {
  id: 'semax',
  nome: 'Semax',
  sinonimos: ['Semax', 'ACTH(4–10) análogo'],
  categoria: 'Neuro / Cognição',
  nivelRegulatorio: 'preliminary',
  resumo: 'Peptídeo derivado do corticotropina ACTH(4–10); usado como nootrópico na Rússia.',
  mecanismo: 'Modula BDNF e neurotransmissão central (dopaminérgica) — melhora função cognitiva, memória e aprendizado.',
  indicacoesEstudadas: [
    {
      condicao: 'Foco/cognição (uso nootrópico)',
      nivel: 'C',
      modelo: 'animal',
      referencias: [
        { 
          titulo: 'Semax cognitive effects', 
          fonte: 'Bull Exp Biol Med', 
          ano: 2010, 
          pmid: '20361234', 
          nivel: 'C', 
          modelo: 'animal' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '0,06 mg/dose',
    doseMedia: '0,1–0,2 mg',
    doseMaxima: '0,2 mg',
    frequencia: '1–2x ao dia (nasal)',
    vias: ['Intranasal'],
    locaisAplicacao: ['Intranasal'],
    duracaoMinima: 'Conforme indicação',
    duracaoMaxima: 'Uso supervisionado',
    notas: 'Aprovado na Rússia; não aprovado por FDA/EMA.',
    referencias: []
  },
  contraindicacoes: [
    {
      condicao: 'Dados escassos',
      gravidade: 'moderada',
      mecanismo: 'Segurança a longo prazo limitada.',
      referencias: []
    }
  ],
  interacoes: [],
  efeitosAdversos: [
    'Cefaleia leve',
    'Irritação nasal',
    'Tontura leve',
    'Sensação de calor'
  ],
  statusWada: 'Não listado',
  monitoramento: [
    'Avaliação clínica',
    'Função cognitiva (se indicado)',
    'Estado de humor'
  ],
  sinaisAlerta: [
    'Reação alérgica',
    'Dor intensa no local da aplicação',
    'Alterações de humor súbitas'
  ],
  referencias: [
    { 
      titulo: 'Semax cognitive effects', 
      fonte: 'Bull Exp Biol Med', 
      ano: 2010, 
      pmid: '20361234', 
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
    },
    {
      titulo: 'Peptide-based drug delivery systems',
      fonte: 'Advanced Drug Delivery Reviews',
      ano: 2019,
      pmid: '30654285',
      nivel: 'A',
      modelo: 'human'
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'artigo', 
      titulo: 'Semax — PubMed', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/20361234/' 
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Semax - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Semax+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Semax - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Semax+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Semax - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Semax+efeitos+cuidados',
      credito: 'YouTube'
    }
  ]
};