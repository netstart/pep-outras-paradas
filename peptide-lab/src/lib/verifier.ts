import { peptides } from '../data/peptides';
import { Interacao } from '../data/types';

export type VerdictKind = 'ok' | 'cautela' | 'contraindicada';

export interface Verdict {
  tipo: VerdictKind;
  substanciaA: string;
  substanciaB: string;
  mecanismo: string;
  referencias: Interacao['referencias'];
}

// Condição -> peptídeos contraindicados (busca invertida, doc 03 seção 3.6)
const CONDITIONS: { condicao: string; proibidos: string[] }[] = [
  { condicao: 'neoplasia ativa', proibidos: ['bpc-157', 'tb-500', 'ipamorelin'] },
  { condicao: 'carcinoma medular de tireoide', proibidos: ['semaglutida'] },
  { condicao: 'nem2', proibidos: ['semaglutida'] },
  { condicao: 'pancreatite', proibidos: ['semaglutida'] },
  { condicao: 'gastroparesia', proibidos: ['semaglutida'] },
  { condicao: 'gravidez', proibidos: ['semaglutida', 'bpc-157', 'tb-500', 'ipamorelin'] },
  { condicao: 'lactação', proibidos: ['semaglutida', 'bpc-157', 'tb-500', 'ipamorelin'] },
  { condicao: 'retinopatia diabética proliferativa', proibidos: ['ipamorelin'] },
];

function findInteraction(aId: string, bId: string): Interacao | null {
  const a = peptides.find((p) => p.id === aId);
  const b = peptides.find((p) => p.id === bId);
  const hit = (p: typeof a, alvo: typeof b) =>
    p?.interacoes.find(
      (i) =>
        alvo &&
        (i.substancia.toLowerCase().includes(alvo.nome.toLowerCase()) ||
          alvo.sinonimos.some((s) => i.substancia.toLowerCase().includes(s.toLowerCase())))
    );
  return hit(a, b) ?? hit(b, a) ?? null;
}

export function checkStack(ids: string[]): Verdict[] {
  const verdicts: Verdict[] = [];
  for (let i = 0; i < ids.length; i++) {
    for (let j = i + 1; j < ids.length; j++) {
      const inter = findInteraction(ids[i], ids[j]);
      const a = peptides.find((p) => p.id === ids[i])!;
      const b = peptides.find((p) => p.id === ids[j])!;
      if (!inter) {
        verdicts.push({
          tipo: 'ok',
          substanciaA: a.nome,
          substanciaB: b.nome,
          mecanismo: 'Sem interação documentada neste catálogo. Ausência de evidência não é evidência de ausência.',
          referencias: [],
        });
      } else {
        verdicts.push({
          tipo: inter.tipo === 'sinergia' ? 'ok' : inter.tipo === 'cautela' ? 'cautela' : 'contraindicada',
          substanciaA: a.nome,
          substanciaB: b.nome,
          mecanismo: inter.mecanismo + (inter.tipo === 'sinergia' ? ' (Sinergia documentada.)' : ''),
          referencias: inter.referencias,
        });
      }
    }
  }
  return verdicts;
}

// Verifica condições de saúde informadas pelo usuário contra a pilha
export function checkConditions(ids: string[], condicoes: string[]): Verdict[] {
  const verdicts: Verdict[] = [];
  const condNorm = condicoes.map((c) => c.toLowerCase().trim()).filter(Boolean);
  for (const id of ids) {
    const p = peptides.find((x) => x.id === id)!;
    for (const c of p.contraindicacoes) {
      const match = condNorm.some(
        (u) => c.condicao.toLowerCase().includes(u) || u.includes(c.condicao.toLowerCase())
      ) || CONDITIONS.some(
        (cc) => condNorm.some((u) => cc.condicao.includes(u)) && cc.proibidos.includes(id)
      );
      if (match) {
        verdicts.push({
          tipo: c.gravidade === 'alta' ? 'contraindicada' : 'cautela',
          substanciaA: p.nome,
          substanciaB: c.condicao,
          mecanismo: c.mecanismo,
          referencias: c.referencias,
        });
      }
    }
  }
  return verdicts;
}
