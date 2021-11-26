let nome = 'matheus alves de oliveira'

/*/function letraMaiusculaNaPrimeiraLetra (string){
    for (let index in nome){
        if (index == 0){
           string[index] = string[index].toUpperCase
        }
    }
}
letraMaiusculaNaPrimeiraLetra (nome)/*/
nome.replace(nome[0], 'a')
console.log(nome)