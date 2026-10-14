import { Peptide } from '../types';

export const exenatida: Peptide = {
  id: 'exenatida',
  nome: 'Exenatida',
  sinonimos: ['Exenatide', 'Byetta'],
  categoria: 'Metabólico / GLP-1',
  nivelRegulatorio: 'approved',
  resumo: 'Análogo sintético do peptídeo similares ao glucagon-like peptide-1 (GLP-1) derivado da saliva de lagarto Gila, utilizado no tratamento do diabetes tipo 2.',
  mecanismo: 'Agonista do receptor GLP-1; estimula a secreção de insulina dependente de glicose, inibe a secreção de glucagon e retarda o esvaziamento gástrico.',
  indicacoesEstudadas: [
    {
      condicao: 'Diabetes tipo 2',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Exenatide for type 2 diabetes treatment', 
          fonte: 'Diabetes Care', 
          ano: 2006, 
          pmid: '16322095', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '5 mcg/dia',
    doseMedia: '10 mcg/dia',
    doseMaxima: '10 mcg/dia',
    frequência: '2x/dia',
    vias: ['Subcutânea'],
    locaisAplicacao: ['Abdome', 'Coxa'],
    duracaoMinima: '4 semanas',
    duracaoMaxima: 'Contínuo',
    notas: 'Dosagem ajustada conforme resposta glicêmica e tolerabilidade gastrointestinal.',
    referencias: [
      { 
        titulo: 'Exenatide prescribing information', 
        fonte: 'FDA Label - Byetta', 
        ano: 2020, 
        nivel: 'A', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipersensibilidade conhecida à exenatida',
      gravidade: 'moderada',
      mecanismo: 'Reação alérgica potencial',
      referencias: [
        { 
          titulo: 'Allergic reactions to exenatide', 
          fonte: 'Drug Safety', 
          ano: 2005, 
          pmid: '15792507', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    },
    {
      condicao: 'Doença gastrointestinal grave (gastroparese)',
      gravidade: 'moderada',
      mecanismo: 'Risco de piora do esvaziamento gástrico',
      referencias: [
        { 
          titulo: 'Exenatide in gastroparesis', 
          fonte: 'American Journal of Gastroenterology', 
          ano: 2007, 
          pmid: '17255904', 
          nivel: 'B', 
          modelo: 'human' 
        }
      }
    }
  ],
  interacoes: [],
  efeitosAdversos: [
    'Náusea',
    'Vômito',
    'Diarreia',
    'Constipação',
    'Dor de cabeça',
    'Tontura'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Glicemia capilar ou HbA1c',
    'Peso corporal',
    'Sinais de pancreatite',
    'Função hepática'
  ],
  sinaisAlerta: [
    'Dor abdominal intensa e persistente (possível pancreatite)',
    'Náusea/vomito persistente',
    'Hipoglicemia (quando combinado com sulfonilureias ou insulina)'
  ],
  referencias: [
    { 
      titulo: 'Exenatide for type 2 diabetes treatment', 
      fonte: 'Diabetes Care', 
      ano: 2006, 
      pmid: '16322095', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Long-term exenatide therapy for type 2 diabetes', 
      fonte: 'Journal of Clinical Endocrinology & Metabolism', 
      ano: 2008, 
      pmid: '18263055', 
      nivel: 'B', 
      modelo: 'human' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química da Exenatida', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/exenatide/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Exenatida in diabetes therapy', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/18263055/' 
    }
  ]
};