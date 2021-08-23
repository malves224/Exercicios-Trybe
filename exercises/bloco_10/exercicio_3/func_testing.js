function encode(string) {
	let outputString = '';
	for (let i of string) {
		if (i === 'a') {
			outputString += '1';
		} else if (i === 'e') {
			outputString += '2';
		} else if (i === 'i') {
			outputString += '3';
		} else if (i === 'o') {
			outputString += '4';
		} else if (i === 'u') {
			outputString += '5';
		} else {
			outputString += i;
		};
	};
	return outputString;
};


function decode(string) {
	let outputString = '';
	for (let i of string) {
		if (i === '1') {
			outputString += 'a';
		} else if (i === '2') {
			outputString += 'e';
		} else if (i === '3') {
			outputString += 'i';
		} else if (i === '4') {
			outputString += 'o';
		} else if (i === '5') {
			outputString += 'u';
		} else {
			outputString += i;
		};
	};
	return outputString
};

function techList(array, stringName) {
	let arrayOutPut = [];
	for (let index of array) {
		let objeto = {
			tech: index,
			name: stringName
		}
		arrayOutPut.push(objeto)
	};
	if (array.length === 0) {
		return "Vazio!";
	} else {
		return arrayOutPut.sort(function (a, b) {
			return (a.tech > b.tech) ? 1 : ((b.tech > a.tech) ? -1 : 0) // encontrei essa solução para ordenanar objetos em um array no site https://www.edsonemiliano.com.br/blog
		});
	};
};

function hydrate(string) {
	let onlyNumbers;
	let quantidadeDeBebidas = 0;
	let numeroASerSomado = 0;
	onlyNumbers = string.replace(/([^\d])+/gim, '');
	for (let i of onlyNumbers) {
		numeroASerSomado = Number(i);
		quantidadeDeBebidas = quantidadeDeBebidas + numeroASerSomado;
	}
	if (quantidadeDeBebidas < 2 && quantidadeDeBebidas > 0) {
		return quantidadeDeBebidas + " copo de água"
	} else {
		return quantidadeDeBebidas + " copos de água"
	};
};

module.exports = { 
	encode,
	decode,
	techList,
	hydrate,
}