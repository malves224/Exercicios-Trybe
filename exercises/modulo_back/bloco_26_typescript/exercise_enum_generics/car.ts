enum Color {
  PRETA = "preta",
  BRANCA = 'branca',
  VERMELHA = 'vermelha',
  PRATA = 'prata',
}

enum Direction {
  LEFT = "esquerda",
  RIGHT = "direia"
}

enum Dors {
  DRIVER = "Da pessoa motorista",
  RIDE = "Da pessoa carona",
  BEHIND_DRIVER = "De trás da pessoa motorista",
  BEHIND_RIDE = "De trás da pessoa carona"
}

class Car {
  brand: string;
  color: Color;
  doors: number;

  constructor(brand: string, color: Color, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors
  }

  honk(): void {
    console.log(`car ${this.brand} buzinando`);
  }

  openTheDoor(door: Dors): void {
    console.log(`abrindo porta ${door}`);
  }

  closeTheDor(door: Dors): void {
    console.log(`fechando porta ${door}`);
  }

  turnOn(): void {
    console.log(`carro ${this.brand} ligado`);
  }

  turnOff(): void {
    console.log(`carro ${this.brand} desligado`);
  }

  speedUp(): void {
    console.log(`carro ${this.brand} acelerando`);
  }

  speedDown(): void {
    console.log(`carro ${this.brand} freando`);
  }

  stop(): void {
    console.log(`carro ${this.brand} parou`);
  }

  turn(direct: Direction): void {
    console.log(`carro ${this.brand} virando a ${direct} `);
  }
}

const car1 = new Car('Corsa', Color.VERMELHA, 4);
car1.speedUp();
car1.openTheDoor(Dors.BEHIND_DRIVER);
car1.closeTheDor(Dors.BEHIND_DRIVER);
car1.turn(Direction.LEFT);
car1.turn(Direction.RIGHT);