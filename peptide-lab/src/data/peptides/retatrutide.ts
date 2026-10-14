import { Peptide } from '../types';

export const retatrutide: Peptide = {
  id: 'retatrutide',
  nome: 'Retatrutide',
  sinonimos: ['Retatrutide', 'LY-3437943', 'Triple agonist GLP-1/GIP/GCGR'],
  categoria: 'Metabólico / Emagrecimento',
  nivelRegulatorio: 'research',
  resumo: 'Triplo agonista dos receptores GLP-1, GIP e GCGR desenvolvido pela Eli Lilly para obesidade e diabetes tipo 2. Mais potente que tirzepatida (duplo agonista).',
  mecanismo: 'Ativa simultaneamente os receptores GLP-1 (incretina), GIP (peptídeo insulinotrópico dependente de glicose) e GCGR (receptor de glucagon), produzindo perda de peso e melhora glicêmica superior aos agonistas duplos ou simples.',
  indicacoesEstudadas: [
    {
      condicao: 'Obesidade severa',
      nivel: 'B',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Retatrutide, a triple GIP/GLP-1/glucagon receptor agonist for obesity', 
          fonte: 'The Lancet', 
          ano: 2023, 
          pmid: '37343779', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '0,5 mg/semana',
    doseMedia: '4 mg/semana',
    doseMaxima: '12 mg/semana',
    frequencia: '1x/semana',
    vias: ['Subcutânea'],
    locaisAplicacao: ['Abdome', 'Coxas'],
    duracaoMinima: '4 semanas',
    duracaoMaxima: 'Contínuo',
    notas: 'Titulação gradual para minimizar efeitos gastrointestinais. Em estudo para obesidade severa.',
    referencias: [
      { 
        titulo: 'Phase 2 trial of retatrutide in obesity', 
        fonte: 'NEJM', 
        ano: 2023, 
        nivel: 'B', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Histórico de carcinoma medular de tiroides (CMT) ou NEM2',
      gravidade: 'alta',
      mecanismo: 'Risco teórico semelhante ao dos agonistas GLP-1',
      referencias: []
    },
    {
      condicao: 'Gravidez e lactação',
      gravidade: 'moderada',
      mecanismo: 'Sem dados de segurança em humanos',
      referencias: []
    }
  ],
  interacoes: [],
  efeitosAdversos: [
    'Náusea',
    'Vômito',
    'Diarreia',
    'Constipação',
    'Dor abdominal',
    'Redução do apetite',
    'Tontura'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Peso corporal',
    'Glicemia de jejum',
    'Função tiroideos (TSH)',
    'Função renal e hepática',
    'Pressão arterial'
  ],
  sinaisAlerta: [
    'Náusea/vomito intenso que impede alimentação',
    'Dor abdominal intensa e persistente',
    'Sinais de pancreatite',
    'Massas ou nódulos tiroideos'
  ],
  referencias: [
    { 
      titulo: 'Retatrutide, a triple GIP/GLP-1/glucagon receptor agonist for obesity', 
      fonte: 'The Lancet', 
      ano: 2023, 
      pmid: '37343779', 
      nivel: 'B', 
      modelo: 'human' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura do Retatrutide (LY-3437943)', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/retatrutide/PNG', 
      credito: 'PubChem' 
    }
  ]
};