const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const addKey = (objeto, chave, valor) => objeto[chave] = valor;

  addKey (lesson2, 'turno', 'manhã');


  const printKeys = objeto => Object.keys(objeto);

  //console.log (printKeys(lesson2));

const lengthObject = (objeto) => Object.keys(objeto).length;
//console.log(lengthObject(lesson3));

const AllLessons = {} 
Object.assign(AllLessons , {lesson1, lesson2, lesson3});// o allLessons é um objeto que contem 3 objetos sendo os objetos que estao no 2 parametro. 
//console.log(Object(Object.values(AllLessons))); 

const ContabilizaEstudantes = (objeto) => {
	const arrayComObjetos = Object.values(objeto);// objeto que esta com todos objetos anterios em array
	let TotalEstudantes = 0;
	for (let index = 0; index < arrayComObjetos.length; index += 1) {
		TotalEstudantes = TotalEstudantes + arrayComObjetos[index].numeroEstudantes; //como transformei o objeto em um array em que cada posição do array é um objeto conseguimos percorrer o array e extrair valor de cada posição usando .NomeDaChave
	}
	return TotalEstudantes;
}

//console.log(ContabilizaEstudantes(AllLessons));

const valorPorPosicao = (objeto, index) => Object.values(objeto)[index];

//console.log(valorPorPosicao(lesson2, 1));


const verificarPar = (objeto, chave, valor) => {
	const arrayComArrays = Object.entries(objeto)
	let output;
	for (let index = 0; index < arrayComArrays.length; index += 1){
		if (chave == arrayComArrays[index][0] && valor === arrayComArrays[index][1]){
			output = true;
			break;
		} else {
			output = false;
		}
	}
	return output;
}

console.log(verificarPar(lesson1, 'materia', 'Matemática'));