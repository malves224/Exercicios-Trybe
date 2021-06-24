let anguloA = 50;
let anguloB = -70;
let anguloC = -60;
let somaDosAngulos = (anguloA + anguloB + anguloC);

if (somaDosAngulos === 180) {
    console.log(true);
} else if (somaDosAngulos > 0 && somaDosAngulos < 180 || somaDosAngulos > 180 ) {
    console.log(false);
} else if (somaDosAngulos < 0){
    console.log("triangulo invalido!")
}