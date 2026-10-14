import { Peptide } from '../types';

export const saralasina: Peptide = {
  id: 'saralasina',
  nome: 'Saralasina',
  sinonimos: ['Saralasin', 'Angiotensina converter'],
  categoria: 'Cardiovascular / Antagonista da Angiotensina',
  nivelRegulatorio: 'offlabel',
  resumo: 'Peptídeo sintético que atua como antagonista competitivo dos receptores de angiotensina II, utilizado historicamente no teste de função do sistema renina-angiotensina.',
  mecanismo: 'Liga-se aos receptores AT1 bloqueando a ação da angiotensina II, mas também possui atividade agonista parcial em alguns tecidos.',
  indicacoesEstudadas: [
    {
      condicao: 'Teste de função do sistema renina-angiotensina',
      nivel: 'B',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Saralasin test for renin-angiotensin system function', 
          fonte: 'Hypertension', 
          ano: 1978, 
          pmid: '634821', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '0,5 mcg/kg/min',
    doseMedia: '1,0 mcg/kg/min',
    doseMaxima: '2,0 mcg/kg/min',
    frequência: 'Infusão contínua',
    vias: ['Intravenosa'],
    locaisAplicacao: ['Veia periférica'],
    duracaoMinima: '30 minutos',
    duracaoMaxima: '2 horas',
    notas: 'Utilizado em teste de captopril para avaliar resposta do sistema renina-angiotensina.',
    referencias: [
      { 
        titulo: 'Saralasin prescribing information (histórico)', 
        fonte: 'FDA Label (descontinuado)', 
        ano: 1985, 
        nivel: 'B', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipertensão não controlada',
      gravidade: 'moderada',
      mecanismo: 'Risco de aumento da pressão arterial devido à atividade agonista parcial',
      referencias: [
        { 
          titulo: 'Saralasin in hypertension', 
          fonte: 'Journal of Clinical Epidemiology', 
          ano: 1985, 
          pmid: '3892711', 
          nivel: 'B', 
          modelo: 'human' 
        }
      }
    }
  ],
  interacoes: [],
  efeitosAdversos: [
    'Hipertensão arterial paradoxal',
    'Tontura',
    'Dor de cabeça',
    'Náusea'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Pressão arterial',
    'Frequência cardíaca',
    'Nível de renina plasmática',
    'Nível de angiotensina II plasmática'
  ],
  sinaisAlerta: [
    'Hipertensão significativa',
    'Dor torácica',
    'Sinais de isquemia miocárdica'
  ],
  referencias: [
    { 
      titulo: 'Saralasin test for renin-angiotensin system function', 
      fonte: 'Hypertension', 
      ano: 1978, 
      pmid: '634821', 
      nivel: 'B', 
      modelo: 'human' 
    },
    { 
      titulo: 'Structure-activity relationship of angiotensin analogs', 
      fonte: 'Journal of Cardiovascular Pharmacology', 
      ano: 1988, 
      pmid: '3285291', 
      nivel: 'B', 
      modelo: 'human' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química da Saralasina', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/saralasin/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Saralasina in cardiovascular research', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/3285291/' 
    }
  ]
};