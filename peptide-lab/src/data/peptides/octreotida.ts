import { Peptide } from '../types';

export const octreotida: Peptide = {
  id: 'octreotida',
  nome: 'Octreotida',
  sinonimos: ['Octreotide', 'Sandostatin', 'Sandostatin LAR'],
  categoria: 'Endócrino / Neuroendócrino',
  nivelRegulatorio: 'approved',
  resumo: 'Análogo do somatostatina, aprovado para acromegalia, tumores neuroendócrinos e hemorragia por varizes esofágicas. Reduz secreções de hormônios GI/GH.',
  mecanismo: 'Agonista dos receptores de somatostatina; inibe GH, insulina, glucagon, TSH.',
  indicacoesEstudadas: [
    {
      condicao: 'Acromegalia (controle sintomático e tumoral)',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Octreotide long-acting in acromegaly: clinical trials', 
          fonte: 'J Clin Endocrinol Metab', 
          ano: 1998, 
          pmid: '9658057', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    },
    {
      condicao: 'Tumores neuroendócrinos funcionais (sintomas)',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Octreotide in carcinoid syndrome — randomized trials', 
          fonte: 'N Engl J Med', 
          ano: 1986, 
          pmid: '3496865', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '100 mcg 3x/dia',
    doseMedia: '100–200 mcg 2–3x/dia',
    doseMaxima: '600 mcg/dia (dividido)',
    frequencia: 'Subcutânea ou IV (depósito: 1x/4 semanas para LAR)',
    vias: ['Subcutânea', 'Intramuscular (depósito)'],
    locaisAplicacao: ['Abdome', 'Coxa', 'Braço (SC)'],
    duracaoMinima: 'Conforme indicação',
    duracaoMaxima: 'Uso crônico supervisionado',
    notas: 'Ajuste consoante formulário (LAR = depósito mensal).',
    referencias: [
      { 
        titulo: 'Octreotide acromegaly trial (JCEM)', 
        fonte: 'J Clin Endocrinol Metab', 
        ano: 1998, 
        pmid: '9658057', 
        nivel: 'A', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Colelitíase / obstrução biliar',
      gravidade: 'alta',
      mecanismo: 'Inibição da secreção biliar; risco de litíase.',
      referencias: []
    },
    {
      condicao: 'Gravidez',
      gravidade: 'moderada',
      mecanismo: 'Dados limitados.',
      referencias: []
    }
  ],
  interacoes: [
    {
      substancia: 'Bloqueadores de canais de cálcio',
      tipo: 'cautela',
      mecanismo: 'Bradicardia aditiva.',
      referencias: []
    },
    {
      substancia: 'Insulina / hipoglicemiantes',
      tipo: 'cautela',
      mecanismo: 'Altera secreções de insulina/glucagon.',
      referencias: []
    }
  ],
  efeitosAdversos: [
    'Náusea',
    'Diarreia',
    'Flatulência',
    'Colelitíase (crônico)',
    'Taquicardia/bradicardia',
    'Dor abdominal',
    'Dispepsia'
  ],
  statusWada: 'Não proibido (fora do contexto esportivo específico)',
  monitoramento: [
    'Função da vésicula biliar (ultrassom anual)',
    'TSH',
    'Glicemia',
    'Níveis de GH/IGF-1 (em acromegalia)'
  ],
  sinaisAlerta: [
    'Dor abdominal aguda (possível colecistite)',
    'Arritmias',
    'Icterícia',
    'Dor no local da injeção persistente'
  ],
  referencias: [
    { 
      titulo: 'Octreotide acromegaly trial (JCEM)', 
      fonte: 'J Clin Endocrinol Metab', 
      ano: 1998, 
      pmid: '9658057', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Octreotide in carcinoid syndrome — NEJM', 
      fonte: 'N Engl J Med', 
      ano: 1986, 
      pmid: '3496865', 
      nivel: 'A', 
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
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura do octreotide (PubChem)', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/octreotide/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Octreotide trial — PubMed', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/9658057/' 
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Octreotida - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Octreotida+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Octreotida - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Octreotida+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Octreotida - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Octreotida+efeitos+cuidados',
      credito: 'YouTube'
    }
  ]
};