const assert = require('assert');

const books = [{
		id: 1,
		name: 'As Crônicas de Gelo e Fogo',
		genre: 'Fantasia',
		author: {
			name: 'George R. R. Martin',
			birthYear: 1948,
		},
		releaseYear: 1991,
	},
	{
		id: 2,
		name: 'O Senhor dos Anéis',
		genre: 'Fantasia',
		author: {
			name: 'J. R. R. Tolkien',
			birthYear: 1892,
		},
		releaseYear: 1954,
	},
	{
		id: 3,
		name: 'Fundação',
		genre: 'Ficção Científica',
		author: {
			name: 'Isaac Asimov',
			birthYear: 1920,
		},
		releaseYear: 1951,
	},
	{
		id: 4,
		name: 'Duna',
		genre: 'Ficção Científica',
		author: {
			name: 'Frank Herbert',
			birthYear: 1920,
		},
		releaseYear: 1965,
	},
	{
		id: 5,
		name: 'A Coisa',
		genre: 'Terror',
		author: {
			name: 'Stephen King',
			birthYear: 1947,
		},
		releaseYear: 1986,
	},
	{
		id: 6,
		name: 'O Chamado de Cthulhu',
		genre: 'Terror',
		author: {
			name: 'H. P. Lovecraft',
			birthYear: 1890,
		},
		releaseYear: 1928,
	},
];

// Adicione o código do exercício aqui:

function authorBornIn1947() {
	const objOK = books.find((value, index) => books[index].author.birthYear === 1947)
	return objOK.author.name;
}

assert.strictEqual(authorBornIn1947(), 'Stephen King');

function smallerName() {
	let nameBook = [];
	let valueMenorNome;
	books.forEach((value) => {
		nameBook.push(value.name.length);
		nameBook.sort((a, b) => a - b);
		valueMenorNome = nameBook[0];
	})
	nameBook = books.find((value) => value.name.length === valueMenorNome)
	return nameBook.name;
}
assert.strictEqual(smallerName(), 'Duna');

const expectedResult = [{
		id: 1,
		name: 'As Crônicas de Gelo e Fogo',
		genre: 'Fantasia',
		author: {
			name: 'George R. R. Martin',
			birthYear: 1948
		},
		releaseYear: 1991,
	},
	{
		id: 5,
		name: 'A Coisa',
		genre: 'Terror',
		author: {
			name: 'Stephen King',
			birthYear: 1947
		},
		releaseYear: 1986,
	},
	{
		id: 4,
		name: 'Duna',
		genre: 'Ficção Científica',
		author: {
			name: 'Frank Herbert',
			birthYear: 1920
		},
		releaseYear: 1965,
	},
	{
		id: 2,
		name: 'O Senhor dos Anéis',
		genre: 'Fantasia',
		author: {
			name: 'J. R. R. Tolkien',
			birthYear: 1892
		},
		releaseYear: 1954,
	},
	{
		id: 3,
		name: 'Fundação',
		genre: 'Ficção Científica',
		author: {
			name: 'Isaac Asimov',
			birthYear: 1920
		},
		releaseYear: 1951,
	},
	{
		id: 6,
		name: 'O Chamado de Cthulhu',
		genre: 'Terror',
		author: {
			name: 'H. P. Lovecraft',
			birthYear: 1890
		},
		releaseYear: 1928,
	},
];

function booksOrderedByReleaseYearDesc(dados) {
	const arrayDeObjetosOrdenados = dados.sort((a, b) => b.releaseYear - a.releaseYear)
	return arrayDeObjetosOrdenados;
}
assert.deepStrictEqual(booksOrderedByReleaseYearDesc(books), expectedResult);




function everyoneWasBornOnSecXX() {
	return books.every((value) => value.author.birthYear > 1901 && value.author.birthYear < 2000)
}

assert.strictEqual(everyoneWasBornOnSecXX(), false);

const expectedResultSix = true;

function someBookWasReleaseOnThe80s() {
	return books.some((value) => value.releaseYear > 1979 && value.releaseYear < 2000)
}

assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResultSix);

const expectedResultUnique = false;

function authorUnique() {
	let elementos;
	books.forEach((value, index, element) => {
	 elementos = element[index];
		if (index === element.length - 1){
			return false;
		} else if (element[index].author.birthYear === element[index + 1].author.birthYear) {
			return true;
		} else {
			return false;
		}
	})
}
//assert.strictEqual(authorUnique(), expectedResultUnique);