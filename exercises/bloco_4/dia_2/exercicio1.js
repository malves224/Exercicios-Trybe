let soma = null;
let mediaAritmetica = null;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let i = 0; i < numbers.length; i += 1){
    soma = (numbers[i]) + soma;
} 
mediaAritmetica = soma / numbers.length;
if (mediaAritmetica > 20) {
    console.log("Valor Maior que 20")
}else if(mediaAritmetica <= 20){
    console.log("valor menor ou igual a 20")
}