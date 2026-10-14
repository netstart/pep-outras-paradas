import { Peptide } from '../types';

export const halotestin: Peptide = {
  id: 'halotestin',
  nome: 'Halotestin (Halotestin)',
  sinonimos: ['Halotestin', 'Fluoximesterone', 'Halotest-50'],
  categoria: 'Esteroide Anabolizante',
  nivelRegulatorio: 'offlabel',
  resumo: 'Esteroide anabolizante altamente androgênico, derivado da testosterona. Conhecido por força muscular extrema, aumento de agressividade e ganho de força. Uso restrito a regimes supervisionados.',
  mecanismo: 'Liga-se aos receptores de androgênios com alta afinidade, produzindo efeitos anabolizantes intensos e efeitos colaterais androgênicos significativos.',
  indicacoesEstudadas: [],
  dosagem: {
    doseMinima: '5 mg/dia',
    doseMedia: '10-20 mg/dia',
    doseMaxima: '30 mg/dia',
    frequencia: '1x/dia',
    vias: ['Oral'],
    locaisAplicacao: ['Trato gastrointestinal'],
    duracaoMinima: '4 semanas',
    duracaoMaxima: '6 semanas',
    notas: 'Muito potente; usar apenas com experiência prévia em esteroides. Risco de toxicidade hepática e efeitos colaterais androgênicos.',
    referencias: []
  },
  contraindicacoes: [
    {
      condicao: 'Gravidez ou amamentação',
      gravidade: 'alta',
      mecanismo: 'Risco de virilização fetal.',
      referencias: []
    },
    {
      condicao: 'Câncer de próstata ou mama',
      gravidade: 'alta',
      mecanismo: 'Aumento do crescimento de tecidos sensíveis a androgênios.',
      referencias: []
    },
    {
      condicao: 'Hipertensão não controlada',
      gravidade: 'moderada',
      mecanismo: 'Risco de agravamento.',
      referencias: []
    }
  ],
  interacoes: [
    {
      substancia: 'Anticoagulantes',
      tipo: 'cautela',
      mecanismo: 'Potencialização do efeito anticoagulante.',
      referencias: []
    }
  ],
  efeitosAdversos: [
    'Agressividade e instabilidade emocional',
    'Acne severa',
    'Queda de cabelo',
    'Hepatotoxicidade',
    'Virilização em mulheres',
    'Retenção de líquidos e inchaço',
    'Alterações no perfil lipídico',
    'Supressão do eixo hipotálamo-hipófise-gônada'
  ],
  statusWada: 'Proibido',
  monitoramento: [
    'Função hepática (AST, ALT, bilirrubina)',
    'Perfil lipídico',
    'Contagem completo de sangue',
    'PSA (em homens)',
    'Testosterona sérica',
    'Psicometria/monitoramento da agressividade',
    'Pressão arterial'
  ],
  sinaisAlerta: [
    'Icterícia ou urina escura',
    'Dor abdominal intensa',
    'Sangramento inexplicável',
    'Sinais de virilização em mulheres (aprofundamento da voz, crescimento de pelos faciais)',
    'Agressividade extrema',
    'Edema ou ganho de peso rápido'
  ],
  referencias: [],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura do Fluoximesterona', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/fluoximesterone/PNG', 
      credito: 'PubChem' 
    }
  ]
};