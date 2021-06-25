let soma = null;
let mediaAritmetica = null;
let numbers = [1, 8, 43, 23, 70, 8, 100, 8, 36, 298];
let contadorDeImpares = null;
for (let i = 0; i < numbers.length; i += 1){
        if (numbers[i] % 2 === 1){
          contadorDeImpares += 1;
        } else if (contadorDeImpares === 0) {
          contadorDeImpares += 0
        }
    }
if (contadorDeImpares > 0){
  console.log(contadorDeImpares)
} else {
  console.log("nao ha numeros impares")
}