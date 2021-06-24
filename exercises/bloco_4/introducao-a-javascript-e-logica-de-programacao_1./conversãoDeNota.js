let notaEmPorcentagem = 24;
let notaemLetra = "";

if (notaEmPorcentagem < 0 ||  notaEmPorcentagem > 100){
    notaemLetra = "Nota Invalida";
} else if (notaEmPorcentagem >= 90) {
    notaemLetra = "A";
} else if (notaEmPorcentagem >= 70){
    notaemLetra = "C";
} else if (notaEmPorcentagem >= 60){
    notaemLetra = "D";
} else if (notaEmPorcentagem >= 50){ 
    notaemLetra = "E";
} else if (notaEmPorcentagem < 50 ){
    notaemLetra = "F";
} console.log(notaemLetra);