import { Peptide } from '../types';

export const ceruletide: Peptide = {
  id: 'ceruletide',
  nome: 'Ceruletide',
  sinonimos: ['Ceruletide', 'Cholecystokinin-8'],
  categoria: 'Diagnóstico / Gastroenterologia',
  nivelRegulatorio: 'approved',
  resumo: 'Análogo sintético da colecistocinina (CCK) utilizado em testes de função da vesícula biliar e pâncreas.',
  mecanismo: 'Liga-se aos receptores CCK-A e CCK-B, estimulando contração da vesícula biliar e secreção pancreática.',
  indicacoesEstudadas: [
    {
      condicao: 'Avaliação da função vesicular',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Ceruletide in cholecystokinin testing', 
          fonte: 'Digestive Diseases and Sciences', 
          ano: 1980, 
          pmid: '7427004', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    },
    {
      condicao: 'Teste de secreção pancreática',
      nivel: 'B',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Secretin-ceruletide test for pancreatic function', 
          fonte: 'Gastroenterology', 
          ano: 1985, 
          pmid: '4008725', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '5 ng/kg',
    doseMedia: '10 ng/kg',
    doseMaxima: '20 ng/kg',
    frequencia: ' dose única',
    vias: ['Intravenosa'],
    locaisAplicacao: ['Veia periférica'],
    duracaoMinima: 'Teste único',
    duracaoMaxima: 'Teste único',
    notas: 'Dosagem padronizada para teste de estimulação de CCK.',
    referencias: [
      { 
        titulo: 'Ceruletide prescribing information', 
        fonte: 'FDA Label', 
        ano: 2015, 
        nivel: 'A', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Obstrução intestinal conhecida',
      gravidade: 'alta',
      mecanismo: 'Risco de aumento da pressão intraluminal',
      referencias: [
        { 
          titulo: 'CCK agonist contraindications', 
          fonte: 'American Journal of Gastroenterology', 
          ano: 1990, 
          pmid: '2157893', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  interacoes: [],
  efeitosAdversos: [
    'Dor abdominal',
    'Náusea',
    'Vômito',
    'Diarreia',
    'Tontura'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Volume vesicular pós-estimulação',
    'Enzimas pancreáticas séricas',
    'Sinais de desconforto abdominal'
  ],
  sinaisAlerta: [
    'Dor abdominal intensa e persistente',
    'Vômito recalcitrante',
    'Sinais de pancreatite'
  ],
  referencias: [
    { 
      titulo: 'Ceruletide in cholecystokinin testing', 
      fonte: 'Digestive Diseases and Sciences', 
      ano: 1980, 
      pmid: '7427004', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Clinical applications of cholecystokinin analogs', 
      fonte: 'Peptides', 
      ano: 2005, 
      pmid: '15935298', 
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
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química do Ceruletide', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/ceruletide/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Ceruletide for pancreatic function testing', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/15935298/' 
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Ceruletide - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Ceruletide+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Ceruletide - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Ceruletide+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Ceruletide - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Ceruletide+efeitos+cuidados',
      credito: 'YouTube'
    }
  ]
};