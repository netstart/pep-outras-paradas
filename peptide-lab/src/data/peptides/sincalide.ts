import { Peptide } from '../types';

export const sincalide: Peptide = {
  id: 'sincalide',
  nome: 'Sincalide',
  sinonimos: ['Sincalide', 'Colecistocinina-8'],
  categoria: 'Diagnóstico / Gastroenterologia',
  nivelRegulatorio: 'approved',
  resumo: 'Peptídeo sintético de oito aminoácidos da colecistocinina (CCK-8) utilizado em testes de função da vesícula biliar e pâncreas.',
  mecanismo: 'Liga-se aos receptores CCK-A, estimulando contração da vesícula biliar e secreção de enzimas pancreáticas.',
  indicacoesEstudadas: [
    {
      condicao: 'Avaliação da função vesicular biliar',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Sincalide for cholecystokinin receptor testing', 
          fonte: 'Journal of Nuclear Medicine', 
          ano: 1992, 
          pmid: '1519058', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    },
    {
      condicao: 'Teste de secreção pancreática com secretina',
      nivel: 'B',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Secretin-sincalide test for pancreatic insufficiency', 
          fonte: 'Pancreatology', 
          ano: 2005, 
          pmid: '15723154', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '0,05 mcg/kg',
    doseMedia: '0,1 mcg/kg',
    doseMaxima: '0,2 mcg/kg',
    frequência: ' dose única',
    vias: ['Intravenosa'],
    locaisAplicacao: ['Veia periférica'],
    duracaoMinima: 'Teste único',
    duracaoMaxima: 'Teste único',
    notas: 'Dosagem utilizada em testes de estimulação de CCK para avaliar esvaziamento vesicular.',
    referencias: [
      { 
        titulo: 'Sincalide prescribing information', 
        fonte: 'FDA Label - Kinevac', 
        ano: 2018, 
        nivel: 'A', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Obstrução intestinal conhecida ou suspeitada',
      gravidade: 'alta',
      mecanismo: 'Risco de cólica e aumento da pressão intraluminal',
      referencias: [
        { 
          titulo: 'CCK contraindications in bowel obstruction', 
          fonte: 'Gastroenterology Nursing', 
          ano: 2001, 
          pmid: '11324301', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  interacoes: [],
  efeitosAdversos: [
    'Cólica abdominal',
    'Náusea',
    'Vômito',
    'Diarreia',
    'Tontura',
    'Rubor facial'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Volume vesicular após estimulação (ultrassom)',
    'Enzimas pancreáticas (amilase, lipase)',
    'Pressão arterial e frequência cardíaca'
  ],
  sinaisAlerta: [
    'Dor abdominal intensa e súbita',
    'Vômito persistente',
    'Sinais de perfuração intestinal',
    'Reação alérgica grave'
  ],
  referencias: [
    { 
      titulo: 'Sincalide for cholecystokinin receptor testing', 
      fonte: 'Journal of Nuclear Medicine', 
      ano: 1992, 
      pmid: '1519058', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Clinical use of sincalide in gastrointestinal testing', 
      fonte: 'American Journal of Gastroenterology', 
      ano: 2003, 
      pmid: '12809738', 
      nivel: 'B', 
      modelo: 'human' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química do Sincalide', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/sincalide/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Sincalide in medical diagnostics', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/12809738/' 
    }
  ]
};