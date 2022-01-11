const axios = require("axios");

axios.get('https://pokeapi.co/api/v2/pokemon/1')
  .then((response) => console.log(response.data.name) )

