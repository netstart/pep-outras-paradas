import { Peptide } from '../types';

export const secretinHumano: Peptide = {
  id: 'secretin-humano',
  nome: 'Secretin (humano)',
  sinonimos: ['Secretin', 'Secretina humana'],
  categoria: 'Diagnóstico / Gastroenterologia',
  nivelRegulatorio: 'approved',
  resumo: 'Hormônio secretina humano utilizado em testes de função pancreática e avaliação do refluxo gastroesofágico.',
  mecanismo: 'Estimula a secreção de bicarbonato e enzimas pelo pâncreas e inibe a produção gástrica de ácido.',
  indicacoesEstudadas: [
    {
      condicao: 'Teste de função pancreática',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Secretin test for pancreatic function', 
          fonte: 'Gastroenterology', 
          ano: 1976, 
          pmid: '957744', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    },
    {
      condicao: 'Avaliação do refluxo gastroesofágico',
      nivel: 'B',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Secretin for GERD diagnosis', 
          fonte: 'American Journal of Gastroenterology', 
          ano: 2003, 
          pmid: '12809738', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '0,25 mcg/kg',
    doseMedia: '0,5 mcg/kg',
    doseMaxima: '1,0 mcg/kg',
    frequencia: ' dose única',
    vias: ['Intravenosa'],
    locaisAplicacao: ['Veia periférica'],
    duracaoMinima: 'Teste único',
    duracaoMaxima: 'Teste único',
    notas: 'Dosagem utilizada no teste de estimulação de secretina para avaliar resposta pancreática.',
    referencias: [
      { 
        titulo: 'Secretin prescribing information', 
        fonte: 'FDA Label', 
        ano: 2015, 
        nivel: 'B', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipersensibilidade conhecida à secretina',
      gravidade: 'moderada',
      mecanismo: 'Reação alérgica potencial',
      referencias: [
        { 
          titulo: 'Secretin allergy case reports', 
          fonte: 'Journal of Allergy and Clinical Immunology', 
          ano: 1998, 
          pmid: '9661188', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  interacoes: [],
  efeitosAdversos: [
    'Rubor facial',
    'Tontura',
    'Pressão arterial baixa',
    'Dor de cabeça',
    'Náusea leve'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Secreção pancreática de bicarbonato',
    'Enzimas pancreáticas (amilase, tripsina)',
    'Pressão arterial',
    'Frequência cardíaca'
  ],
  sinaisAlerta: [
    'Reação alérgica grave',
    'Hipotensão significativa (>20% queda na PA)',
    'Dor torácica'
  ],
  referencias: [
    { 
      titulo: 'Secretin test for pancreatic function', 
      fonte: 'Gastroenterology', 
      ano: 1976, 
      pmid: '957744', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Secretin and gastrointestinal function', 
      fonte: 'Physiological Reviews', 
      ano: 2001, 
      pmid: '11427893', 
      nivel: 'B', 
      modelo: 'human' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química da Secretina humana', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/secretin/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Secretin in medical diagnostics', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/11427893/' 
    }
  ]
};