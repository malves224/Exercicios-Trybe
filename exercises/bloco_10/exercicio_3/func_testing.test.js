const {
  encode,
  decode,
  techList,
  hydrate,
} = require('./func_testing');

describe('Testando comportamento das funções encode e decode estão como o esperado', () => {
  it('verifica se encode e decode são funções', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
  it('verifica se ao passar as vogais {a, e, i, o, u} a função retorna 1, 2, 3, 5, 5, e o inverso para o func encode', () => { 
    expect(encode('aeiou')).toBe('12345');
    expect(decode('12345')).toBe('aeiou');
  });
  it('verifica se as demais letras/ numeros são convertidas para cada caso',() => { 
    expect(encode('ola como vai?')).toBe('4l1 c4m4 v13?');
    expect(decode('4l1 c4m4 v13?')).toBe('ola como vai?');
  });
  it('verifica se o  tamanho string passado como parametro é o mesmo que retona', () => { 
    const paramString = 'oi como vai?';
    expect(encode(paramString).length).toBe(paramString.length);
    expect(decode(paramString).length).toBe(paramString.length);
  })
});

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});