import { Peptide } from '../types';

export const desmopressina: Peptide = {
  id: 'desmopressina',
  nome: 'Desmopressina (DDAVP)',
  sinonimos: ['Desmopressin', 'DDAVP', 'Minirin', 'Noctiva'],
  categoria: 'Endócrino / Hematológico',
  nivelRegulatorio: 'approved',
  resumo: 'Análogo da vasopressina (ADH) seletivo para receptor V2. Aprovado para diabetes insípido central, enurese noturna, hemofilia A/Doença de von Willebrand tipo 1 (aumenta FVIII/vWF).',
  mecanismo: 'Agonista V2 → aumenta reabsorção de água livre (rins) e liberação de FVIII/vWF (endotélio).',
  indicacoesEstudadas: [
    { condicao: 'Diabetes insípido central', nivel: 'A', modelo: 'human', referencias: [{ titulo: 'DDAVP in central diabetes insipidus', fonte: 'Cochrane Database', ano: 2018, pmid: '29984612', nivel: 'A', modelo: 'human' }] },
    { condicao: 'Enurese noturna primária', nivel: 'A', modelo: 'human', referencias: [{ titulo: 'Desmopressin for nocturnal enuresis', fonte: 'Cochrane Database', ano: 2016, pmid: '27411186', nivel: 'A', modelo: 'human' }] },
    { condicao: 'Hemofilia A / vWD tipo 1 (profilaxia sangramento)', nivel: 'A', modelo: 'human', referencias: [{ titulo: 'DDAVP in hemophilia/vWD', fonte: 'Haemophilia', ano: 2015, pmid: '25753201', nivel: 'A', modelo: 'human' }] },
  ],
  dosagem: {
    doseMinima: '0,1 mg (oral) / 0,2 mcg/kg (SC/IV)',
    doseMedia: '0,2–0,4 mg (oral) / 0,3 mcg/kg (SC)',
    doseMaxima: '1,2 mg/dia (oral) / 0,4 mcg/kg (SC/IV)',
    frequencia: '1–3x/dia (oral) / 1x/dia (SC/IV/nasal)',
    vias: ['Oral', 'Subcutânea', 'Intravenosa', 'Intranasal'],
    locaisAplicacao: ['Abdome (SC)', 'Nasal'],
    duracaoMinima: 'Conforme indicação',
    duracaoMaxima: 'Crônico supervisionado',
    notas: 'Restrição hídrica obrigatória (risco hiponatremia). Dose nasal menor que oral.',
    referencias: [{ titulo: 'DDAVP enuresis/hyponatremia (Cochrane)', fonte: 'Cochrane Database', ano: 2016, pmid: '27411186', nivel: 'A', modelo: 'human' }]
  },
  contraindicacoes: [
    { condicao: 'Hiponatremia / SIADH / insuficiência cardíaca descompensada', gravidade: 'alta', mecanismo: 'Retenção hídrica agrava hiponatremia/edema.', referencias: [] },
    { condicao: 'Crianças < 2 anos (oral/nasal) / < 6 anos (enurese)', gravidade: 'alta', mecanismo: 'Risco hiponatremia severa.', referencias: [] },
    { condicao: 'Hipertensão não controlada', gravidade: 'moderada', mecanismo: 'Retenção de volume.', referencias: [] }
  ],
  interacoes: [
    { substancia: 'Carbamazepina / SSRIs / diuréticos', tipo: 'cautela', mecanismo: 'Aumentam risco de hiponatremia.', referencias: [] }
  ],
  efeitosAdversos: ['Cefaleia', 'Náusea', 'Dor abdominal', 'Hiponatremia (grave se excesso hídrico)'],
  statusWada: 'Não proibido',
  monitoramento: ['Sódio sérico', 'Osmolalidade sérica/urinária', 'Balanço hídrico'],
  sinaisAlerta: ['Confusão mental / convulsão (hiponatremia aguda)', 'Edema / ganho de peso rápido'],
  referencias: [
    { titulo: 'DDAVP enuresis/hyponatremia (Cochrane)', fonte: 'Cochrane Database', ano: 2016, pmid: '27411186', nivel: 'A', modelo: 'human' }
  ],
  revisadoEm: '2026-10 (piloto)',
  revisadoPor: 'Conselho editorial — pendente de assinatura (piloto)',
  midias: [
    { tipo: 'imagem', titulo: 'Estrutura da desmopressina (PubChem)', url: 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/desmopressin/PNG', credito: 'PubChem' },
    { tipo: 'artigo', titulo: 'DDAVP enuresis/hyponatremia — Cochrane (PubMed)', url: 'https://pubmed.ncbi.nlm.nih.gov/27411186/' }
  ]
};