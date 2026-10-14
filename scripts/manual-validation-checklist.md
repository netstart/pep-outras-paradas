# Checklist de Validação Manual — Peptide Lab

Preencher por release. QA responsável: ________  Data: ________  Build: ________

## Dispositivos
- [ ] Android emulador (API mais recente, tela média ~6.1")
- [ ] Android emulador (tela pequena ~5" e tablet) — se aplicável
- [ ] iOS simulador (iPhone atual) — em macOS
- [ ] iPhone físico via Expo Go — smoke test

## Fluxos críticos
- [ ] Primeiro uso exibe disclaimer médico e exige aceite
- [ ] Busca "semaglutida" retorna ficha em < 1s
- [ ] Ficha mostra selo regulatório + selo de evidência + data de revisão
- [ ] Toda citação [n] abre modal com PMID/DOI e link PubMed funcional
- [ ] Contraindicações graves têm aviso vermelho e botão "entendi"
- [ ] Verificador: stack com contraindicação exibe ⛔ + fonte (sem crash)
- [ ] Vídeo do YouTube reproduz no embed; links Instagram/TikTok/Reddit abrem corretamente
- [ ] Modo avião: catálogo completo funciona offline
- [ ] Favorito persistido após fechar e reabrir o app

## Acessibilidade
- [ ] VoiceOver (iOS) / TalkBack (Android) leem nome, selos e doses
- [ ] Dynamic Type máximo não quebra layout da ficha
- [ ] Contraste dos selos de evidência legível em modo claro e escuro

## Segurança de conteúdo (obrigatório para lojas)
- [ ] Nenhuma ficha de contraindicação atrás de paywall
- [ ] Toda ficha de dose mostra "isso não é prescrição médica"
- [ ] Peptídeos "research use only" com marcação vermelha visível

## Não-regressão
- [ ] `scripts\validate.ps1` rodou sem falhas antes desta lista
- [ ] Screenshot das telas-chave anexadas ao release (home, ficha, verificador)
