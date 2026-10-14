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
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'artigo', 
      titulo: 'ACTH stimulation test', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/22989890/' 
    }
  ]
};