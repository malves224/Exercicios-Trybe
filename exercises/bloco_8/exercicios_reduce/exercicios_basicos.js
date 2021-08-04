const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((result, number) => result - number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
//console.log(sumNumbers); // 113


const numbers2 = [101, 85, -30, 3, 99];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers2.reduce(getBigger, 0);
// console.log(bigger); // 101

const numbers3 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getEven = (number) => number % 2 === 0

const sumPares = (acc, number) => acc + number;

const sumNumbersPares = (numbers) =>  numbers.filter((getEven)).reduce(sumPares);

console.log(sumNumbersPares(numbers3));