let soma = null;
let mediaAritmetica = null;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorValor = null;
for (let i = 0; i < numbers.length; i += 1){
        if (maiorValor < numbers[i]){
          maiorValor = (numbers[i])
        } 
    }
console.log(maiorValor);