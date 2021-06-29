function verificaPalindromo (palavra){
let palavraInvertida = '';
for (let index = palavra.length-1; index > -1; index -= 1){
    palavraInvertida = palavraInvertida + palavra[index]
} if (palavra === palavraInvertida) {
    console.log(true);
} else {
    console.log(false);
}
}
verificaPalindromo ("desenvolvimento") 