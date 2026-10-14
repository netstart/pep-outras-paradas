import { Peptide } from '../types';

export const decanoato_de_nandrolona: Peptide = {
  id: 'decanoato_de_nandrolona',
  nome: 'Decanoato de Nandrolona',
  sinonimos: ['Nandrolone Decanoate', 'Deca Durabolin'],
  categoria: 'Esteroide Anabolizante',
  nivelRegulatorio: 'offlabel',
  resumo: 'Éster de nandrolona de ação prolongada, usado para ganho de massa muscular e melhoria da recuperação.',
  mecanismo: 'Liga-se aos receptores de androgênios, promovendo síntese protéica e retenção de nitrogênio.',
  indicacoesEstudadas: [
    {
      condicao: 'Ganho de massa muscular',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        {
          titulo: 'Nandrolone decanoate in the treatment of muscle wasting',
          fonte: 'Clinical Journal of Sports Medicine',
          ano: 2009,
          pmid: '19246659',
          nivel: 'A',
          modelo: 'human'
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '150 mg/semana',
    doseMedia: '200-400 mg/semana',
    doseMaxima: '600 mg/semana',
    frequencia: '1x/semana',
    vias: ['Intramuscular'],
    locaisAplicacao: ['Glúteo'],
    duracaoMinima: '8 semanas',
    duracaoMaxima: 'Indefinido (ciclos de até 12 meses)',
    notas: 'Doses mais altas aumentam risco cardiovascular.',
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
      mecanismo: 'Metabolismo hepático pode ser sobrecarregado.',
      referencias: []
    },
    {
      condicao: 'Hipertensão não controlada',
      gravidade: 'moderada',
      mecanismo: 'Potencial aumento da pressão arterial.',
      referencias: []
    }
  ],
  interacoes: [
    {
      substancia: 'Outros esteroides anabolizantes',
      tipo: 'cautela',
      mecanismo: 'Potencial sobrecarga de receptores e efeitos adversos.',
      referencias: []
    }
  ],
  efeitosAdversos: [
    'Acne',
    'Queda de cabelo',
    'Aumento de pressão arterial',
    'Retenção de líquidos',
    'Ginecomastia (por conversão a estrógeno)',
    'Supressão do eixo gonadal',
    'Alterações de humor',
    'Insônia'
  ],
  statusWada: 'Proibido',
  monitoramento: [
    'Pressão arterial',
    'Perfil lipídico',
    'Função hepática',
    'Hemograma',
    'Testosterona sérica',
    'LH/FSH'
  ],
  sinaisAlerta: [
    'Dor torácica',
    'Dispneia',
    'Inchaço nas extremidades',
    'Sangramento inexplicável',
    'Sinais de virilização',
    'Edema',
    'Aumento rápido de peso'
  ],
  referencias: [],
  revisadoEm: '2026-10 (placeholder)',
  revisadoPor: 'Equipe editorial — dados fictícios para demonstração',
  midias: []
};
