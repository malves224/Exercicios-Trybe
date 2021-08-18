function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

describe('1º sum que soma os 2 parametros, apenas se os parametros forem number', () => {
  test('soma 2 valores passado como parametro', () => {
    expect(sum(1, 3)).toBe(4);
  });

  test('caso tenha algum parametro que nao seja number retornar erro', () => {
    expect(() => { sum(1,'1')}).toThrow();
  });
});