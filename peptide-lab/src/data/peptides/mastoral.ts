import { Peptide } from '../types';

export const mastoral: Peptide = {
  id: 'mastoral',
  nome: 'Mastoral (Masteron)',
  sinonimos: ['Masteron', 'Masteron oral', 'Drostanolone Propionate'],
  categoria: 'Esteroide Anabolizante',
  nivelRegulatorio: 'offlabel',
  resumo: 'Esteroide anabolizante derivado da di-hidrotestosterona, usado para aumentar massa magra sem retenção de água. Muito popular em ciclos de definição.',
  mecanismo: 'Liga-se aos receptores de androgênios, promovendo síntese proteica e aumento de massa magra sem aromatizar facilmente para estradiol.',
  indicacoesEstudadas: [],
  dosagem: {
    doseMinima: '50 mg/dia',
    doseMedia: '75-100 mg/dia',
    doseMaxima: '120 mg/dia',
    frequencia: '1x/dia',
    vias: ['Oral'],
    locaisAplicacao: ['Trato gastrointestinal'],
    duracaoMinima: '4 semanas',
    duracaoMaxima: '12 semanas',
    notas: 'Efeito de “cutting” (definição). Não aromatiza facilmente. Pode causar virilização em mulheres.',
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
  interacoes: [],
  efeitosAdversos: [
    'Acne',
    'Queda de cabelo',
    'Alterações no lípideo',
    'Supressão do eixo hipotálamo-hipófise-gônada',
    'Virilização em mulheres',
    'Aumento da pressão arterial',
    'Retenção de líquidos',
    'Fadiga'
  ],
  statusWada: 'Proibido',
  monitoramento: [
    'Função hepática',
    'Perfil lipídico',
    'PSA (em homens)',
    'Testosterona sérica',
    'Pressão arterial'
  ],
  sinaisAlerta: [
    'Reação alérgica no local da injeção',
    'Virilização em mulheres (aprofundamento da voz, crescimento de pelos faciais)',
    'Aumento da pressão arterial',
    'Alterações no humor'
  ],
  referencias: [],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura do Drostanolona (Masteron)', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/drostanolone/PNG', 
      credito: 'PubChem' 
    }
  ]
};