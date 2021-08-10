const assert = require('assert');

const pushNumber = (list, number) => list.push(number);

let numbers = [];

//setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

//setTimeout(() => assert.deepStrictEqual(numbers, [2, 3, 1]), 3000);

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);


const getUser = (callback) => {
    setTimeout(() => {
      const user = {
        firstName: "Ivan",
        lastName: "Ivanovich",
        nationality: "Russian",
      };
      console.log(callback(user));
    }, delay());
  };


getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo