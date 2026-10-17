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
  referencias: [],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [],
};
