const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
 return arr.some((nameArr) => nameArr === name)
}

// console.log(hasName(names, 'Ana')) retorna true

const pessoas = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, minimumAge) => arr.every((pessoa) => pessoa.age >= minimumAge);
  
  
  console.log(verifyAges(pessoas, 18));