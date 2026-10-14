import { Peptide } from '../types';

export const decaDurateston: Peptide = {
  id: 'induject-250',
  nome: 'Durateston 250 (Induject-250)',
  sinonimos: ['Durateston 250', 'Induject-250', 'Durateston', 'Testosterone Blend'],
  categoria: 'Esteroide Anabolizante',
  nivelRegulatorio: 'offlabel',
  resumo: 'Mistura de quatro ésteres de testosterona (testosterona propionato, fenilpropionato, isocaproato e decanoato) que proporciona liberação sustentada de testosterona. Padrão de referência para terapia de reposição e aumento de massa.',
  mecanismo: 'Liberam testosterona em diferentes velocidades, mantendo níveis séricos estáveis ao longo de 2-3 semanas. Aumenta a síntese proteica, retenção de nitrogênio e produção de eritropoietina.',
  indicacoesEstudadas: [],
  dosagem: {
    doseMinima: '250 mg/semana',
    doseMedia: '500 mg/semana',
    doseMaxima: '750 mg/semana',
    frequencia: '1x/semana',
    vias: ['Intramuscular'],
    locaisAplicacao: ['Glúteos', 'Deltoides'],
    duracaoMinima: '8 semanas',
    duracaoMaxima: '12 semanas',
    notas: 'A mistura dos ésteres permite aplicação semanal. Uso apenas em protocolos de pesquisa supervisionados.',
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
      condicao: 'Hipertensão não controlada',
      gravidade: 'moderada',
      mecanismo: 'Aumento da pressão arterial e retenção hídrica.',
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
    'Alterações na função hepática'
  ],
  statusWada: 'Proibido',
  monitoramento: [
    'Função hepática (AST, ALT, bilirrubina)',
    'Perfil lipídico',
    'Contagem completo de sangue',
    'PSA (em homens)',
    'Testosterona sérica',
    'Estradiol',
    'Pressão arterial',
    'Função renal'
  ],
  sinaisAlerta: [
    'Icterícia ou urina escura',
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
      titulo: 'Estrutura dos ésteres de testosterona (Durateston 250)', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/testosterone/PNG', 
      credito: 'PubChem' 
    }
  ]
};