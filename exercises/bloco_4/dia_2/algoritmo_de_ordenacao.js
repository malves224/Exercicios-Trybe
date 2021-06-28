let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numeroMultiplicado;
for (let index = 0; index <= array.length; index += 1) 
  for (let secondIndex = index-1; secondIndex < index; secondIndex += 1) {
  if ( index === array.length)  {
    numeroMultiplicado = array[index-1] * 2;
  } else {
    numeroMultiplicado = array[secondIndex] * array[index]; 
  }
  if (secondIndex < index && secondIndex >= 0){
      array[secondIndex] = numeroMultiplicado;
   }
  }
  

console.log (array);

// Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo: 