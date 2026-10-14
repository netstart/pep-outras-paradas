import { Peptide } from '../types';

export const corticorelin: Peptide = {
  id: 'corticorelin',
  nome: 'Corticorelin',
  sinonimos: ['Corticorelin', 'hCRH'],
  categoria: 'Eixo HPA / Pesquisa',
  nivelRegulatorio: 'research',
  resumo: 'Análise do hormônio liberador de corticotropina (CRH) humano, utilizado em testes de função da eipófise e pesquisas sobre o eixo HPA.',
  mecanismo: 'Estimula a liberação de ACTH da hipófise anterior via receptor CRH1.',
  indicacoesEstudadas: [
    {
      condicao: 'Teste de função da eipófise anterior',
      nivel: 'B',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Human corticotropin-releasing hormone in the assessment of pituitary function', 
          fonte: 'Journal of Clinical Endocrinology & Metabolism', 
          ano: 1987, 
          pmid: '3037275', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '0,1 mcg/kg',
    doseMedia: '0,5 mcg/kg',
    doseMaxima: '1,0 mcg/kg',
    frequencia: ' dose única',
    vias: ['Intravenosa'],
    locaisAplicacao: ['Veia periférica'],
    duracaoMinima: 'Teste único',
    duracaoMaxima: 'Teste único',
    notas: 'Dose usada em teste de estimulação de CRH para avaliar resposta de ACTH e cortisol.',
    referencias: [
      { 
        titulo: 'CRH stimulation test protocol', 
        fonte: 'Journal of Clinical Endocrinology & Metabolism', 
        ano: 1993, 
        pmid: '8408476', 
        nivel: 'B', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipersensibilidade conhecida ao corticorelin ou a qualquer componente da formulação',
      gravidade: 'moderada',
      mecanismo: 'Reação alérgica potencial',
      referencias: [
        { 
          titulo: 'Corticorelin prescribing information', 
          fonte: 'FDA Label', 
          ano: 2020, 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  interacoes: [
    {
      substancia: 'Glicocorticoides',
      tipo: 'cautela',
      mecanismo: 'Pode mascarar insuficiência adrenal',
      referencias: [
        { 
          titulo: 'Interactions with CRH testing', 
          fonte: 'Endocrine Practice', 
          ano: 2010, 
          pmid: '20100321', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  efeitosAdversos: [
    'Rubor facial',
    'Dor de cabeça',
    'Tontura',
    'Náusea',
    'Sensação de calor'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'ACTH plasmático',
    'Cortisol plasmático',
    'Pressão arterial',
    'Frequência cardíaca'
  ],
  sinaisAlerta: [
    'Reação alérgica grave (anafilaxia)',
    'Hipotensão significativa',
    'Dor torácica'
  ],
  referencias: [
    { 
      titulo: 'Human corticotropin-releasing hormone in the assessment of pituitary function', 
      fonte: 'Journal of Clinical Endocrinology & Metabolism', 
      ano: 1987, 
      pmid: '3037275', 
      nivel: 'B', 
      modelo: 'human' 
    },
    { 
      titulo: 'Clinical use of corticotropin-releasing hormone', 
      fonte: 'Endocrine Reviews', 
      ano: 1994, 
      pmid: '8087731', 
      nivel: 'B', 
      modelo: 'human' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química do Corticorelin', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/corticorelin/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Corticorelin for pituitary function testing', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/8087731/' 
    }
  ]
};