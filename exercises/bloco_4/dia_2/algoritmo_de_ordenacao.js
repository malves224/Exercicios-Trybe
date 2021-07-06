let array = [1, 3, 2, 5, 12, 36, 84, 4]
let numeroMultiplicado;
for (let index = 1; index <= array.length; index += 1) 
  for (let secondIndex = index-1; secondIndex < index; secondIndex += 1) {
  if ( index === array.length)  {
    numeroMultiplicado = array[index-1] * 2;
  } else {
    numeroMultiplicado = array[secondIndex] * array[index]; 
  }
      array[secondIndex] = numeroMultiplicado;
  }
  

console.log (array);
