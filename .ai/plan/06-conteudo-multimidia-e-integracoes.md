# 06 — Conteúdo Multimídia e Integrações Externas

## 6.1. Modelo de Conteúdo por Ficha

| Tipo | Formato | Armazenamento | Observações legais |
|------|---------|--------------|---------------------|
| Texto | Markdown custom (schema JSON) | Supabase → SQLite embutido | Conteúdo 100% original, licenciado pelo app |
| Imagens | AVIF/WebP, 3 tamanhos, blurhash | Supabase Storage + CDN + cache local | Ilustrações próprias/licenciadas (estilo anatômico consistente) |
| Diagramas | SVG (renderizado via react-native-svg) | Embutido | Estruturas moleculares, locais de aplicação |
| Vídeos YouTube | Embed via IFrame API | Apenas ID do vídeo no banco | Nunca hospedar vídeo alheio; usar canais científicos licenciados/contratados |
| Posts Instagram/TikTok/Reddit | Deep link + card Open Graph | URL + metadados | Sem scraper/embedding nativo — abre no app oficial/browser |
| Artigos científicos | Link PubMed/DOI + citação formatada | Metadados (título, autores, ano, PMID) | Deep link; resumos escritos pela equipe (não copiar abstracts integralmente sem necessidade) |

## 6.2. Curadoria de Vídeos e Redes Sociais
- Playlist oficial do canal **Peptide Lab** no YouTube: vídeos animados próprios por categoria (mecanismo, aplicação correta, mitos).
- Seção "Na comunidade": posts selecionados de Instagram/TikTok/Reddit (r/Peptides, etc.) com **aviso de conteúdo não verificado** — valor de contexto comunitário, separado visualmente do conteúdo científico.
- Cada item externo registra: data de captura dos metadados, autor, link permanente.

## 6.3. Geração de Conteúdo Original Multimídia (roadmap editorial)
1. Ilustrações anatômicas vetoriais próprias (mapa de aplicação SC/IM)
2. Mini-animações de mecanismo de ação (Lottie, < 15s) por categoria
3. Infográficos de ciclo/dosagem padronizados (modelo visual combarandeiros: dose, frequência, duração)
4. Vídeos curtos próprios para Instagram/TikTok/Shorts impulsionando tráfego → app

## 6.4. Infra de mídia
- CDN com transformação de imagens (Supabase Image Transformations ou Cloudflare Images)
- Player YouTube com `modestbranding`, sem autoplay, respeito a reduced-motion
- Pré-carregamento: apenas metadata; mídia pesada sob demanda com cache LRU