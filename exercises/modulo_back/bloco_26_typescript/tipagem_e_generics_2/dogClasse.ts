class Dog {
  name: string
  tipo: string
  idade: number
  peso?: number

  constructor(name: string, tipo: string, idade: number, peso?: number) {
    this.name = name;
    this.tipo = tipo;
    this.idade = idade;
    this.peso = peso;
  }

  latir(): void {
    console.log(`dog ${this.name}: au au`);
  }

  comer(): void {
    console.log(`dog ${this.name} comendo`);
  }

  darAPata(): void {
    console.log(`dog ${this.name} dando a pata `);
    
  }
}

const dogScooby = new Dog('scooby', 'rottweiler', 5);
console.log(dogScooby);
dogScooby.comer();
dogScooby.darAPata();
dogScooby.latir();