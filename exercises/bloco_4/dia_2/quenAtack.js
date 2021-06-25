// posição rainaha
let posicaoRainhaLinha = 4;
let posicaoRainhaColuna = 4;

//qual posição peça 
let posicaoPecaLinha = 2;
let posicaoPecaColuna = 6;

// ataque bem sucedido 
let ataqueBemSucedido = false;

// quais cenarios ela pode caminhar pode atacar 

//se a peça tiver na mesma linha, ataque bem sucedido 

if (posicaoPecaLinha === posicaoRainhaLinha){
    console.log ("ataque bem sucedido na mesma linha ")
    ataqueBemSucedido = true;
    
}

if (posicaoPecaColuna === posicaoRainhaColuna) {
    console.log ("ataque bem sucedido na mesma coluna ")
    ataqueBemSucedido = true;
} 

for(let index = 1; index < 8; index += 1) {
    let linhaAtualRainha = posicaoRainhaLinha - index;
    let colunaAtualRainha = posicaoRainhaColuna - index;

    if(posicaoPecaLinha === linhaAtualRainha && posicaoPecaColuna === colunaAtualRainha){
        console.log("Ataque bem sucedido na diagonal inferior esqeurda");
        ataqueBemSucedido = true;
        break;
    }
}

for(let index = 1; index < 8; index += 1) {
    let linhaAtualRainha = posicaoRainhaLinha + index;
    let colunaAtualRainha = posicaoRainhaColuna - index;
    if (linhaAtualRainha === posicaoPecaLinha && colunaAtualRainha === posicaoPecaColuna){
        ataqueBemSucedido = true;
        console.log("ataque bem sucedido!!")
    }

}

//diagonal superior direita 

for (let index = 1; index < 8; index += 1) {
    let linhaAtualRainha = posicaoRainhaLinha  + index;
    let colunaAtualRainha = posicaoRainhaColuna + index;

    if (linhaAtualRainha === posicaoPecaLinha &&  colunaAtualRainha === posicaoPecaColuna) {
        ataqueBemSucedido = true;
        console.log("ataque bem sucedido!!!")
    }
}



// diagonal inferior direita 

for (let index = 1; index <8; index += 1){
    let linhaAtualRainha = posicaoRainhaLinha - index;
    let colunaAtualRainha = posicaoRainhaColuna + index;
    if (linhaAtualRainha === posicaoPecaLinha && colunaAtualRainha === posicaoRainhaColuna){
        ataqueBemSucedido = true;
        console.log("ataque bem sucedido...")
    }
}

console.log(ataqueBemSucedido);

if ( ataqueBemSucedido === false){
    console.log("a peça nao pode ser atacada pela a rainha ")
}