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
      modelo: 'human' 
    },
    { 
      titulo: 'BPC 157 prevents and heals gastric ulcers in rats', 
      fonte: 'FASEB Journal', 
      ano: 2004, 
      pmid: '15117864', 
      nivel: 'B', 
      modelo: 'animal' 
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
    }
  ]
};