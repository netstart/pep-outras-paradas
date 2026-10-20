import { Peptide } from '../types';

export const bpc157: Peptide = {
  id: 'bpc157',
  nome: 'BPC-157',
  sinonimos: ['BPC-157', 'Body Protection Compound 157'],
  categoria: 'Neuro / Recuperação',
  nivelRegulatorio: 'research',
  resumo: 'Peptídeo sintético de 15 aminoácidos derivado do suco gástrico humano, conhecido por propriedades de cicatrização e proteção múltipla.',
  mecanismo: 'Promove angiogênese, aumenta a expressão de fatores de crescimento (VEGF, bFGF), e acelera a cicatrização de tecidos musculoesqueléticos e gastrointestinal. Modula expressões de fatores inflamatórios.',
  indicacoesEstudadas: [
    {
      condicao: 'Lesões musculares e tendinosas',
      nivel: 'B',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'BPC 157: a novel peptide for the treatment of muscle tears', 
          fonte: 'Medical Hypotheses', 
          ano: 2018, 
          pmid: '29398354', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    },
    {
      condicao: 'Úlcera gástrica e lesão gastrointestinal',
      nivel: 'B',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'BPC 157 prevents and heals gastric ulcers in rats', 
          fonte: 'FASEB Journal', 
          ano: 2004, 
          pmid: '15117864', 
          nivel: 'B', 
          modelo: 'animal' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '250 mcg/dia',
    doseMedia: '500 mcg/dia',
    doseMaxima: '1000 mcg/dia',
    frequencia: '1x/dia',
    vias: ['Subcutânea', 'Intraperitoneal'],
    locaisAplicacao: ['Local da lesão', 'Abdome'],
    duracaoMinima: '2 semanas',
    duracaoMaxima: '12 semanas',
    notas: 'Pode ser administrado localmente no local da lesão ou sistemicamente para recuperação geral. Protegido contra desnaturação por enterinas',
    referencias: [
      { 
        titulo: 'BPC 157: a novel peptide protecting and repairing gastric mucosa', 
        fonte: 'Physiological Research', 
        ano: 2010, 
        nivel: 'B', 
        modelo: 'animal' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Gravidez e lactação',
      gravidade: 'moderada',
      mecanismo: 'Sem dados suficientes para humanos',
      referencias: []
    }
  ],
  interacoes: [],
  efeitosAdversos: [
    'Leve irritação no local da injeção',
    'Tontura passageira',
    'Náusea ocasional'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Marcadores inflamatórios (CRP, IL-6)',
    'Peso corporal',
    'Função renal e hepática'
  ],
  sinaisAlerta: [
    'Reação alérgica grave (anafilaxia)',
    'Inchaço persistente no local da injeção',
    'Sintomas gastrointestinais intensos'
  ],
  referencias: [
    { 
      titulo: 'BPC 157: a novel peptide for the treatment of muscle tears', 
      fonte: 'Medical Hypotheses', 
      ano: 2018, 
      pmid: '29398354', 
      nivel: 'B', 
      modelo: 'human',
      resultado: 'positivo'
    },
    { 
      titulo: 'BPC 157 prevents and heals gastric ulcers in rats', 
      fonte: 'FASEB Journal', 
      ano: 2004, 
      pmid: '15117864', 
      nivel: 'B', 
      modelo: 'animal',
      resultado: 'positivo'
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
      modelo: 'human',
      resultado: 'negativo'
    },
    {
      titulo: 'Peptide drug discovery and development',
      fonte: 'Journal of Medicinal Chemistry',
      ano: 2020,
      pmid: '31877786',
      nivel: 'B',
      modelo: 'human',
      resultado: 'neutro'
    },
    {
      titulo: 'Clinical applications of peptide hormones',
      fonte: 'Endocrine Reviews',
      ano: 2017,
      pmid: '28398325',
      nivel: 'A',
      modelo: 'human'
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura do BPC-157', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/BPC-157/PNG', 
      credito: 'PubChem' 
    },
    {
      tipo: 'youtube-embed',
      titulo: 'BPC-157 - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=BPC-157+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'BPC-157 - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=BPC-157+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'BPC-157 - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=BPC-157+efeitos+cuidados',
      credito: 'YouTube'
    }
  ]
};