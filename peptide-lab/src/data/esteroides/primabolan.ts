import { Peptide } from '../types';

export const primabolan: Peptide = {
  id: 'primabolan',
  nome: 'Primobolan',
  sinonimos: ['Metenolone', 'Primobolan'],
  categoria: 'Esteroide Anabolizante',
  nivelRegulatorio: 'offlabel',
  resumo: 'Esteroide anabolizante de ação moderada, favorecendo ganho de massa magra magra e retenção mínima de água, ideal para ciclos de corte.',
  mecanismo: 'Liga-se aos receptores de androgênios, promovendo síntese protéica com baixa aromatização.',
  indicacoesEstudadas: [
    {
      condicao: 'Ciclos de cutting',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        {
          titulo: 'Metenolone: a review of its anabolic effects',
          fonte: 'International Journal of Sports Medicine',
          ano: 2012,
          pmid: '25913128',
          nivel: 'A',
          modelo: 'human'
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '50 mg/semana',
    doseMedia: '100 mg/semana',
    doseMaxima: '200 mg/semana',
    frequencia: '1x/semana',
    vias: ['Intramuscular'],
    locaisAplicacao: ['Glúteo'],
    duracaoMinima: '8 semanas',
    duracaoMaxima: '16 semanas',
    notas: 'Doses mais baixas são bem toleradas; uso prolongado pode causar supressão.',
    referencias: []
  },
  contraindicacoes: [
    {
      condicao: 'Doença hepática grave',
      gravidade: 'moderada',
      mecanismo: 'Embora seja injetável, metabolismo hepático ainda ocorre.',
      referencias: []
    },
    {
      condicao: 'Hipersensibilidade ao metenolone',
      gravidade: 'alta',
      mecanismo: 'Reação alérgica.',
      referencias: []
    }
  ],
  interacoes: [
    {
      substancia: 'Outros esteroides anabolizantes',
      tipo: 'cautela',
      mecanismo: 'Potencial sinergia ou competição de receptores.',
      referencias: []
    }
  ],
  efeitosAdversos: [
    'Acne',
    'Queda de cabelo',
    'Alterações no colesterol',
    'Supressão do eixo gonadal',
    'Reações locais no local de injeção',
    'Alterações de humor'
  ],
  statusWada: 'Proibido',
  monitoramento: [
    'Perfil lipídico',
    'Testosterona sérica',
    'LH/FSH',
    'Hemograma',
    'Função hepática'
  ],
  sinaisAlerta: [
    'Dor no local de injeção',
    'Reações alérgicas',
    'Icterícia',
    'Sinais de virilização',
    'Alterações de humor severas'
  ],
  referencias: [],
  revisadoEm: '2026-10 (placeholder)',
  revisadoPor: 'Equipe editorial — dados fictícios para demonstração',
  midias: []
};
