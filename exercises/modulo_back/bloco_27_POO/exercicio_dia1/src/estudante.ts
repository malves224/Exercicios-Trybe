abstract class People {
   private _name: string = String()
   private _birthDate: Date = new Date();

  constructor(name: string, birthDate: Date,) {
    this.name = name;
    this.birthDate = birthDate;
  }

  get name() {
    return this._name;
  }
  set name(data: string) {
    if (data.length < 2){
      console.log('o nome deve ter no minimo 3 caracteres');
    }
    this._name = data;
  }

  get birthDate() {
    return this._birthDate;
  }

  getAge(): number {
    const date = new Date();
    const age = date.getFullYear() - this._birthDate.getFullYear();
    return age;
  }

  set birthDate(data: Date) {
    const date = new Date();
    const dateToday = `${date.getDate()}${date.getMonth() +1}${date.getFullYear()}`;
    const dateBirthDate = `${data.getDate()}${data.getMonth() +1}${data.getFullYear()}`;
    const age = date.getFullYear() - data.getFullYear();
    if (age < 0) {
       console.log('data nao pode ser no futuro');
    } else if (age >= 120) {
      console.log('idade nao pode ser superior a 120');
    } else {
      this._birthDate = data;
    }
  }
}

class Estudante extends People {
  private _matricula: string;
  private _notasDeProva: [number, number, number, number];
  private _notasDeTrabalho: [number, number];

  constructor(matricula: string, 
    notasDeProva: [number, number, number, number], 
    notasDeTrabalho: [number, number],
    name: string, birthDate: Date
    ) {
    super(name, birthDate);
    this._matricula = matricula;
    this._notasDeProva = notasDeProva;
    this._notasDeTrabalho = notasDeTrabalho;
  }

  get somaNotas(): number {
    const somaAllNotas = [...this._notasDeProva, ...this._notasDeTrabalho]
      .reduce((prev, current) => prev + current);
    return somaAllNotas
  };

  get avgNotas(): number {
    const somaAllNotas = [...this._notasDeProva, ...this._notasDeTrabalho]
      .reduce((prev, current) => prev + current);    
    const avgNotas = somaAllNotas / [...this._notasDeProva, ...this._notasDeTrabalho].length;
    return Number(avgNotas.toFixed(2));
  }
}



// const joao = new Estudante('joão', '125', [3, 5, 8, 4], [6, 8]);
// console.log(joao);
// console.log(joao.avgNotas);

