import { Peptide } from '../types';

export const trembolona: Peptide = {
  id: 'trembolona',
  nome: 'Trembolona',
  sinonimos: ['Trenbolone', 'Tren'],
  categoria: 'Esteroide Anabolizante',
  nivelRegulatorio: 'offlabel',
  resumo: 'Esteroide injetável potente, promove ganho de massa muscular magra e aumento de força, com forte efeito lipolítico.',
  mecanismo: 'Liga-se aos receptores de androgênios com alta afinidade, estimulando síntese protéica e redução de gordura.',
  indicacoesEstudadas: [
    {
      condicao: 'Aumento de força e massa magra',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        {
          titulo: 'Trenbolone: a review of its pharmacological effects',
          fonte: 'Steroids',
          ano: 2015,
          pmid: '25913128',
          nivel: 'A',
          modelo: 'human'
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '50 mg/semana',
    doseMedia: '75-100 mg/semana',
    doseMaxima: '150 mg/semana',
    frequencia: '1x/semana',
    vias: ['Intramuscular'],
    locaisAplicacao: ['Glúteo'],
    duracaoMinima: '6 semanas',
    duracaoMaxima: '12 semanas',
    notas: 'Doses elevadas aumentam risco de efeitos adversos severos.',
    referencias: []
  },
  contraindicacoes: [
    {
      condicao: 'Doença cardiovascular grave',
      gravidade: 'alta',
      mecanismo: 'Risco de hipertensão, aterosclerose e infarto.',
      referencias: []
    },
    {
      condicao: 'Doença psiquiátrica',
      gravidade: 'alta',
      mecanismo: 'Potencial precipitação de agressividade, depressão ou psicose.',
      referencias: []
    },
    {
      condicao: 'Hipertensão não controlada',
      gravidade: 'moderada',
      mecanismo: 'Aumento da pressão arterial.',
      referencias: []
    }
  ],
  interacoes: [
    {
      substancia: 'Outros esteroides anabolizantes',
      tipo: 'cautela',
      mecanismo: 'Potencial sinergia tóxica.',
      referencias: []
    }
  ],
  efeitosAdversos: [
    'Agressividade',
    'Insônia',
    'Sudorese noturna',
    'Hipertensão',
    'Acne',
    'Queda de cabelo',
    'Virilização em mulheres',
    'Supressão do eixo gonadal',
    'Toxicidade hepática',
    'Alterações de humor',
    'Insônia'
  ],
  statusWada: 'Proibido',
  monitoramento: [
    'Pressão arterial',
    'Perfil lipídico',
    'Função hepática',
    'Testosterona sérica',
    'LH/FSH',
    'Hemograma'
  ],
  sinaisAlerta: [
    'Agressividade extrema',
    'Insônia severa',
    'Sudorese noturna',
    'Hipertensão severa',
    'Icterícia',
    'Dor abdominal',
    'Sangramento inexplicável',
    'Sinais de virilização',
    'Edema'
  ],
  referencias: [],
  revisadoEm: '2026-10 (placeholder)',
  revisadoPor: 'Equipe editorial — dados fictícios para demonstração',
  midias: []
};
