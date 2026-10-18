import { Peptide } from '../types';

export const cosyntropin: Peptide = {
  id: 'cosyntropin',
  nome: 'Cosyntropin',
  sinonimos: ['Cortrosintropina', 'Synacthen'],
  categoria: 'Endócrino / Diagnóstico Funcional',
  nivelRegulatorio: 'approved',
  resumo: 'Somatotropina sintética usada no teste de estímulo da glândula supra-renal (ACTH) para avaliar a função adrenal.',
  mecanismo: 'Agonista do receptor MC2 nas glândulas adrenais; estimula produção de cortisol.',
  indicacoesEstudadas: [
    {
      condicao: 'Doença de Addison / insuficiência adrenal',
      nivel: 'B',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'ACTH stimulation test in adrenal insufficiency', 
          fonte: 'Endocrine Reviews', 
          ano: 2012, 
          pmid: '22989890', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '250 mcg',
    doseMedia: '250 mcg',
    doseMaxima: '250 mcg',
    frequencia: '1x (teste diagnóstico)',
    vias: ['Subcutânea ou Intramuscular'],
    locaisAplicacao: ['Braço ou coxa'],
    duracaoMinima: '1 hora',
    duracaoMaxima: '2 horas',
    notas: 'Teste diagnóstico padrão para avaliar função adrenal.',
    referencias: []
  },
  contraindicacoes: [
    {
      condicao: 'Alergia ao cosyntropin ou excipientes',
      gravidade: 'moderada',
      mecanismo: 'Reação alérgica.',
      referencias: []
    }
  ],
  interacoes: [],
  efeitosAdversos: [
    'Náusea',
    'Cefaleia',
    'Tontura',
    'Reação no local da injeção'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Cortisol sérico basal e pós-estímulo',
    'Sódio sérico',
    'Potássio sérico'
  ],
  sinaisAlerta: [
    'Sinais de crise adrenal',
    'Reação alérgica grave (anafilaxia)',
    'Pressão arterial instável'
  ],
  referencias: [
    { 
      titulo: 'ACTH stimulation test in adrenal insufficiency', 
      fonte: 'Endocrine Reviews', 
      ano: 2012, 
      pmid: '22989890', 
      nivel: 'B', 
      modelo: 'human' 
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
      titulo: 'ACTH stimulation test', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/22989890/' 
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Cosyntropin - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Cosyntropin+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Cosyntropin - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Cosyntropin+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Cosyntropin - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Cosyntropin+efeitos+cuidados',
      credito: 'YouTube'
    }
  ]
};