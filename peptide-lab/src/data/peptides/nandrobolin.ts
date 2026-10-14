import { Peptide } from '../types';

export const nandrobolin: Peptide = {
  id: 'nandrobolin',
  nome: 'Nandrobolin (Deca)',
  sinonimos: ['Nandrobolin', 'Nandrolona', 'Deca-Durabolin', 'Deca'],
  categoria: 'Esteroide Anabolizante',
  nivelRegulatorio: 'offlabel',
  resumo: 'Nandrolona (19-nortestosterona) é um dos esteroides anabolizantes mais populares e utilizados para ganho de massa muscular e força. Conhecida por efeitos relativamente suaves comparado a outros.',
  mecanismo: 'Liga-se aos receptores de androgênios, mas com muito menos atividade androgênica que a testosterona. Promove síntese proteica, retenção de nitrogênio e produção de eritropoietina. Também melhora a síntese de colágeno.',
  indicacoesEstudadas: [],
  dosagem: {
    doseMinima: '200 mg/semana',
    doseMedia: '300-400 mg/semana',
    doseMaxima: '600 mg/semana',
    frequencia: '1x/semana',
    vias: ['Intramuscular'],
    locaisAplicacao: ['Glúteos', 'Deltoides', 'Coxas'],
    duracaoMinima: '8 semanas',
    duracaoMaxima: '16 semanas',
    notas: 'Consideravelmente menos androgenica que a testosterona. Efeitos de retenção de água são menores que outros esteroides. Risco de supressão significativa.',
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
    },
    {
      condicao: 'Doença renal',
      gravidade: 'moderada',
      mecanismo: 'Nandrolona pode piorar a função renal em doses altas.',
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
    'Agressividade',
    'Fadiga',
    'Pechincha nocturna'
  ],
  statusWada: 'Proibido',
  monitoramento: [
    'Função hepática (AST, ALT, bilirrubina)',
    'Perfil lipídico',
    'Contagem completo de sangue',
    'PSA (em homens)',
    'Testosterona sérica',
    'Estradiol',
    'Hemoglobina e hematócrito',
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
      titulo: 'Estrutura da Nandrolona (19-nortestosterona)', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/nandrolone/PNG', 
      credito: 'PubChem' 
    }
  ]
};