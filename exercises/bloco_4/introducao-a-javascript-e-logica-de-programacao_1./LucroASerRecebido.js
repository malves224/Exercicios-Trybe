let salarioBruto = 1500.10
let aliquotaInss = null;

if (salarioBruto > 0 && salarioBruto < 1556.94){
    aliquotaInss = 0.08;
} else if (salarioBruto > 1.556,95 && salarioBruto <= 2.594,92) {
    aliquotaInss = 0.09;
}
console.log(aliquotaInss);