import { Peptide } from '../types';

export const tesamorelina: Peptide = {
  id: 'tesamorelina',
  nome: 'Tesamorelina',
  sinonimos: ['Tesamorelin', 'Egrifta', 'Egrifta SV', 'THERESAR'],
  categoria: 'GH / Performance',
  nivelRegulatorio: 'approved',
  resumo: 'Análogo do GHRH, aprovado pela FDA (2009) para redução de adiposidade abdominal em lipodistrofia por HIV. Efeito modesto; outras indicações são off-label.',
  mecanismo: 'Agonista do receptor GHRH; estimula a hipófise a liberar GH, elevando IGF-1.',
  indicacoesEstudadas: [
    {
      condicao: 'Lipodistrofia associada a HIV',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Tesamorelin for HIV-associated lipodystrophy', 
          fonte: 'J Infect Dis', 
          ano: 2011, 
          pmid: '21666259', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '2 mg/dia',
    doseMedia: '2 mg/dia',
    doseMaxima: '2 mg/dia',
    frequencia: '1x ao dia',
    vias: ['Subcutânea'],
    locaisAplicacao: ['Abdome'],
    duracaoMinima: 'Conforme indicação',
    duracaoMaxima: 'Uso supervisionado',
    notas: 'Aprovado (Egrifta) para lipodistrofia HIV. Uso clínico específico e limitado.',
    referencias: []
  },
  contraindicacoes: [
    {
      condicao: 'Neoplasia ativa ou histórico de tumor cerebral maligno',
      gravidade: 'alta',
      mecanismo: 'GH/IGF-1 proliferativo.',
      referencias: []
    },
    {
      condicao: 'Gravidez',
      gravidade: 'alta',
      mecanismo: 'Dados humanos insuficientes.',
      referencias: []
    }
  ],
  interacoes: [
    {
      substancia: 'Glicocorticoides crônicos',
      tipo: 'cautela',
      mecanismo: 'Atenuam eixo GH.',
      referencias: []
    }
  ],
  efeitosAdversos: [
    'Rigidez articular',
    'Artralgia',
    'Mialgia',
    'Dor no local (nos estudos)',
    'Náusea',
    'Cefaleia'
  ],
  statusWada: 'Proibido (S2 — secretagogos de GH)',
  monitoramento: [
    'IGF-1 sérico',
    'Glicemia (se diabético)',
    'Peso corporal'
  ],
  sinaisAlerta: [
    'Sintomas de hiperglicemia',
    'Dor persistente no local da injeção',
    'Reação alérgica'
  ],
  referencias: [
    { 
      titulo: 'Tesamorelin for HIV-associated lipodystrophy', 
      fonte: 'Drugs', 
      ano: 2011, 
      pmid: '21668043', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Reduction in visceral adiposity is associated with an improved metabolic profile in HIV-infected patients receiving tesamorelin', 
      fonte: 'Clin Infect Dis', 
      ano: 2012, 
      pmid: '22495074', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Predictors of Treatment Response to Tesamorelin in HIV-Infected Patients with Excess Abdominal Fat', 
      fonte: 'PLoS One', 
      ano: 2015, 
      pmid: '26457580', 
      nivel: 'A', 
      modelo: 'human' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'artigo', 
      titulo: 'Tesamorelin lipodystrophy (HIV)', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/21666259/' 
    }
  ]
};