class Superclass {
  _isSuper: boolean;

  constructor() {
    this._isSuper= false;
  }

  sayHelo(): void {
    console.log("Hello");
  }

}

class SubClass extends Superclass {
  constructor() {
    super();
    this._isSuper = false;
  }
}

const callSuperclass = (objForClass: Superclass) => {
  objForClass.sayHelo();
}

const callSubClass = (objForClass: SubClass) => {
  objForClass.sayHelo();
}

// callSuperclass(spc);
// callSuperclass(sbc);

class Animal {
  /*
    Ao invés de declarar os atributos antes do construtor, receber parâmetros 
    no construtor e colocá-los nos atributos da classe, se não formos 
    validar, podemos utilizar uma forma simplificada de escrita, simplesmente
    colocando o modificador de visibilidade na frente
    do nome do parâmetro no construtor

    Exemplo
    O seguinte código:

    public x: number
    constructor(x: number) { this.x = x }

    Pode ser substituído por:

    constructor(public x: number) { }
  */
  constructor(public name: string, private birthDate: Date) { }

  get age() {
    const today = new Date();
    let age = today.getFullYear() - this.birthDate.getFullYear();

    if (today.getMonth() - this.birthDate.getMonth() <= 0 && today.getDate() <= this.birthDate.getDate()) {
      age--;
    }
    return age;
  }
}


class Mammal extends Animal {
  walk() {
    console.log(`${this.name} está andando!`);
  }
}

const d1 = new Date();
d1.setFullYear(2015);
const m1 = new Mammal('Tatu', d1);

const myFunc = (animal: Animal) => {
  console.log(animal.age);
}

myFunc(m1);
m1.walk();

/*
Saída (código rodado em 2021):
6
Tatu está andando!
*/

/*
Saída (código executado em 2021):

Papagaio está voando!
*/