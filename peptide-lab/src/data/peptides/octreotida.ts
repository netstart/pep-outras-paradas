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
    }
  ]
};