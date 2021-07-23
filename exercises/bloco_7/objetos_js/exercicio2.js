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

  console.log(lesson2);

  const printKeys = objeto => Object.keys(objeto);

  console.log (printKeys(lesson2));