let player = {
    nome: 'marta',
    lastName: 'silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
}

console.log('a jogadora ', player.nome, 'tem', player.age, 'anos de idade');

console.log('a jogadora', player.nome, 'foi eleita a melhor do mundo por ', player.bestInTheWorld.length, 'vezes')