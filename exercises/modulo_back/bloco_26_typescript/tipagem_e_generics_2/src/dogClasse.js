"use strict";
class Dog {
    constructor(name, tipo, idade, peso) {
        this.name = name;
        this.tipo = tipo;
        this.idade = idade;
        this.peso = peso;
    }
    latir() {
        console.log(`dog ${this.name}: au au`);
    }
    comer() {
        console.log(`dog ${this.name} comendo`);
    }
    darAPata() {
        console.log(`dog ${this.name} dando a pata `);
    }
}
const dogScooby = new Dog('scooby', 'rottweiler', 5);
console.log(dogScooby);
dogScooby.comer();
dogScooby.darAPata();
dogScooby.latir();
