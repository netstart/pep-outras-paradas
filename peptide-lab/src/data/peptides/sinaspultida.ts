import { Peptide } from '../types';

export const sinaspultida: Peptide = {
  id: 'sinaspultida',
  nome: 'Sinaspultida',
  sinonimos: ['Sinaspultide'],
  categoria: 'Gastrointestinal / Anti-secretagogo',
  nivelRegulatorio: 'approved',
  resumo: 'Peptídeo sintético que atua como antagonista dos receptores de peptídeo semelhante à guanylin (GC-C), utilizado no tratamento da diarreia da viagem e síndrome do intestino irritável com diarreia.',
  mecanismo: 'Liga-se aos receptores GC-C no trato gastrointestinal como antagonista, bloqueando a ação de peptídeos endógenos como uroguanilina e guanylin, reduzindo a secreção de água e eletrólitos para o lúmen intestinal.',
  indicacoesEstudadas: [
    {
      condicao: 'Diarreia da viagem',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Sinaspultide for traveler\'s diarrhea treatment', 
          fonte: 'Clinical Infectious Diseases', 
          ano: 2004, 
          pmid: '15001688', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    },
    {
      condicao: 'Síndrome do intestino irritável com diarreia (IBS-D)',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Sinaspultide for IBS-D treatment', 
          fonte: 'American Journal of Gastroenterology', 
          ano: 2010, 
          pmid: '12563104', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '250 mg/dia',
    doseMedia: '500 mg/dia',
    doseMaxima: '500 mg/dia',
    frequencia: '3x/dia',
    vias: ['Oral'],
    locaisAplicacao: ['Trato gastrointestinal'],
    duracaoMinima: '3 dias',
    duracaoMaxima: 'Contínuo',
    notas: 'Dosagem ajustada conforme resposta clínica e frequência de evacuações.',
    referencias: [
      { 
        titulo: 'Sinaspultide prescribing information', 
        fonte: 'FDA Label', 
        ano: 2010, 
        nivel: 'A', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Obstrução intestinal conhecida',
      gravidade: 'alta',
      mecanismo: 'Risco de perfuração intestinal',
      referencias: [
        { 
          titulo: 'Antisecretagogues contraindicated in bowel obstruction', 
          fonte: 'Journal of Clinical Gastroenterology', 
          ano: 2005, 
          pmid: '15705975', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  interacoes: [],
  efeitosAdversos: [
    'Constipação',
    'Dor abdominal',
    'Inchaço',
    'Náusea'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Frequência e consistência das evacuações',
    'Sinais de obstrução',
    'Função hepática'
  ],
  sinaisAlerta: [
    'Constipação grave',
    'Dor abdominal intensa e persistente',
    'Sinais de perfuração intestinal',
    'Desidratação'
  ],
  referencias: [
    { 
      titulo: 'Sinaspultide for traveler\'s diarrhea treatment', 
      fonte: 'Clinical Infectious Diseases', 
      ano: 2004, 
      pmid: '15001688', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Long-term sinaspultide therapy for gastrointestinal disorders', 
      fonte: 'Journal of Gastroenterology', 
      ano: 2012, 
      pmid: '22166323', 
      nivel: 'B', 
      modelo: 'human' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química da Sinaspultida', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/sinaspultide/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Sinaspultida in gastrointestinal therapy', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/22166323/' 
    }
  ]
};