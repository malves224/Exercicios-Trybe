const fatorial = (number) => {
    let contador = 1;
    for (index = 2; index <= number ; index += 1){ 
       contador =  contador * index;
    }
    return contador;
}

console.log(fatorial(15));