let soma = null;
let mediaAritmetica = null;
let numbers = [1, 8, 43, 23, 2, 7, 100, 55, 7, 28];
let numeroMenor = numbers[0];
for (let i = 0; i < numbers.length; i += 1){

      if (numbers[i] < numeroMenor){
        numeroMenor = numbers[i];
    }    
  }
console.log(numeroMenor)
