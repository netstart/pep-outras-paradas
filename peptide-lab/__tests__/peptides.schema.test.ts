import { peptides } from '../src/data/peptides';

// Validação editorial do catálogo: toda ficha deve atender ao schema do plano (.ai/plan/02 e 09)
describe('Integridade editorial do catálogo', () => {
  it('catálogo piloto tem pelo menos 5 fichas', () => {
    expect(peptides.length).toBeGreaterThanOrEqual(5);
  });

  it.each(peptides.map((p) => [p.nome, p] as const))('%s: campos obrigatórios preenchidos', (_n, p) => {
    expect(p.id).toBeTruthy();
    expect(p.nome).toBeTruthy();
    expect(p.categoria).toBeTruthy();
    expect(p.resumo.length).toBeGreaterThan(30);
    expect(p.mecanismo.length).toBeGreaterThan(20);
    expect(['approved', 'offlabel', 'preliminary', 'research']).toContain(p.nivelRegulatorio);
  });

  it.each(peptides.map((p) => [p.nome, p] as const))('%s: dosagem completa (min/média/máx/via/local/duração)', (_n, p) => {
    expect(p.dosagem.doseMinima).toBeTruthy();
    expect(p.dosagem.doseMedia).toBeTruthy();
    expect(p.dosagem.doseMaxima).toBeTruthy();
    expect(p.dosagem.vias.length).toBeGreaterThan(0);
    expect(p.dosagem.locaisAplicacao.length).toBeGreaterThan(0);
    expect(p.dosagem.duracaoMinima).toBeTruthy();
    expect(p.dosagem.duracaoMaxima).toBeTruthy();
  });

  it.each(peptides.map((p) => [p.nome, p] as const))('%s: tem contraindicações, monitoramento e status WADA', (_n, p) => {
    expect(p.contraindicacoes.length).toBeGreaterThan(0);
    expect(p.sinaisAlerta.length).toBeGreaterThan(0);
    expect(p.monitoramento.length).toBeGreaterThan(0);
    expect(p.statusWada).toBeTruthy();
  });

  it.each(peptides.map((p) => [p.nome, p] as const))('%s: referências com metadados e modelo de evidência', (_n, p) => {
    for (const r of p.referencias) {
      expect(r.titulo).toBeTruthy();
      expect(r.fonte).toBeTruthy();
      expect(['A', 'B', 'C']).toContain(r.nivel);
      expect(['invitro', 'animal', 'human', 'meta']).toContain(r.modelo);
      expect(r.pmid ?? r.doi ?? r.url).toBeTruthy();
    }
  });

  it.each(peptides.map((p) => [p.nome, p] as const))('%s: registro de revisão preenchido', (_n, p) => {
    expect(p.revisadoEm).toBeTruthy();
    expect(p.revisadoPor).toBeTruthy();
  });

  it('peptídeos "apenas pesquisa" não podem estar marcados como aprovados', () => {
    for (const p of peptides) {
      if (p.resumo.toLowerCase().includes('não') && p.resumo.toLowerCase().includes('aprovad')) {
        expect(['research', 'preliminary']).toContain(p.nivelRegulatorio);
      }
    }
  });
});
