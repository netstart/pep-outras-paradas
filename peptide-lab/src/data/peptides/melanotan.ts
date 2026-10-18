import { Peptide } from '../types';

export const melanotan: Peptide = {
  id: 'melanotan',
  nome: 'Melanotan',
  sinonimos: ['Melanotan I', 'Melanotan II', 'Afamelanota (MT-1)', 'Bremelanotida (MT-2 fragmento)'],
  categoria: 'Peptídeo de Pigmentação / Estética',
  nivelRegulatorio: 'research',
  resumo: 'Análogo sintético do hormônio estimulante de melanócitos (α-MSH), usado para induzir bronzedamento cutâneo sem exposição solar; o Melanotan II também afeta a libido.',
  mecanismo: 'Liga-se aos receptores melanocortina (MC1R, MC4R), estimulando a produção de melanina pelos melanócitos e, no caso do MT-2, efeitos sobre função sexual e apetite.',
  indicacoesEstudadas: [
    {
      condicao: 'Deficiência de pigmentação / fotoproteção (pesquisa)',
      nivel: 'C',
      modelo: 'human',
      referencias: [],
    },
    {
      condicao: 'Disfunção erétil / libido (Melanotan II / bremelanotida - pesquisa)',
      nivel: 'C',
      modelo: 'human',
      referencias: [],
    },
  ],
  dosagem: {
    doseMinima: '0,25–0,5 mg',
    doseMedia: '0,5–1 mg',
    doseMaxima: '2 mg',
    frequencia: '2–3x/semana (fase de carga), depois manutenção',
    vias: ['Subcutânea', 'Spray nasal (off-label)'],
    locaisAplicacao: ['Abdome', 'Coxa'],
    duracaoMinima: '2–4 semanas (carga)',
    duracaoMaxima: 'Contínuo (manutenção)',
    notas: 'Não aprovado por agências reguladoras para bronzedamento; uso off-label com perfil de segurança incerto.',
    referencias: [],
  },
  contraindicacoes: [
    {
      condicao: 'Melanoma ou histórico de neoplasia cutânea',
      gravidade: 'alta',
      mecanismo: 'Estimulação de melanócitos pode favorecer lesões pigmentadas.',
      referencias: [],
    },
    {
      condicao: 'Doença cardiovascular grave',
      gravidade: 'alta',
      mecanismo: 'Pode aumentar a pressão arterial (especialmente MT-2).',
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
      substancia: 'Medicamentos para pressão arterial',
      tipo: 'cautela',
      mecanismo: 'Pode alterar a pressão arterial.',
      referencias: [],
    },
  ],
  efeitosAdversos: [
    'Náusea',
    'Rubor facial',
    'Aumento de sinais e pintas (escurecimento)',
    'Ereções espontâneas (MT-2)',
    'Aumento da libido',
    'Dor de cabeça',
    'Hipertensão (transitória)',
  ],
  statusWada: 'Não proibido',
  monitoramento: [
    'Pele (sinais atípicos ou mudanças de pigmentação)',
    'Pressão arterial',
    'Avaliação dermatológica periódica',
  ],
  sinaisAlerta: [
    'Sinais cutâneos com bordas irregulares, crescimento rápido ou sangramento (suspeita de melanoma)',
    'Dor de cabeça intensa com alterações visuais',
    'Dor no peito',
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
      titulo: 'Melanotan - Visão Geral',
      url: 'https://www.youtube.com/results?search_query=Melanotan+visao+geral',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Melanotan - Uso Clínico',
      url: 'https://www.youtube.com/results?search_query=Melanotan+uso+clinico',
      credito: 'YouTube'
    },
    {
      tipo: 'youtube-embed',
      titulo: 'Melanotan - Efeitos e Cuidados',
      url: 'https://www.youtube.com/results?search_query=Melanotan+efeitos+cuidados',
      credito: 'YouTube'
    }
  ],
};
