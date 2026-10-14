import { Peptide } from '../types';

export const tirzepatideEmagrecedor: Peptide = {
  id: 'tirzepatide-emagrecedor',
  nome: 'Tirzepatide',
  sinonimos: ['Tirzepatide', 'Mounjaro', 'Zepbound', 'Duplo agonista GIP/GLP-1'],
  categoria: 'Metabólico / Emagrecimento',
  nivelRegulatorio: 'approved',
  resumo: 'Duplo agonista dos receptores GIP e GLP-1 desenvolvido pela Eli Lilly. Aprovado para diabetes tipo 2 e obesidade. Mais eficaz que agonistas simples GLP-1.',
  mecanismo: 'Ativa simultaneamente os receptores GIP (potente insulinotrópico dependente de glicose) e GLP-1, produzindo efeitos sinérgicos na secreção de insulina, supressão do apetite e controle glicêmico.',
  indicacoesEstudadas: [
    {
      condicao: 'DM2',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Tirzepatide in type 2 diabetes: SURPASS-2 trial', 
          fonte: 'NEJM', 
          ano: 2021, 
          pmid: '33503188', 
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
          titulo: 'Tirzepatide for obesity: SURMOUNT-1 trial', 
          fonte: 'NEJM', 
          ano: 2022, 
          pmid: '35239704', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '2,5 mg/semana',
    doseMedia: '5,0-10,0 mg/semana',
    doseMaxima: '15,0 mg/semana',
    frequencia: '1x/semana',
    vias: ['Subcutânea'],
    locaisAplicacao: ['Abdome'],
    duracaoMinima: 'Conforme prescrição',
    duracaoMaxima: 'Contínuo',
    notas: 'Titulação recomendada para minimizar efeitos gastrointestinais. Doses variam conforme indicação (DM2 vs obesidade).',
    referencias: [
      { 
        titulo: 'Tirzepatide prescribing information', 
        fonte: 'FDA Label - Mounjaro/Zepbound', 
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
          titulo: 'FDA Boxed Warning: Tirzepatide and thyroid C-cell tumors', 
          fonte: 'FDA', 
          ano: 2022, 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  interacoes: [],
  efeitosAdversos: [
    'Náusea',
    'Diarreia',
    'Vômito',
    'Diminuição do apetite',
    'Indigestão',
    'Constipação',
    'Tontura'
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
      titulo: 'Tirzepatide in type 2 diabetes: SURPASS-2 trial', 
      fonte: 'NEJM', 
      ano: 2021, 
      pmid: '33503188', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Tirzepatide for obesity: SURMOUNT-1 trial', 
      fonte: 'NEJM', 
      ano: 2022, 
      pmid: '35239704', 
      nivel: 'A', 
      modelo: 'human' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura do Tirzepatide', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/tirzepatide/PNG', 
      credito: 'PubChem' 
    }
  ]
};