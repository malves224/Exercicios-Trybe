let salarioBruto = 5189.82;
let valorInss = null;
let salarioLiquido = null;

if (salarioBruto > 0 && salarioBruto <= 1556.94){
    valorInss = salarioBruto * 0.08;
} else if (salarioBruto > 1556.95 && salarioBruto <= 2594.92) {
    valorInss = salarioBruto * 0.09;
}else if (salarioBruto > 2594.93 && salarioBruto <= 5189.82) {
    valorInss = salarioBruto * 0.11;
} else if (salarioBruto > 5189.82) {
    valorInss = 570.88
}
let salarioBase = salarioBruto - valorInss;

if (salarioBase <= 1903.98) {
    salarioLiquido = salarioBase + " Insento de imposto de renda"
}else if (salarioBase >= 1903.99 && salarioBase <= 2826.65){
    salarioLiquido = salarioBase - salarioBase * 0.075
}else if (salarioBase >= 2826.66 &&  salarioBase <= 3751.05){
    salarioLiquido = salarioBase - salarioBase * 0.15 
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    salarioLiquido = salarioBase - salarioBase * 0.225
} else if ( salarioBase > 4664.68) {
    salarioLiquido = salarioBase - salarioBase * 0.275
}

console.log (salarioLiquido.toFixed(2));