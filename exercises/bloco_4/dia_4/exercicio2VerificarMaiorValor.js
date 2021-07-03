function highestCount(array) {
  let maiorNumero = 0;
  let output = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > array[index + 1]) {
      if (maiorNumero < array[index])
        maiorNumero = array[index]
    } else {
      if (array[array.length - 1] > maiorNumero) {
        maiorNumero = array[array.length - 1]
      }
    }
  }
  for (let index in array) {
    if (maiorNumero === array[index]) {
      output ++
    }
  }
  return (output)
}
console.log(highestCount([9, 1, 9, 3, 9, 9, 7]))
 // exercicio 3 do bloco 4;5   
function indiceMenorValor (array){
  let indexMenorValor = 0;
  for ( let index = 0; index < array.length; index += 1){
    if (array[index] > array[index + 1]){
      if (array[indexMenorValor] > array[index + 1]){
      indexMenorValor = index + 1;
    }
    }
  }
  return indexMenorValor;
}    
console.log(indiceMenorValor([-5, 2, 6, -10, 4, -10, -4]));


// outra forma de resolver exercicio 2 
//let numerosInteiros = [500, 3,365, 100, 10, 600]
//function maiorNumero (array){
//    let maiorNumero = 0;
//    for (let index = 0; index < array.length; index += 1){
//        for (let index2 = 0; index2 < array.length; index2 += 1){
//            if (array[index2] > array[index]){
//                if (maiorNumero < array[index])
//                maiorNumero = array[index2]
//            }
//        }
//    }
    
    
//    console.log (maiorNumero);
//}

//exercicio 4 Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function MaiorCaracteres (array){
  let MaiorCaracteres = array[0];
  for (let Valor of array){
    if (Valor.length > MaiorCaracteres.length){
      MaiorCaracteres = Valor;
    }
  }
  return MaiorCaracteres
}
console.log(MaiorCaracteres(['Fernanda', 'Lucas', 'Nádia', 'Cairo', ]));