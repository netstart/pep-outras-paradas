import { Peptide } from '../types';

export const boldenona: Peptide = {
  id: 'boldenona',
  nome: 'Boldenona',
  sinonimos: ['Boldenona', 'Boldenone', 'Equipoise', 'EQ', 'Boldebol'],
  categoria: 'Esteroide Anabolizante',
  nivelRegulatorio: 'offlabel',
  resumo: 'Esteroide anabolizante derivado da testosterona, popular no mundo do bodybuilding e performance. Conhecido por efeitos suaves e aumento de massa muscular magra.',
  mecanismo: 'Liga-se aos receptores de androgênios, promovendo síntese proteica e retenção de nitrogênio. Também aumenta a produção de eritropoietina, melhorando a oxigenação muscular.',
  indicacoesEstudadas: [],
  dosagem: {
    doseMinima: '200 mg/semana',
    doseMedia: '300-500 mg/semana',
    doseMaxima: '600 mg/semana',
    frequencia: '2 vezes/semana',
    vias: ['Intramuscular'],
    locaisAplicacao: ['Glúteos', 'Deltoides', 'Coxas'],
    duracaoMinima: '8 semanas',
    duracaoMaxima: '12 semanas',
    notas: 'Uso não médico apenas por protocolos de pesquisa. Risco de virilização e alteração do perfil lipídico.',
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
    'Acne',
    'Queda de cabelo',
    'Alterações no lípideo (redução HDL)',
    'Supressão do eixo hipotálamo-hipófise-gônada',
    'Virilização em mulheres',
    'Agressividade (em alguns casos)'
  ],
  statusWada: 'Proibido',
  monitoramento: [
    'Função hepática (AST, ALT, bilirrubina)',
    'Perfil lipídico',
    'Contagem completo de sangue',
    'PSA (em homens)',
    'Testosterona sérica',
    'Hemoglobina e hematócrito'
  ],
  sinaisAlerta: [
    'Icterícia ou urina escura',
    'Dor abdominal intensa',
    'Sangramento inexplicável',
    'Sinais de virilização em mulheres',
    'Edema ou ganho de peso rápido'
  ],
  referencias: [],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura da Boldenona', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/boldenone/PNG', 
      credito: 'PubChem' 
    }
  ]
};