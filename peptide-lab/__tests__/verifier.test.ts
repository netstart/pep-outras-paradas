import { checkStack, checkConditions } from '../src/lib/verifier';

describe('Verificador de Stacks — regras de segurança', () => {
  it('detecta sinergia documentada BPC-157 + TB-500 como ok', () => {
    const v = checkStack(['bpc-157', 'tb-500']);
    expect(v).toHaveLength(1);
    expect(v[0].tipo).toBe('ok');
    expect(v[0].mecanismo).toMatch(/Sinergia/);
  });

  it('detecta sinergia Ipamorelin + CJC-1295 (mesmo sem CJC catalogado, não deve ser contraindicada)', () => {
    const v = checkStack(['ipamorelin', 'semaglutida']);
    expect(v).toHaveLength(1);
    // sem interação catalogada -> ok com ressalva
    expect(v[0].tipo).toBe('ok');
    expect(v[0].mecanismo).toMatch(/Ausência de evidência/);
  });

  it('retorna vazio para stack com uma única substância', () => {
    expect(checkStack(['semaglutida'])).toHaveLength(0);
  });

  it('cobre todos os pares de uma stack de 3 (3 vereditos)', () => {
    const v = checkStack(['semaglutida', 'bpc-157', 'tb-500']);
    expect(v).toHaveLength(3);
  });
});

describe('Busca invertida por condição de saúde', () => {
  it('gravidez contraindica semaglutida com gravidade alta', () => {
    const v = checkConditions(['semaglutida'], ['gravidez']);
    expect(v.length).toBeGreaterThan(0);
    expect(v.some((x) => x.tipo === 'contraindicada')).toBe(true);
  });

  it('neoplasia ativa bloqueia ipamorelin', () => {
    const v = checkConditions(['ipamorelin'], ['neoplasia ativa']);
    expect(v.some((x) => x.tipo === 'contraindicada')).toBe(true);
  });

  it('carcinoma medular de tireoide bloqueia semaglutida', () => {
    const v = checkConditions(['semaglutida'], ['carcinoma medular de tireoide']);
    expect(v.some((x) => x.tipo === 'contraindicada')).toBe(true);
  });

  it('usuário sem condições relevantes não gera alertas', () => {
    expect(checkConditions(['ghk-cu'], ['dor de cabeça'])).toHaveLength(0);
  });
});
