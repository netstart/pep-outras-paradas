import { Peptide } from '../types';

export const semaglutida: Peptide = {
  id: 'semaglutida',
  nome: 'Semaglutida',
  sinonimos: ['Semaglutide', 'Ozempic', 'Wegovy', 'Rybelsus'],
  categoria: 'Metabólico / Emagrecimento',
  nivelRegulatorio: 'approved',
  resumo: 'Agonista do receptor GLP-1 com maior afinidade e duração que a liraglutida. Aprovado para diabetes tipo 2, obesidade e risco cardiovascular.',
  mecanismo: 'Agonista GLP-1 com acilação que estende meia-vida (aproximadamente 1 semana). Estimula insulina, suprime glucagon, atrasa esvaziamento gástrico.',
  indicacoesEstudadas: [
    {
      condicao: 'DM2 com redução de HbA1c',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Semaglutide in type 2 diabetes: SUSTAIN-6 trial', 
          fonte: 'NEJM', 
          ano: 2016, 
          pmid: '27040065', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    },
    {
      condicao: 'Obesidade (IMC ≥30 ou ≥27 com comorbidades)',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Semaglutide for obesity: STEP 1 trial', 
          fonte: 'NEJM', 
          ano: 2021, 
          pmid: '33753755', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '0,25 mg/semana',
    doseMedia: '0,5–1,0 mg/semana',
    doseMaxima: '2,4 mg/semana',
    frequencia: '1x/semana',
    vias: ['Subcutânea'],
    locaisAplicacao: ['Abdome'],
    duracaoMinima: 'Conforme prescrição',
    duracaoMaxima: 'Contínuo',
    notas: 'Titulação recomendada para minimizar efeitos gastrointestinais.',
    referencias: [
      { 
        titulo: 'Semaglutide prescribing information', 
        fonte: 'FDA Label - Ozempic/Wegovy', 
        ano: 2023, 
        nivel: 'A', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Histórico de carcinoma medular de tiroides (CMT) ou síndrome de neoplasias endócrinas múltiplas tipo 2 (NEM2)',
      gravidade: 'alta',
      mecanismo: 'Aumento de incidência de tumores tiroideos C em estudos em roedores (alerta FDA caixa preta).',
      referencias: [
        { 
          titulo: 'FDA Boxed Warning: Semaglutide and thyroid C-cell tumors', 
          fonte: 'FDA', 
          ano: 2019, 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  interacoes: [],
  efeitosAdversos: [
    'Náusea',
    'Vômito',
    'Diarreia',
    'Constipação',
    'Dor abdominal',
    'Dispepsia',
    'Tontura',
    'Fadiga'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Glicemia capilar ou HbA1c',
    'Função tiroideos (TSH, T4 livre) a cada 6-12 meses',
    'Peso corporal',
    'Pressão arterial',
    'Função renal'
  ],
  sinaisAlerta: [
    'Dor abdominal intensa e persistente (possível pancreatite)',
    'Náusea/vomito que impede alimentação',
    'Sinais de reação alérgica grave',
    'Massas ou nódulos tiroideos'
  ],
  referencias: [
    { 
      titulo: 'Semaglutide in type 2 diabetes: SUSTAIN-6 trial', 
      fonte: 'NEJM', 
      ano: 2016, 
      pmid: '27040065', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Semaglutide for obesity: STEP 1 trial', 
      fonte: 'NEJM', 
      ano: 2021, 
      pmid: '33753755', 
      nivel: 'A', 
      modelo: 'human' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química da Semaglutida', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/semaglutide/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Semaglutide for cardiovascular outcomes', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/27040065/' 
    }
  ]
};