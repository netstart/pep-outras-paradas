import { Peptide } from '../types';

export const alphabol: Peptide = {
  id: 'alphabol',
  nome: 'Alphabol (Dianabol)',
  sinonimos: ['Alphabol', 'Metandienona', 'Metandrostenolona', 'Dianabol'],
  categoria: 'Esteroide Anabolizante',
  nivelRegulatorio: 'offlabel',
  resumo: 'Um dos esteroides anabolizantes orais mais potentes, conhecido por ganhos rápidos de massa muscular e força. Derivado da testosterona.',
  mecanismo: 'Fortemente androgênico e anabolizante. Liga-se aos receptores de androgênios, aumentando a síntese proteica, retenção de nitrogênio e glicogenólise.',
  indicacoesEstudadas: [],
  dosagem: {
    doseMinima: '10 mg/dia',
    doseMedia: '20-30 mg/dia',
    doseMaxima: '50 mg/dia',
    frequencia: '1x/dia',
    vias: ['Oral'],
    locaisAplicacao: ['Trato gastrointestinal'],
    duracaoMinima: '4 semanas',
    duracaoMaxima: '6 semanas',
    notas: 'Uso não médico; dose inicial para iniciantes. Risco de toxicidade hepática aumenta com dose e duração.',
    referencias: []
  },
  contraindicacoes: [
    {
      condicao: 'Gravidez ou amamentação',
      gravidade: 'alta',
      mecanismo: 'Virilização fetal e riscos maternos.',
      referencias: []
    },
    {
      condicao: 'Câncer de próstata ou mama',
      gravidade: 'alta',
      mecanismo: 'Estimulação de tecidos sensíveis a androgênios.',
      referencias: []
    },
    {
      condicao: 'Hipertensão não controlada',
      gravidade: 'moderada',
      mecanismo: 'Risco de hipertensão e retenção hídrica.',
      referencias: []
    }
  ],
  interacoes: [
    {
      substancia: 'Anticoagulantes',
      tipo: 'cautela',
      mecanismo: 'Potencialização do efeito anticoagulante.',
      referencias: []
    },
    {
      substancia: 'Insulina ou hipoglicemiantes orais',
      tipo: 'cautela',
      mecanismo: 'Pode alterar a sensibilidade à insulina.',
      referencias: []
    }
  ],
  efeitosAdversos: [
    'Retenção significativa de líquidos',
    'Ginecomastia (via aromatização para estradiol)',
    'Hipertensão arterial',
    'Acne severa',
    'Queda de cabelo (em predispostos)',
    'Toxicidade hepática (elevação de transaminases)',
    'Alterações no perfil lipídico',
    'Supressão do eixo hipotálamo-hipófise-gônada',
    'Virilização em mulheres'
  ],
  statusWada: 'Proibido',
  monitoramento: [
    'Função hepática (AST, ALT, bilirrubina)',
    'Perfil lipídico',
    'Contagem completo de sangue',
    'PSA (em homens)',
    'Testosterona sérica',
    'Pressão arterial'
  ],
  sinaisAlerta: [
    'Icterícia ou urina escura (sinais de toxicidade hepática)',
    'Dor abdominal intensa',
    'Sangramento inexplicável',
    'Sinais de virilização em mulheres',
    'Edema ou ganho de peso rápido',
    'Dor torácica ou palpitations'
  ],
  referencias: [],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura do Metandienona', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/methandienone/PNG', 
      credito: 'PubChem' 
    }
  ]
};