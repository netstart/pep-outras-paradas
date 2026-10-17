import { Peptide } from '../types';

export const tirzepatida: Peptide = {
  id: 'tirzepatida',
  nome: 'Tirzepatida',
  sinonimos: ['Tirzepatide', 'Mounjaro', 'Zepbound'],
  categoria: 'Metabólico / Emagrecimento',
  nivelRegulatorio: 'approved',
  resumo: 'Agonista dupla GIP/GLP-1 usado em DM2 e obesidade; redução significativa de peso em ensaios.',
  mecanismo: 'Agonista duplo de receptores GIP e GLP-1, ativando ambos os caminhos de sinalização sinérgicos.',
  indicacoesEstudadas: [
    {
      condicao: 'DM2 / obesidade',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Tirzepatide once weekly versus insulin glargine in type 2 diabetes (SURPASS-3)', 
          fonte: 'Lancet', 
          ano: 2021, 
          pmid: '34081798', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '2,5 mg/semana',
    doseMedia: '5–10 mg/semana',
    doseMaxima: '15 mg/semana',
    frequencia: '1x/semana',
    vias: ['Subcutânea'],
    locaisAplicacao: ['Abdome'],
    duracaoMinima: 'Conforme indicação',
    duracaoMaxima: 'Contínuo',
    notas: 'Titulação recomendada: iniciar 2,5mg/semana, aumentar 2,5mg a cada 4 semanas até dose máxima tolerada.',
    referencias: [
      { 
        titulo: 'Tirzepatide prescribing information', 
        fonte: 'FDA Label - Mounjaro', 
        ano: 2022, 
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
          titulo: 'FDA Boxed Warning: Tirzepatide and thyroid C-cell tumors', 
          fonte: 'FDA', 
          ano: 2022, 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  interacoes: [
    {
      substancia: 'Insulina ou secretagogos de insulina',
      tipo: 'cautela',
      mecanismo: 'Risco aumentado de hipoglicemia quando combinado.',
      referencias: [
        { 
          titulo: 'Drug interaction study: Tirzepatide with insulin lispro', 
          fonte: 'Clinical Pharmacology & Therapeutics', 
          ano: 2021, 
          pmid: '33873107', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  efeitosAdversos: [
    'Náusea',
    'Diarreia',
    'Vômito',
    'Redução do apetite',
    'Constipação',
    'Dispepsia',
    'Dor abdominal',
    'Hipoglicemia (em combinação com insulina ou sulfureias)'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Glicemia capilar ou HbA1c',
    'Função tiroideos (TSH, T4 livre) a cada 6-12 meses',
    'Peso corporal',
    'Sinais e sintomas de pancreatite',
    'Função renal (creatinina, eGFR)'
  ],
  sinaisAlerta: [
    'Dor abdominal intensa e persistente (possível pancreatite)',
    'Vômito persistente que impede hidratação',
    'Sinais de reação alérgica grave (anafilaxia)',
    'Massas ou nódulos tiroideos'
  ],
  referencias: [
    { 
      titulo: 'Tirzepatide once weekly versus insulin glargine in type 2 diabetes (SURPASS-3)', 
      fonte: 'Lancet', 
      ano: 2021, 
      pmid: '34081798', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Tirzepatide for obesity: SURMOUNT-1 trial', 
      fonte: 'N Engl J Med', 
      ano: 2022, 
      pmid: '35658024', 
      nivel: 'A', 
      modelo: 'human' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química da Tirzepatida', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/tirzepatide/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Tirzepatide for obesity treatment', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/35131555/' 
    }
  ]
};