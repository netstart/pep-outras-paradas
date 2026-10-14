// Schema da ficha de peptídeo (ver .ai/plan/02 e 09)

export type RegulatoryLevel = 'approved' | 'offlabel' | 'preliminary' | 'research';
export type EvidenceLevel = 'A' | 'B' | 'C';
export type EvidenceModel = 'invitro' | 'animal' | 'human' | 'meta';

export interface Reference {
  titulo: string;
  fonte: string;
  ano: number;
  pmid?: string;
  doi?: string;
  url?: string;
  nivel: EvidenceLevel;
  modelo: EvidenceModel;
}

export interface Dosagem {
  doseMinima: string;
  doseMedia: string;
  doseMaxima: string;
  frequencia: string;
  vias: string[];
  locaisAplicacao: string[];
  duracaoMinima: string;
  duracaoMaxima: string;
  notas: string;
  referencias: Reference[];
}

export interface Contraindicacao {
  condicao: string;
  gravidade: 'alta' | 'moderada' | 'leve';
  mecanismo: string;
  referencias: Reference[];
}

export interface Interacao {
  substancia: string;
  tipo: 'sinergia' | 'cautela' | 'contraindicada';
  mecanismo: string;
  referencias: Reference[];
}

// Tipos de mídia suportados
export type MediaType = 'youtube-embed' | 'instagram' | 'tiktok' | 'reddit' | 'artigo' | 'youtube' | 'imagem';

export interface BaseMedia {
  tipo: MediaType;
  titulo: string;
  url: string;
}

export interface YouTubeEmbedMedia extends BaseMedia {
  tipo: 'youtube-embed';
  thumbnail?: string;
}

export interface InstagramMedia extends BaseMedia {
  tipo: 'instagram';
  postUser?: string;
  postStats?: string;
}

export interface TikTokMedia extends BaseMedia {
  tipo: 'tiktok';
  author?: string;
  stats?: string;
}

export interface RedditMedia extends BaseMedia {
  tipo: 'reddit';
}

export interface ArticleMedia extends BaseMedia {
  tipo: 'artigo';
}

export interface YouTubeSearchMedia extends BaseMedia {
  tipo: 'youtube';
}

export interface ImageMedia extends BaseMedia {
  tipo: 'imagem';
  credito?: string;
}

export type MediaItem = YouTubeEmbedMedia | InstagramMedia | TikTokMedia | RedditMedia | ArticleMedia | YouTubeSearchMedia | ImageMedia;

export interface Peptide {
  id: string;
  nome: string;
  sinonimos: string[];
  categoria: string;
  nivelRegulatorio: RegulatoryLevel;
  resumo: string;
  mecanismo: string;
  indicacoesEstudadas: { condicao: string; nivel: EvidenceLevel; modelo: EvidenceModel; referencias: Reference[] }[];
  dosagem: Dosagem;
  contraindicacoes: Contraindicacao[];
  interacoes: Interacao[];
  efeitosAdversos: string[];
  statusWada: string;
  monitoramento: string[];
  sinaisAlerta: string[];
  referencias: Reference[];
  revisadoEm: string;
  revisadoPor: string;
  midias: MediaItem[];
}