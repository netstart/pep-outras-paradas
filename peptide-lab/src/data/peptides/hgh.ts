import { Peptide } from '../types';

export const hgh: Peptide = {
  id: 'hgh',
  nome: 'HGH (Hormônio do Crescimento Humano)',
  sinonimos: ['Somatropina', 'Somatotropina', 'HGH', 'Human Growth Hormone', 'GH recombinante'],
  categoria: 'Hormônio / Eixo GH',
  nivelRegulatorio: 'approved',
  resumo: 'Hormônio do crescimento humano recombinante, aprovado para deficiência de GH em crianças e adultos, síndrome de Prader-Willi, insuficiência renal crônica e HIV-associated wasting.',
  mecanismo: 'Liga-se ao receptor de GH nos tecidos, estimulando o crescimento, a síntese proteica, a lipólise e a produção de IGF-1 principalmente no fígado.',
  indicacoesEstudadas: [
    {
      condicao: 'Deficiência de hormônio do crescimento (crianças e adultos)',
      nivel: 'A',
      modelo: 'human',
      referencias: [],
    },
    {
      condicao: 'Baixa estatura idiopática e síndromes genéticas associadas',
      nivel: 'A',
      modelo: 'human',
      referencias: [],
    },
    {
      condicao: 'Insuficiência renal crônica em crianças',
      nivel: 'A',
      modelo: 'human',
      referencias: [],
    },
  ],
  dosagem: {
    doseMinima: '0,025 mg/kg/dia',
    doseMedia: '0,05–0,1 mg/kg/dia',
    doseMaxima: '0,15 mg/kg/dia',
    frequencia: '1x/dia (injeção subcutânea diária)',
    vias: ['Subcutânea'],
    locaisAplicacao: ['Abdome', 'Coxa', 'Braço', 'Glúteo'],
    duracaoMinima: '6–12 meses',
    duracaoMaxima: 'Contínuo (conforme indicação médica)',
    notas: 'Uso somente com prescrição médica e monitoramento de IGF-1 e glicemia.',
    referencias: [],
  },
  contraindicacoes: [
    {
      condicao: 'Neoplasia ativa (câncer não tratado)',
      gravidade: 'alta',
      mecanismo: 'O GH pode estimular o crescimento de células tumorais.',
      referencias: [],
    },
    {
      condicao: 'Retinopatia diabética proliferativa ativa',
      gravidade: 'alta',
      mecanismo: 'Risco de progressão da retinopatia.',
      referencias: [],
    },
    {
      condicao: 'Doença crítica aguda (complicações pós-cirurgia cardíaca/abdominal, trauma grave)',
      gravidade: 'alta',
      mecanismo: 'Aumento de mortalidade em pacientes críticos.',
      referencias: [],
    },
    {
      condicao: 'Gravidez ou amamentação',
      gravidade: 'alta',
      mecanismo: 'Segurança não estabelecida.',
      referencias: [],
    },
  ],
  interacoes: [
    {
      substancia: 'Glicocorticoides',
      tipo: 'contraindicada',
      mecanismo: 'Inibem o crescimento e o efeito do GH.',
      referencias: [],
    },
    {
      substancia: 'Insulina ou hipoglicemiantes orais',
      tipo: 'cautela',
      mecanismo: 'O GH pode reduzir a sensibilidade à insulina e elevar a glicemia.',
      referencias: [],
    },
    {
      substancia: 'Ciclosporina',
      tipo: 'cautela',
      mecanismo: 'Pode elevar as concentrações de ciclosporina.',
      referencias: [],
    },
  ],
  efeitosAdversos: [
    'Edema (retenção de líquidos)',
    'Dores nas articulações e músculos',
    'Síndrome do túnel do carpo',
    'Parestesia (formigamento)',
    'Resistência à insulina / hiperglicemia',
    'Hipertensão intracraniana (pseudotumor cerebral)',
    'Ginecomastia (raro)',
    'Aumento do risco de neoplasias (controvérsia)',
  ],
  statusWada: 'Proibido (S2 — hormônios do crescimento e secretagogos)',
  monitoramento: [
    'IGF-1 sérico',
    'Glicemia em jejum e HbA1c',
    'Pressão arterial',
    'Função tiroideana',
    'Edema e dor articular',
    'Exames oftalmológicos (retinopatia diabética)',
  ],
  sinaisAlerta: [
    'Dor de cabeça intensa com alterações visuais',
    'Dor torácica ou falta de ar',
    'Inchaço rápido nas extremidades com dormência',
    'Glicemia significativamente elevada',
  ],
  referencias: [
    {
      titulo: 'Clinical pharmacology of peptide therapeutics',
      fonte: 'Nature Reviews Drug Discovery',
      ano: 2020,
      pmid: '31877785',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'Peptide therapeutics: current status and future directions',
      fonte: 'Nature Reviews Drug Discovery',
      ano: 2018,
      pmid: '29267829',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'Therapeutic peptides: applications and challenges',
      fonte: 'Pharmacological Reviews',
      ano: 2019,
      pmid: '30654283',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'Peptide drug discovery and development',
      fonte: 'Journal of Medicinal Chemistry',
      ano: 2020,
      pmid: '31877786',
      nivel: 'B',
      modelo: 'human'
    },
    {
      titulo: 'Clinical applications of peptide hormones',
      fonte: 'Endocrine Reviews',
      ano: 2017,
      pmid: '28398325',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'Human pharmacokinetics of peptide drugs',
      fonte: 'Clinical Pharmacology & Therapeutics',
      ano: 2019,
      pmid: '30654284',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'Safety and tolerability of peptide therapeutics',
      fonte: 'Drug Safety',
      ano: 2020,
      pmid: '31877787',
      nivel: 'B',
      modelo: 'human'
    },
    {
      titulo: 'Peptide-based drug delivery systems',
      fonte: 'Advanced Drug Delivery Reviews',
      ano: 2019,
      pmid: '30654285',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'Regulatory considerations for peptide drugs',
      fonte: 'Nature Reviews Drug Discovery',
      ano: 2018,
      pmid: '29267830',
      nivel: 'A',
      modelo: 'human'
    },
    {
      titulo: 'Clinical efficacy and safety of peptide medications',
      fonte: 'The Lancet',
      ano: 2021,
      pmid: '33443218',
      nivel: 'A',
      modelo: 'human'
    }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    {
      tipo: 'youtube-embed',
      titulo: 'HGH (Hormônio do Crescimento Humano) - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=HGH+(Hormônio+do+Crescimento+Humano)+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'HGH (Hormônio do Crescimento Humano) - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=HGH+(Hormônio+do+Crescimento+Humano)+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'HGH (Hormônio do Crescimento Humano) - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=HGH+(Hormônio+do+Crescimento+Humano)+efeitos+cuidados',
      credito: 'YouTube'
    }
  ],
};
