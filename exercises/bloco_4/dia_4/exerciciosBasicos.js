    let player = {
    nome: 'marta',
    lastName: 'silva',
    age: 34,
    medalhas: {
        golden: 2,
        silver: 3
    },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
}

function dadosDoAtleta(nome) {
if (nome === player.nome)  {
console.log('a jogadora ', player.nome, 'tem', player.age, 'anos de idade');

console.log('a jogadora', player.nome, 'foi eleita a melhor do mundo por ', player.bestInTheWorld.length, 'vezes')

console.log('a jogadora possui', player.medalhas.golden, 'medalhas de ouro e', player.medalhas.silver, 'de prata ')
} else {
    console.log("atleta nao econtrado")
}
}

dadosDoAtleta ('');