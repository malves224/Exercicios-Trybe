const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const correcao = (provaAluno, gabarito) => {
    let incremento = 1;
    let decremento = 0.5;
    let pontuacao = 0;
 for (let index = 0; index < gabarito.length; index += 1) {
    if (provaAluno[index] === 'N.A' ){
    } else if (provaAluno[index] === gabarito[index]){
        pontuacao += incremento
    } else {
        pontuacao -= decremento
    }
 }
 return pontuacao;
}


const hofPontuacao = (answersStudent, gabarito, correcao) => { 
   return correcao(answersStudent, gabarito);
}

console.log(hofPontuacao(STUDENT_ANSWERS, RIGHT_ANSWERS, correcao))