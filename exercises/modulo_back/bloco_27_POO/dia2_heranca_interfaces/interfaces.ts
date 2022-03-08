interface IAnimal {
  name: string;
  getBirthDate(): Date;
  age: number;
}

class Bird implements IAnimal {
  private _birthDate;

  constructor(public name: string, birthDate: Date) {
    this._birthDate = birthDate;
  }

  get age() {
    return new Date().getFullYear() - this._birthDate.getFullYear();
  }

  getBirthDate(): Date {
      return this._birthDate;
  }
  fly() {
    console.log(`${this.name} está voando alto`);
    
  }
}

const dia1 = new Date();
dia1.setFullYear(2015);
const bird1 = new Bird('pirikito', dia1);
console.log(bird1.age);
bird1.fly();