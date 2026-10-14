import { Peptide } from '../types';

export const linasclotide: Peptide = {
  id: 'linasclotide',
  nome: 'Linasclotide',
  sinonimos: ['Linasclotide'],
  categoria: 'Gastrointestinal / Secretagogo',
  nivelRegulatorio: 'approved',
  resumo: 'Peptídeo sintético de 15 aminoácidos que atua como agonista dos receptores de peptídeo semelhante à guanylin (GC-C), utilizado no tratamento da constipação crônica idiopática e síndrome do intestino irritável com constipação.',
  mecanismo: 'Liga-se aos receptores GC-C no trato gastrointestinal, aumentando a produção de GMPc, que leva à secreção de água e eletrólitos para o lúmen intestinal, promovendo a motilidade.',
  indicacoesEstudadas: [
    {
      condicao: 'Constipação crônica idiopática',
      nível: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Linaclotide for chronic idiopathic constipation treatment', 
          fonte: 'The Lancet', 
          ano: 2012, 
          pmid: '22166323', 
          nível: 'A', 
          modelo: 'human' 
        }
      ]
    },
    {
      condicao: 'Síndrome do intestino irritável com constipação (IBS-C)',
      nível: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Linaclotide for IBS-C treatment', 
          fonte: 'Gastroenterology', 
          ano: 2014, 
          pmid: '24635343', 
          nível: 'A', 
          modelo: 'human' 
        }
      }
    ]
  ],
  dosagem: {
    doseMinima: '145 mcg/dia',
    doseMedia: '290 mcg/dia',
    doseMaxima: '290 mcg/dia',
    frequência: '1x/dia',
    vias: ['Oral'],
    locaisAplicacao: ['Trato gastrointestinal'],
    duracaoMinima: '2 semanas',
    duracaoMaxima: 'Contínuo',
    notas: 'Tomado em jejum, pelo menos 30 minutos antes da primeira refeição do dia.',
    referencias: [
      { 
        titulo: 'Linaclotide prescribing information', 
        fonte: 'FDA Label - Linzess', 
        ano: 2020, 
        nível: 'A', 
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
          titulo: 'Secretagogues contraindicated in bowel obstruction', 
          fonte: 'Journal of Clinical Gastroenterology', 
          ano: 2005, 
          pmid: '15705975', 
          nível: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  interacoes: [],
  efeitosAdversos: [
    'Diarreia',
    'Dor abdominal',
    'Inchaço',
    'Gás',
    'Distensão abdominal'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Frequência e consistência das evacuações',
    'Sinais de obstrução',
    'Função hepática'
  ],
  sinaisAlerta: [
    'Diarreia grave',
    'Dor abdominal intensa e persistente',
    'Sinais de perfuração intestinal',
    'Desidratação'
  ],
  referencias: [
    { 
      titulo: 'Linaclotide for chronic idiopathic constipation treatment', 
      fonte: 'The Lancet', 
      ano: 2012, 
      pmid: '22166323', 
      nível: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Long-term linaclotide therapy for gastrointestinal disorders', 
      fonte: 'Journal of Gastroenterology', 
      ano: 2015, 
      pmid: '25561157', 
      nível: 'B', 
      modelo: 'human' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química da Linasclotide', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/linasclotide/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Linasclotide in gastrointestinal therapy', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/25561157/' 
    }
  ]
};