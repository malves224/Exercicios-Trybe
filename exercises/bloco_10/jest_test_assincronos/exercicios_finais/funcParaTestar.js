const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

const users = [{
    id: 1,
    name: 'Mark'
  },
  {
    id: 2,
    name: 'Paul'
  },
];

const findUserById = (id) => new Promise((resolve, reject) => {
  const result = users.find((user) => user.id === id);

  if (result) {
    return resolve(result);
  }

  return reject(new Error(`User with ${id} not found.`));
});

const getUserName = (userId) => findUserById(userId).then((user) => user.name);

const fetch = require("node-fetch");

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

const Animals = [{
    name: 'Dorminhoco',
    age: 1,
    type: 'Dog'
  },
  {
    name: 'Soneca',
    age: 2,
    type: 'Dog'
  },
  {
    name: 'Preguiça',
    age: 5,
    type: 'Cat'
  },
];

const findAnimalByName = (name) => {
  new Promise((resolve, reject) => { 
    setTimeout(() => {
      const listArray = Animals.filter((animal) => animal.name === name);
      if (listArray.length !== 0) {
        return resolve(listArray);
      };

      return reject({ error: 'Nenhum animal com esse nome!'});
    }, 100);
  });
};

const getAnimal = async (name) => {
  return findAnimalByName(name).then(list => console.log(list));
};
// ---------------------

getAnimal('Soneca');

module.exports = {
  uppercase,
  findUserById,
  getUserName,
  getRepos,
  findAnimalByName,
  getAnimal,
}