const oddsAndEvens = [10, 3, 4, 415, 45, 69, 45, 8, 7, 13];

const ordenar = array => { 
    const arrayOrdenado = array.sort((b, a) => a - b); //ordenado decrescente, mude para a, b para ordenar crescente.
    return ` Os números ${arrayOrdenado} se encontram ordenados de forma crescente!`;
}

console.log(ordenar(oddsAndEvens)); // será necessário alterar essa linha 😉