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
  });
});

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

describe('3º A função myRemoveWithoutCopy recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array', () => { 
  let numbersList = [1, 2, 3, 4];

  test('verifica se a ao chamar a função com o primeiro parametro um array, e o seguindo item para remover, retorna o mesmo array sem o item', () => {
    expect(myRemoveWithoutCopy(numbersList, 3)).toEqual([1, 2, 4]);
    numbersList = [1, 2, 3, 4];
  });

  test('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => { 
    expect(myRemoveWithoutCopy(numbersList, 3)).not.toEqual([1, 2, 3, 4]);
    numbersList = [1, 2, 3, 4];
  });

  test('ao chamar a função myRemoveWithoutCopy verifica se o array passado como parametro sofreu alterações', () => { 
    myRemoveWithoutCopy(numbersList, 3);
    expect(numbersList).not.toEqual([1, 2, 3, 4]);
    numbersList = [1, 2, 3, 4];
  });

  test('ao chamar a função myRemoveWithoutCopy(numbersList, 5) retorna o array esperado', () => {
    expect(myRemoveWithoutCopy(numbersList, 5)).toEqual([1, 2, 3, 4]);
  });
});

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

//console.log(myFizzBuzz(15));

describe('4ºfunção myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número', () => { 

  test('Ao chamar um numero divisivel por 3 e 5 retorna a string fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  test('ao chamar a função com numero divisivel por 3, retorna a string fizz', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
  });

  test('ao chamar a função com um numero divisivel por 5, retorna a string buzz', () => { 
    expect(myFizzBuzz(20)).toBe('buzz');
  });

  test('ao chamar a função com um numero que nao seja divisivel por 5 e 3 retorna o proprio numero passado por parametro', () => {
    const numberCheck = 4;
    expect(myFizzBuzz(numberCheck)).toBe(numberCheck);
  });

  test('ao chamar a função com parametro que nao seja um number, retornar false', () => { 
    expect(myFizzBuzz('1')).toBe(false);
  });
});

  describe('5º comparação de 2 objetos para verificar se são idênticos ou nao', () => { 
  const obj1 = {
    title: 'My Title',
    description: 'My Description',
  };
  
  const obj2 = {
    description: 'My Description',
    title: 'My Title',
  };
  
  const obj3 = {
    title: 'My Different Title',
    description: 'My Description',
  };
  
  test('verifica se o obj1 é identico ao obj2', () => { 
    expect(obj1).toEqual(obj2);
  })

  test('verifica se o obj1 NAO é identico ao obj3', () => { 
    expect(obj1).not.toEqual(obj3);
  })
});