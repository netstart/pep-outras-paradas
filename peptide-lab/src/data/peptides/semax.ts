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
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'artigo', 
      titulo: 'Semax — PubMed', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/20361234/' 
    }
  ]
};