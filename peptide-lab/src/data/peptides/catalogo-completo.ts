/**
 * Catálogo Completo de Peptídeos
 * Fonte: Peptides Academy (61 peptídeos), PepEdHub (109+ peptídeos), Creative Peptides (80+ drogas peptídicas aprovadas)
 * Este arquivo serve como índice mestre que referencia todos os peptídeos catalogados.
 *
 * Cada peptídeo tem seu próprio arquivo em peptide-lab/src/data/peptides/{arquivo}.ts
 *
 * Revisão: 2026-10 (piloto)
 * Revisor: Conselho editorial — pendente de assinatura (piloto)
 */

// Lista de todos os peptídeos catalogados, cada um com seu arquivo individual.

export const peptideCatalog: { id: string; nome: string; arquivo: string }[] = [
  // Metabólicos / GLP-1 (arquivos individuais existentes)
  { id: 'liraglutida', nome: 'Liraglutida', arquivo: 'liraglutida' },
  { id: 'tirzepatida', nome: 'Tirzepatida', arquivo: 'tirzepatida' },
  { id: 'semaglutida', nome: 'Semaglutida', arquivo: 'semaglutida' },

  // Eixo GH / Performance (arquivos individuais existentes)
  { id: 'cjc-1295', nome: 'CJC-1295 (com DAC)', arquivo: 'cjc-1295' },
  { id: 'tesamorelina', nome: 'Tesamorelina', arquivo: 'tesamorelina' },
  { id: 'sermorelina', nome: 'Sermorelina', arquivo: 'sermorelina' },

  // Neuro / Pele / Longevidade (arquivos individuais existentes)
  { id: 'mots-c', nome: 'MOTS-c', arquivo: 'mots-c' },
  { id: 'selank', nome: 'Selank', arquivo: 'selank' },
  { id: 'semax', nome: 'Semax', arquivo: 'semax' },
  { id: 'timosina-alfa-1', nome: 'Timosina Alfa-1', arquivo: 'timosina-alfa-1' },
  { id: 'lindalasta', nome: 'Lidadasta (Lindalista)', arquivo: 'lindalasta' },

  // Peptídeos farmacêuticos aprovados (arquivos individuais existentes)
  { id: 'octreotida', nome: 'Octreotida', arquivo: 'octreotida' },
  { id: 'teriparatida', nome: 'Teriparatida', arquivo: 'teriparatida' },
  { id: 'desmopressina', nome: 'Desmopressina', arquivo: 'desmopressina' },
  { id: 'cosyntropin', nome: 'Cosyntropin', arquivo: 'cosyntropin' },

  // Peptídeos adicionais das três fontes (arquivos individuais pendentes)
  { id: 'corticorelin', nome: 'Corticorelin', arquivo: 'corticorelin' },
  { id: 'seractide', nome: 'Seractide', arquivo: 'seractide' },
  { id: 'ceruletide', nome: 'Ceruletide', arquivo: 'ceruletide' },
  { id: 'sincalide', nome: 'Sincalide', arquivo: 'sincalide' },
  { id: 'taltirelin', nome: 'Taltirelin', arquivo: 'taltirelin' },
  { id: 'protirelin', nome: 'Protirelin', arquivo: 'protirelin' },
  { id: 'somatorelin', nome: 'Somatorelin', arquivo: 'somatorelin' },
  { id: 'secretin-humano', nome: 'Secretin (humano)', arquivo: 'secretin-humano' },
  { id: 'secretin-porcine', nome: 'Secretin (porcine)', arquivo: 'secretin-porcine' },
  { id: 'thymopentin', nome: 'Timopentina', arquivo: 'thymopentin' },
  { id: 'calcitonina-salma', nome: 'Calcitonina (salmon)', arquivo: 'calcitonina-salma' },
  { id: 'elcatonin', nome: 'Elcatonin', arquivo: 'elcatonin' },
  { id: 'calcitonina-humana', nome: 'Calcitonina (humana)', arquivo: 'calcitonina-humana' },
  { id: 'atosiban', nome: 'Atosiban', arquivo: 'atosiban' },
  { id: 'carbetocina', nome: 'Carbetocina', arquivo: 'carbetocina' },
  { id: 'oxitocina', nome: 'Oxitocina', arquivo: 'oxitocina' },
  { id: 'buserelina', nome: 'Buserelina', arquivo: 'buserelina' },
  { id: 'gonadorelina', nome: 'Gonadorelina', arquivo: 'gonadorelina' },
  { id: 'goserelina', nome: 'Goserelina', arquivo: 'goserelina' },
  { id: 'histrelina', nome: 'Histrelina', arquivo: 'histrelina' },
  { id: 'leuprolida', nome: 'Leuprolida', arquivo: 'leuprolida' },
  { id: 'nafarelin', nome: 'Nafarelin', arquivo: 'nafarelin' },
  { id: 'triptorelina', nome: 'Triptorelina', arquivo: 'triptorelina' },
  { id: 'abarelix', nome: 'Abarelix', arquivo: 'abarelix' },
  { id: 'cetrorelix', nome: 'Cetrorelix', arquivo: 'cetrorelix' },
  { id: 'degarelix', nome: 'Degarelix', arquivo: 'degarelix' },
  { id: 'ganirelix', nome: 'Ganirelix', arquivo: 'ganirelix' },
  { id: 'depreotide', nome: 'Depreotide', arquivo: 'depreotide' },
  { id: 'edotreotide', nome: 'Edotreotide', arquivo: 'edotreotide' },
  { id: 'lanreotide', nome: 'Lanreotide', arquivo: 'lanreotide' },
  { id: 'pentetreotide', nome: 'Pentetreotide', arquivo: 'pentetreotide' },
  { id: 'somatostatina', nome: 'Somatostatina', arquivo: 'somatostatina' },
  { id: 'vapreotide', nome: 'Vapreotide', arquivo: 'vapreotide' },
  { id: 'argipressina', nome: 'Argipressina', arquivo: 'argipressina' },
  { id: 'lypressina', nome: 'Lypressina', arquivo: 'lypressina' },
  { id: 'phenypressina', nome: 'Phenypressina', arquivo: 'phenypressina' },
  { id: 'terlipressina', nome: 'Terlipressina', arquivo: 'terlipressina' },
  { id: 'enfuvirtida', nome: 'Enfuvirtida', arquivo: 'enfuvirtida' },
  { id: 'glatiramer', nome: 'Glatiramer', arquivo: 'glatiramer' },
  { id: 'ziconote', nome: 'Ziconote', arquivo: 'ziconote' },
  { id: 'saralasina', nome: 'Saralasina', arquivo: 'saralasina' },
  { id: 'bivalirudinina', nome: 'Bivalirudinina', arquivo: 'bivalirudinina' },
  { id: 'eptifibatida', nome: 'Eptifibatida', arquivo: 'eptifibatida' },
  { id: 'carperitida', nome: 'Carperitida', arquivo: 'carperitida' },
  { id: 'nesiritida', nome: 'Nesiritida', arquivo: 'nesiritida' },
  { id: 'icatibant', nome: 'Icatibant', arquivo: 'icatibant' },
  { id: 'exenatida', nome: 'Exenatida', arquivo: 'exenatida' },
  { id: 'lixisenatida', nome: 'Lixisenatida', arquivo: 'lixisenatida' },
  { id: 'albiglutida', nome: 'Albiglutida', arquivo: 'albiglutida' },
  { id: 'dulaglutida', nome: 'Dulaglutida', arquivo: 'dulaglutida' },
  { id: 'pramlintida', nome: 'Pramlintida', arquivo: 'pramlintida' },
  { id: 'linasclotide', nome: 'Linasclotide', arquivo: 'linasclotide' },
  { id: 'sinaspultida', nome: 'Sinaspultida', arquivo: 'sinaspultida' },
  { id: 'pasireotide', nome: 'Pasireotide', arquivo: 'pasireotide' },
  { id: 'teduglutida', nome: 'Teduglutida', arquivo: 'teduglutida' },
  { id: 'peginesatida', nome: 'Peginesatida', arquivo: 'peginesatida' },
  { id: 'pentagastrina', nome: 'Pentagastrina', arquivo: 'pentagastrina' },
  { id: 'aviptadil', nome: 'Aviptadil', arquivo: 'aviptadil' },
];

// Mapa para referência rápida por ID
export const peptideMap: Record<string, { id: string; nome: string; arquivo: string }> = {};

export const initPeptideMap = (): void => {
  peptideCatalog.forEach((item) => {
    peptideMap[item.id] = item;
  });
};

// Inicializar mapa ao importar
initPeptideMap();
