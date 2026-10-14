# 10 — Estratégia de Qualidade e Testes

> Em um app de saúde, **um bug em dose é risco de segurança real**. Qualidade não é opcional: é parte do produto. Este documento define a pirâmide de testes, os gates de CI/CD e o processo de validação manual via emuladores.

---

## 10.1. Pirâmide de testes

```
          ┌──────────────┐
          │   E2E (10%)  │  Maestro — fluxos críticos em emulador
        ┌─┴──────────────┴─┐
        │ Integração (20%) │  Verificador + banco SQLite + sync
      ┌─┴──────────────────┴─┐
      │   Unitários (70%)    │  Regras de negócio, parsers, references
      └──────────────────────┘
```

### Ferramentas
| Camada | Ferramenta | Escopo |
|--------|-----------|--------|
| Estático | ESLint + Prettier + TypeScript strict | Todo o código |
| Unitário | Jest + React Native Testing Library | Lógica, componentes, stores |
| Integridade de conteúdo | Jest (schema validation) | Toda ficha do catálogo |
| Integração | Jest + SQLite em memória | Verificador, busca FTS, sync |
| E2E | Maestro | Fluxos críticos em emulador Android/iOS |
| Visual | Reanimated/Storybook + screenshots | Componentes de ficha e selos |
| Acessibilidade | jest-axe adaptado + validação manual VoiceOver/TalkBack | Telas principais |

## 10.2. Testes unitários — o que é OBRIGATÓRIO
1. **Verificador de Stacks (100% de cobertura de ramos)**: toda regra de interação testada nos 3 resultados (✅/⚠️/⛔); teste de regressão por interação documentada (ex.: GLP-1 + pancreatite prévia deve ser ⛔).
2. **Schema das fichas**: toda ficha deve validar contra o schema JSON (doc 02); falha = CI vermelho. Campos obrigatórios: nivelEvidencia, referencias com PMID/DOI, seloRegulatório, modeloEvidencia por referência.
3. **Invariância de doses**: snapshot das fichas; alteração de `dosagem` sem revisão assinada bloqueia o merge (verificação via campo `revisadoPor`).
4. **Parser de referências**: PMID/DOI resolvíveis (formato), link PubMed gerado corretamente.
5. **Busca FTS**: typo tolerance, stemming PT-BR, resultados em < 100 ms no catálogo completo (teste com dataset de 200 fichas).

## 10.3. Testes de integração
- Catálogo SQLite embutido ↔ sync de diffs: atualização não pode apagar favoritos/anotações do usuário
- Favoritos/destaques persistem offline e sobrevivem a reinstalação (quando permitido)
- Deep links sociais (Instagram/TikTok/Reddit/YouTube) com fallback para browser in-app
- i18n: troca PT/EN/ES em runtime sem crash; ausência de string hardcoded (lint rule)

## 10.4. Testes E2E (Maestro) — cenários mínimos
```yaml
# flows/criticos.yaml (exemplos)
- Onboarding: aceita disclaimer → home
- Busca: digitar "semaglutida" → abre ficha → selo de evidência visível
- Ficha: expandir "Contraindicações" → abrir referência [1] → modal com PMID e link
- Verificador: montar stack (semaglutida + histórico pancreatite) → exibe ⛔ + fonte
- Offline: modo avião → catálogo completo funciona → selo "offline" visível
- Salvos: favoritar ficha → matar app → reabrir → favorito persiste
```

## 10.5. Gates de CI/CD
| Gate | Regra | Bloqueia |
|------|-------|----------|
| PR | lint + typecheck + unit + schema de fichas | merge |
| Nightly | E2E Android (emulador) + E2E iOS (simulador CI Mac) | release |
| Release | checklist manual assinado + revisão editorial do changelog de conteúdo | publicação lojas |
| Conteúdo | revisão dupla (farmacêutico + médico) registrada no CMS | publicação da ficha |

## 10.6. Validação manual via emulador
Processo definido e apoiado pelos scripts em <../../scripts/>:

| Script | Função |
|--------|--------|
| `scripts/setup.ps1` | Cria o projeto Expo (se ausente) e instala dependências |
| `scripts/android-emulator.ps1` | Lista AVDs, inicia emulador e roda o app |
| `scripts/ios-simulator.ps1` | iOS: orienta/executa em macOS (Windows não tem simulador iOS) |
| `scripts/validate.ps1` | Roda lint + typecheck + testes e abre o emulador com checklist manual |
| `scripts/manual-validation-checklist.md` | Checklist de QA manual por release |

### Como usar (resumo)
```powershell
# 1) Setup inicial (uma vez)
powershell -ExecutionPolicy Bypass -File scripts\setup.ps1

# 2) Validação manual no Android
powershell -ExecutionPolicy Bypass -File scripts\android-emulator.ps1

# 3) Rodada completa de QA (testes automáticos + emulador + checklist)
powershell -ExecutionPolicy Bypass -File scripts\validate.ps1
```

Pré-requisitos do host: Node.js LTS, pnpm/npm, Android Studio (SDK + um AVD criado, ex.: `Medium_Phone_API_35`), variável `ANDROID_HOME`. iOS exige macOS com Xcode.

## 10.7. Métricas de qualidade
- Cobertura de regras do Verificador: **100%** (bloqueante)
- Cobertura geral mínima: 70% (linhas), subindo para 85% pós-MVP
- Tempo de busca FTS no catálogo completo: < 100 ms (medido em CI com dataset fixture)
- Zero crashes no fluxo E2E por release
- Crash-free sessions > 99,5% pós-lançamento (Crashlytics/Sentry, opt-in)