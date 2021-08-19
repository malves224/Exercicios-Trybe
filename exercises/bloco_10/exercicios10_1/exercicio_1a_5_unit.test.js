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

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

describe('2º função myRemove(arr, item) recebe um array e retorna um novo array sem o elemento item', () => { 
  const arrayOld = [1, 2, 3, 4];
  test('Verifica se retorna um novo array sem o elemento item', () => { 
    expect(myRemove(arrayOld, 3)).toEqual([1, 2, 4]);

  });

  test('Verifica se a função nao retorna o array novo sem remover o item', () => { 
    expect(myRemove(arrayOld, 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('verifica se o array passado como parametro nao sofreu alterações', () => { 
    myRemove(arrayOld, 3);
    expect(arrayOld).toEqual([1, 2, 3, 4]);
  });
  
  test('verifica se a chamada myRemove([1, 2, 3, 4], 5) retorno o array esperado', () => {
    expect(myRemove(arrayOld, 5)).toEqual([1, 2, 3, 4]);
  })
});