const resultadoSorteio = ()  => Math.ceil(Math.random () * 5)
    

const verificaSorteio = (jogo,resultado ) => {
  if (jogo === resultado){
    return '2 palavras Para bens';
  } else {
    return 'errrrooou';
  }
}

console.log(verificaSorteio(5, resultadoSorteio()))