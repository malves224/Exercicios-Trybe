import React from 'react';
import Pokemons from './data'
import PokemonsList from './componentes/listPokemons'

class App extends React.Component  {
  render () { 
    return (
      <div>
        <PokemonsList pokemonsData={ Pokemons } />
      </div>
    );
  } 
};

export default App;