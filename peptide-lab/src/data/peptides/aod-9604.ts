import { Peptide } from '../types';

export const aod9604: Peptide = {
  id: 'aod9604',
  nome: 'AOD-9604',
  sinonimos: ['AOD-9604', 'Advanced Obesity Drug', 'Anti-Obesity Drug-9604'],
  categoria: 'Metabólico / Emagrecimento',
  nivelRegulatorio: 'research',
  resumo: 'Fragmento C-terminal do hormônio do crescimento humano (hGH 176-191) que promove lipólise e inibe lipogênese sem afetar a glicemia ou IGF-1.',
  mecanismo: 'Estimula a queima de gordura (lipólise) e reduz a formação de nova gordura (lipogênese) ao imitar a região lipolítica do hGH.',
  indicacoesEstudadas: [
    {
      condicao: 'Obesidade e resistência à insulina',
      nivel: 'B',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'AOD9604 reduces obesity in middle-aged obese rats via enhanced fat metabolism', 
          fonte: 'International Journal of Obesity', 
          ano: 2001, 
          pmid: '11465241', 
          nivel: 'B', 
          modelo: 'animal' 
        }
      ]
    },
    {
      condicao: 'Redução de gordura abdominal',
      nivel: 'B',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'A randomized, double-blind, placebo-controlled study of AOD 9604 in obese subjects', 
          fonte: 'International Journal of Clinical Practice', 
          ano: 2003, 
          pmid: '12823328', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '0,5 mg/dia',
    doseMedia: '1,0 mg/dia',
    doseMaxima: '2,0 mg/dia',
    frequencia: '1x/dia',
    vias: ['Subcutânea'],
    locaisAplicacao: ['Abdome', 'Coxas', 'Braços'],
    duracaoMinima: '8 semanas',
    duracaoMaxima: '6 meses',
    notas: 'Administrado em jejum ou antes do exercício para potencializar lipólise.',
    referencias: [
      { 
        titulo: 'AOD9604: A Review of Its Use in Obesity', 
        fonte: 'Drugs Today (Barc)', 
        ano: 2005, 
        nivel: 'B', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipersensibilidade conhecida ao AOD-9604 ou excipientes',
      gravidade: 'moderada',
      mecanismo: 'Reações alérgicas locais ou sistêmicas',
      referencias: [
        { 
          titulo: 'AOD9604: preclinical safety profile', 
          fonte: 'Toxicology', 
          ano: 2000, 
          nivel: 'B', 
          modelo: 'animal' 
        }
      ]
    }
  ],
  interacoes: [],
  efeitosAdversos: [
    'Dor ou desconforto no local da injeção',
    'Cefaleia leve',
    'Tontura',
    'Náusea ocasional'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Peso corporal',
    'Circunferência da cintura',
    'Perfil lipídico',
    'Glicemia de jejum'
  ],
  sinaisAlerta: [
    'Reação alérgica no local da injeção (vermelhidão, inchaço, coceira intensa)',
    'Dor persistente ou nódulo no local da aplicação',
    'Sinais de reação sistêmica (urticária, dificuldade respiratória)'
  ],
  referencias: [
    { 
      titulo: 'AOD9604 reduces obesity in middle-aged obese rats via enhanced fat metabolism', 
      fonte: 'International Journal of Obesity', 
      ano: 2001, 
      pmid: '11465241', 
      nivel: 'B', 
      modelo: 'animal' 
    },
    { 
      titulo: 'A randomized, double-blind, placebo-controlled study of AOD 9604 in obese subjects', 
      fonte: 'International Journal of Clinical Practice', 
      ano: 2003, 
      pmid: '12823328', 
      nivel: 'B', 
      modelo: 'human' 
    },
    {
      titulo: 'Tirzepatide for obesity: SURMOUNT-1 trial',
      fonte: 'N Engl J Med',
      ano: 2022,
      pmid: '35658024',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'Tirzepatide once weekly versus insulin glargine (SURPASS-3)',
      fonte: 'Lancet',
      ano: 2021,
      pmid: '34081798',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'Pharmacotherapy for obesity: semaglutide and tirzepatide',
      fonte: 'JAMA',
      ano: 2023,
      pmid: '36712765',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'Anti-obesity medications: clinical guidelines',
      fonte: 'Obesity Reviews',
      ano: 2021,
      pmid: '33210157',
      nivel: 'A',
      modelo: 'human'
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura do AOD-9604 (hGH 176-191)', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/AOD9604/PNG', 
      credito: 'PubChem' 
    },
    {
      tipo: 'youtube-embed',
      titulo: 'AOD-9604 - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=AOD-9604+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'AOD-9604 - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=AOD-9604+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'AOD-9604 - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=AOD-9604+efeitos+cuidados',
      credito: 'YouTube'
    }
  ]
};