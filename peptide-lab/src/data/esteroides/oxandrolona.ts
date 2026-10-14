import { Peptide } from '../types';

export const oxandrolona: Peptide = {
  id: 'oxandrolona',
  nome: 'Oxandrolona',
  sinonimos: ['Oxandrolone', 'Anavar'],
  categoria: 'Esteroide Anabolizante',
  nivelRegulatorio: 'offlabel',
  resumo: 'Esteroide oral de ação moderada, favorecendo ganho de massa magra magra e queima de gordura sem efeitos estrogênicos fortes.',
  mecanismo: 'Liga-se aos receptores de androgênios, promovendo síntese protéica e lipólise.',
  indicacoesEstudadas: [
    {
      condicao: 'Perda de massa magra em pacientes com HIV',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        {
          titulo: 'Oxandrolone for the treatment of HIV wasting',
          fonte: 'Journal of Acquired Immune Deficiency Syndromes',
          ano: 2007,
          pmid: '17224371',
          nivel: 'A',
          modelo: 'human'
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '2.5 mg/dia',
    doseMedia: '5-10 mg/dia',
    doseMaxima: '20 mg/dia',
    frequencia: '2-3x/dia',
    vias: ['Oral'],
    locaisAplicacao: ['Via oral'],
    duracaoMinima: '4 semanas',
    duracaoMaxima: '12 semanas',
    notas: 'Doses mais altas aumentam risco hepático.',
    referencias: []
  },
  contraindicacoes: [
    {
      condicao: 'Doença hepática grave',
      gravidade: 'alta',
      mecanismo: 'Metabolismo hepático e risco de hepatotoxicidade.',
      referencias: []
    },
    {
      condicao: 'Gravidez ou amamentação',
      gravidade: 'alta',
      mecanismo: 'Potencial teratogenicidade.',
      referencias: []
    }
  ],
  interacoes: [
    {
      substancia: 'Anticoagulantes',
      tipo: 'cautela',
      mecanismo: 'Potencial aumento do efeito anticoagulante.',
      referencias: []
    }
  ],
  efeitosAdversos: [
    'Toxicidade hepática',
    'Náusea',
    'Vômito',
    'Alterações no colesterol',
    'Acne',
    'Queda de cabelo',
    'Supressão do eixo gonadal',
    'Alterações de humor'
  ],
  statusWada: 'Proibido',
  monitoramento: [
    'Função hepática (AST, ALT, bilirrubina)',
    'Perfil lipídico total e fraccionado',
    'Testosterona sérica',
    'LH/FSH',
    'Hemograma'
  ],
  sinaisAlerta: [
    'Icterícia ou urina escura',
    'Dor abdominal intensa',
    'Sangramento inexplicável',
    'Sinais de virilização em mulheres',
    'Dolor torácica',
    'Edema',
    'Confusão mental'
  ],
  referencias: [],
  revisadoEm: '2026-10 (placeholder)',
  revisadoPor: 'Equipe editorial — dados fictícios para demonstração',
  midias: []
};
