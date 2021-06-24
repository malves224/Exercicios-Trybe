let salarioBruto = 5189.82;
let valorInss = null;

if (salarioBruto > 0 && salarioBruto <= 1556.94){
    valorInss = salarioBruto * 0.08;
} else if (salarioBruto > 1556.95 && salarioBruto <= 2594.92) {
    valorInss = salarioBruto * 0.09;
}else if (salarioBruto > 2594.93 && salarioBruto <= 5189.82) {
    valorInss = salarioBruto * 0.11;
} else if (salarioBruto > 5189.82) {
    valorInss = 570.88
}
