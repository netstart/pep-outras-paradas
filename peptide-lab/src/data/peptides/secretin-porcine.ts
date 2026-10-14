import { Peptide } from '../types';

export const secretinPorcine: Peptide = {
  id: 'secretin-porcine',
  nome: 'Secretin (porcine)',
  sinonimos: ['Secretin porcina', 'Secretina de porco'],
  categoria: 'Diagnóstico / Gastroenterologia',
  nivelRegulatorio: 'approved',
  resumo: 'Hormônio secretina de origem porcina utilizado em testes de função pancreática, semelhante à secretina humana.',
  mecanismo: 'Estimula a secreção de bicarbonato e enzimas pelo pâncreas e inibe a produção gástrica de ácido (ação similar à secretina humana).',
  indicacoesEstudadas: [
    {
      condicao: 'Teste de função pancreática',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Porcine secretin in pancreatic function testing', 
          fonte: 'Digestive Diseases and Sciences', 
          ano: 1982, 
          pmid: '7063421', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '0,25 mcg/kg',
    doseMedia: '0,5 mcg/kg',
    doseMaxima: '1,0 mcg/kg',
    frequência: ' dose única',
    vias: ['Intravenosa'],
    locaisAplicacao: ['Veia periférica'],
    duracaoMinima: 'Teste único',
    duracaoMaxima: 'Teste único',
    notas: 'Dosagem similar à secretina humana para testes de estimulação pancreática.',
    referencias: [
      { 
        titulo: 'Porcine secretin prescribing information', 
        fonte: 'Veterinary Label', 
        ano: 2010, 
        nivel: 'B', 
        modelo: 'animal' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipersensibilidade conhecida à secretina porcina',
      gravidade: 'moderada',
      mecanismo: 'Reação alérgica potencial',
      referencias: [
        { 
          titulo: 'Allergic reactions to porcine secretin', 
          fonte: 'Journal of Veterinary Pharmacology', 
          ano: 2005, 
          pmid: '15801402', 
          nivel: 'B', 
          modelo: 'animal' 
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
    'Hipotensão significativa',
    'Reação alérgica local'
  ],
  referencias: [
    { 
      titulo: 'Porcine secretin in pancreatic function testing', 
      fonte: 'Digestive Diseases and Sciences', 
      ano: 1982, 
      pmid: '7063421', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Comparative secretin function across species', 
      fonte: 'American Journal of Physiology', 
      ano: 1995, 
      pmid: '7601430', 
      nivel: 'B', 
      modelo: 'human' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química da Secretina porcina', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/porcine+secretin/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Porcine secretin in medical use', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/7601430/' 
    }
  ]
};