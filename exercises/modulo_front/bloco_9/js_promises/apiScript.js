// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const adicionarPiada = (data) => {
  const elementoPiada = document.getElementById('jokeContainer');
  elementoPiada.innerHTML = data.joke;
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

   fetch(API_URL, myObject)
    .then(response => response.json()) // converte os dados recebidos em json
    .then(data => {
      adicionarPiada(data)
    });
};



window.onload = () => fetchJoke();