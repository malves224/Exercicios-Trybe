enum daysWeek {
  monday = 1,
  tuesday,
  wednesday,
  thursday,
  friday,
}

enum rainbowColors {
  red = 'vermelho',
  orange = 'laranja',
  yellow = 'amarelo',
  green = 'verde',
  blue = 'azul'
}

enum actions {
  abrir = 1,
  visualizar,
  salvar,
  imprimir,
  fechar,
}

enum cardinalPoints {
  norte = 'N',
  leste = 'L',
  sul = 'S',
  oeste = 'O'
}

const actionAbrir: string = actions[1];
const cardinalPointsLeste: string = cardinalPoints.leste;

console.log(actionAbrir);
console.log(cardinalPointsLeste);
console.log(rainbowColors['red']);
console.log(daysWeek[5]);
