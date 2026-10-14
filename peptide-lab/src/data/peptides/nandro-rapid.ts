import { Peptide } from '../types';

export const nandroRapid: Peptide = {
  id: 'nandro-rapid',
  nome: 'NandroRapid (NPP)',
  sinonimos: ['NandroRapid', 'Nandrolona Phenylpropionate', 'NPP'],
  categoria: 'Esteroide Anabolizante',
  nivelRegulatorio: 'offlabel',
  resumo: 'Éster fenilpropionato da nandrolona. Liberação rápida comparado à decanoato (Deca). Conhecido por ganhos de massa muscular e força com retenção de água menor.',
  mecanismo: 'Liga-se aos receptores de androgênios, promovendo síntese proteica e retenção de nitrogênio com meia-vida mais curta que o decanoato. Assim como a nandrolona, mas com efeitos mais rápidos e de curta duração.',
  indicacoesEstudadas: [],
  dosagem: {
    doseMinima: '100 mg/semana',
    doseMedia: '200-300 mg/semana',
    doseMaxima: '400 mg/semana',
    frequencia: '1-2 vezes/semana',
    vias: ['Intramuscular'],
    locaisAplicacao: ['Glúteos', 'Deltoides'],
    duracaoMinima: '4 semanas',
    duracaoMaxima: '12 semanas',
    notas: 'Éster de ação rápida. Ideal para ciclos mais curtos. Menor retenção de água que a decanoato.',
    referencias: []
  },
  contraindicacoes: [
    {
      condicao: 'Gravidez ou amamentação',
      gravidade: 'alta',
      mecanismo: 'Risco de virilização fetal e riscos maternos.',
      referencias: []
    },
    {
      condicao: 'Câncer de próstata ou mama',
      gravidade: 'alta',
      mecanismo: 'Estimulação de tecidos sensíveis a androgênios.',
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
    'Retenção de líquidos',
    'Ginecomastia',
    'Aumento de pressão arterial',
    'Acne',
    'Queda de cabelo',
    'Alterações no perfil lipídico',
    'Supressão do eixo hipotálamo-hipófise-gônada',
    'Virilização em mulheres',
    'Agressividade'
  ],
  statusWada: 'Proibido',
  monitoramento: [
    'Função hepática (AST, ALT, bilirrubina)',
    'Perfil lipídico',
    'Contagem completo de sangue',
    'PSA (em homens)',
    'Testosterona sérica',
    'Estradiol',
    'Pressão arterial'
  ],
  sinaisAlerta: [
    'Icterícia ou urina escura',
    'Dor abdominal intensa',
    'Sangramento inexplicável',
    'Sinais de virilização em mulheres',
    'Edema ou ganho de peso rápido',
    'Agressividade extrema'
  ],
  referencias: [],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura da Nandrolona Fenilpropionato', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/nandrolone/PNG', 
      credito: 'PubChem' 
    }
  ]
};