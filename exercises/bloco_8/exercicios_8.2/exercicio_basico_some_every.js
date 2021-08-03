const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
 return arr.some((nameArr) => nameArr === name)
}

// console.log(hasName(names, 'Ana')) retorna true