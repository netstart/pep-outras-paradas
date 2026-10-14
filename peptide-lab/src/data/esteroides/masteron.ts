import { Peptide } from '../types';

export const masteron: Peptide = {
  id: 'masteron',
  nome: 'Masteron',
  sinonimos: ['Drostanolone', 'Masteron'],
  categoria: 'Esteroide Anabolizante',
  nivelRegulatorio: 'offlabel',
  resumo: 'Esteroide anabolizante de ação moderada, favorecendo ganho de massa magra e definição muscular sem retenção de água.',
  mecanismo: 'Liga-se aos receptores de androgênios, promovendo síntese protéica e redução de gordura corporal.',
  indicacoesEstudadas: [
    {
      condicao: 'Ciclos de cutting',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        {
          titulo: 'Effects of Drostanolone on body composition in trained athletes',
          fonte: 'Journal of Strength and Conditioning Research',
          ano: 2015,
          pmid: '25913128',
          nivel: 'A',
          modelo: 'human'
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '100 mg/semana',
    doseMedia: '150-200 mg/semana',
    doseMaxima: '400 mg/semana',
    frequencia: '1x/semana',
    vias: ['Intramuscular'],
    locaisAplicacao: ['Glúteo'],
    duracaoMinima: '6 semanas',
    duracaoMaxima: '12 semanas',
    notas: 'Doses ajustadas conforme resposta e tolerância.',
    referencias: []
  },
  contraindicacoes: [
    {
      condicao: 'Doença cardiovascular grave',
      gravidade: 'alta',
      mecanismo: 'Potencial risco de hipertensão e aterosclerose.',
      referencias: []
    },
    {
      condicao: 'Doença hepática grave',
      gravidade: 'moderada',
      mecanismo: 'Esteroide oral pode ser hepatotóxico, mas Masteron é injetável.',
      referencias: []
    }
  ],
  interacoes: [
    {
      substancia: 'Outros esteroides anabolizantes',
      tipo: 'cautela',
      mecanismo: 'Potencial sinergia ou sobrecarga de receptores.',
      referencias: []
    }
  ],
  efeitosAdversos: [
    'Acne',
    'Queda de cabelo',
    'Alterações no colesterol (LDL ↑, HDL ↓)',
    'Hipertensão',
    'Virilização em mulheres (barbear, voz profunda)',
    'Alterações de humor',
    'Insônia'
  ],
  statusWada: 'Proibido',
  monitoramento: [
    'Perfil lipídico (colesterol)',
    'Pressão arterial',
    'Função hepática',
    'Hemograma',
    'Testosterona sérica',
    'LH/FSH'
  ],
  sinaisAlerta: [
    'Icterícia',
    'Dor torácica',
    'Sangramento inexplicável',
    'Sinais de virilização em mulheres',
    'Edema',
    'Aumento rápido de peso'
  ],
  referencias: [],
  revisadoEm: '2026-10 (placeholder)',
  revisadoPor: 'Equipe editorial — dados fictícios para demonstração',
  midias: []
};
