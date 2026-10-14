import { Peptide } from '../types';

export const enfuvirtida: Peptide = {
  id: 'enfuvirtida',
  nome: 'Enfuvirtida',
  sinonimos: ['Enfuvirtide', 'Fuzeon'],
  categoria: 'Antiviral / Inibidor de Fusão',
  nivelRegulatorio: 'approved',
  resumo: 'Peptídeo de 36 aminoácidos que inibe a fusão do HIV-1 com a membrana celular, utilizado em terapia antirretroviral combinada.',
  mecanismo: 'Liga-se à gp41 do HIV-1, impedindo a mudança conformacional necessária para a fusão viral com a célula hospedeira.',
  indicacoesEstudadas: [
    {
      condicao: 'Infecção por HIV-1 em combinação com outros antirretrovirais',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Enfuvirtide for HIV-1 infection treatment', 
          fonte: 'New England Journal of Medicine', 
          ano: 2003, 
          pmid: '12651837', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '90 mg',
    doseMedia: '90 mg',
    doseMaxima: '90 mg',
    frequencia: '2x/dia',
    vias: ['Subcutânea'],
    locaisAplicacao: ['Abdome', 'Coxa', 'Braço'],
    duracaoMinima: '4 semanas',
    duracaoMaxima: 'Contínuo',
    notas: 'Administrado como injeção subcutânea duas vezes ao dia. Requer reconstituição antes da administração.',
    referencias: [
      { 
        titulo: 'Enfuvirtide prescribing information', 
        fonte: 'FDA Label - Fuzeon', 
        ano: 2020, 
        nivel: 'A', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipersensibilidade conhecida à enfuvirtida',
      gravidade: 'moderada',
      mecanismo: 'Reação alérgica potencial',
      referencias: [
        { 
          titulo: 'Allergic reactions to enfuvirtide', 
          fonte: 'Drug Safety', 
          ano: 2005, 
          pmid: '15792507', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  interacoes: [],
  efeitosAdversos: [
    'Reação no local da injeção (eritema, nódulo, coceira)',
    'Diarreia',
    'Náusea',
    'Fadiga',
    'Perda de peso'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Carga viral de HIV-1',
    'Contagem de linfócitos CD4+',
    'Reação local da injeção',
    'Função hepática',
    'Função renal'
  ],
  sinaisAlerta: [
    'Reação alérgica grave',
    'Sinais de infecção no local da injeção',
    'Diarreia persistente',
    'Perda de peso inexplicável'
  ],
  referencias: [
    { 
      titulo: 'Enfuvirtide for HIV-1 infection treatment', 
      fonte: 'New England Journal of Medicine', 
      ano: 2003, 
      pmid: '12651837', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Long-term safety and efficacy of enfuvirtide', 
      fonte: 'Journal of Acquired Immune Deficiency Syndromes', 
      ano: 2008, 
      pmid: '18263055', 
      nivel: 'B', 
      modelo: 'human' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química da Enfuvirtida', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/enfuvirtide/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Enfuvirtida in HIV therapy', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/18263055/' 
    }
  ]
};