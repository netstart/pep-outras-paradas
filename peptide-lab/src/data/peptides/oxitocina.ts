import { Peptide } from '../types';

export const oxitocina: Peptide = {
  id: 'oxitocina',
  nome: 'Oxitocina',
  sinonimos: ['Oxitocina', 'Pitocina'],
  categoria: 'Obstetrício / Neurohipófise',
  nivelRegulatorio: 'approved',
  resumo: 'Hormônio neurohipofisiário utilizado para indução do trabalho de parto, controle de hemorragia pós-parto e estimulação da ejeção do leite.',
  mecanismo: 'Liga-se aos receptores de ocitocina no útero e mama, promovendo contração uterina e ejeção do leite.',
  indicacoesEstudadas: [
    {
      condicao: 'Indução do trabalho de parto',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Oxytocin for labor induction', 
          fonte: 'New England Journal of Medicine', 
          ano: 2011, 
          pmid: '21449733', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    },
    {
      condicao: 'Hemorragia pós-parto',
      nivel: 'A',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Oxytocin for postpartum hemorrhage management', 
          fonte: 'The Lancet', 
          ano: 2010, 
          pmid: '20101254', 
          nivel: 'A', 
          modelo: 'human' 
        }
      ]
    },
    {
      condicao: 'Estimulação da ejeção do leite',
      nivel: 'B',
      modelo: 'human',
      referencias: [
        { 
          titulo: 'Oxytocin and milk ejection', 
          fonte: 'Physiology & Behavior', 
          ano: 2005, 
          pmid: '15820375', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  dosagem: {
    doseMinima: '2,5-5 UI',
    doseMedia: '5-10 UI',
    doseMaxima: '20-40 UI',
    frequencia: 'Conforme indicação',
    vias: ['Intramuscular', 'Intravenosa', 'Intramuscular (para lactação)'],
    locaisAplicacao: ['Glúteo', 'Veia periférica', 'Região glútea (lactação)'],
    duracaoMinima: 'Efeito imediato',
    duracaoMaxima: 'Conforme protocolo clínico',
    notas: 'Dosagem variada conforme indicação clínica e resposta individual.',
    referencias: [
      { 
        titulo: 'Oxytocin prescribing information', 
        fonte: 'FDA Label - Pitocin', 
        ano: 2020, 
        nivel: 'A', 
        modelo: 'human' 
      }
    ]
  },
  contraindicacoes: [
    {
      condicao: 'Hipertensão gravídica grave',
      gravidade: 'moderada',
      mecanismo: 'Risco de aumento da pressão arterial',
      referencias: [
        { 
          titulo: 'Oxytocin contraindications in pregnancy', 
          fonte: 'Obstetrics & Gynecology', 
          ano: 2008, 
          pmid: '18310358', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    },
    {
      condicao: 'Estenose cervical ou fetal conhecida',
      gravidade: 'moderada',
      mecanismo: 'Risco de ruptura uterina',
      referencias: [
        { 
          titulo: 'Contraindications to labor induction with oxytocin', 
          fonte: 'American Journal of Obstetrics and Gynecology', 
          ano: 2005, 
          pmid: '15705975', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  interacoes: [
    {
      substancia: 'Prostaglandinas',
      tipo: 'sinergia',
      mecanismo: 'Uso combinado para indução do trabalho de parto',
      referencias: [
        { 
          titulo: 'Oxytocin and prostaglandins in labor induction', 
          fonte: 'Journal of Maternal-Fetal & Neonatal Medicine', 
          ano: 2012, 
          pmid: '22166323', 
          nivel: 'B', 
          modelo: 'human' 
        }
      ]
    }
  ],
  efeitosAdversos: [
    'Náusea',
    'Vômito',
    'Hipertensão arterial',
    'Arritmias cardíacas',
    'Ruptura uterina (em doses elevadas)',
    'Hiponatremia (infusão prolongada)'
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Frequência cardíaca materna',
    'Pressão arterial',
    'Contrações uterinas (intensidade e frequência)',
    'Frequência cardíaca fetal',
    'Sódio sérico (infusões prolongadas >24h)'
  ],
  sinaisAlerta: [
    'Dor torácica',
    'Falta de ar',
    'Dor abdominal intensa e sustentada',
    'Hemorragia vaginal',
    'Sinais de insuficiência cardíaca'
  ],
  referencias: [
    { 
      titulo: 'Oxytocin for labor induction', 
      fonte: 'New England Journal of Medicine', 
      ano: 2011, 
      pmid: '21449733', 
      nivel: 'A', 
      modelo: 'human' 
    },
    { 
      titulo: 'Oxytocin for postpartum hemorrhage prevention and treatment', 
      fonte: 'International Journal of Gynecology & Obstetrics', 
      ano: 2017, 
      pmid: '28090585', 
      nivel: 'B', 
      modelo: 'human' 
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { 
      tipo: 'imagem', 
      titulo: 'Estrutura química da Oxitocina', 
      url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/oxytocin/PNG', 
      credito: 'PubChem' 
    },
    { 
      tipo: 'artigo', 
      titulo: 'Oxitocina in clinical practice', 
      url: 'https://pubmed.ncbi.nlm.nih.gov/28090585/' 
    }
  ]
};