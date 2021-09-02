import React from 'react';
import Pokemons from './data'
import PokemonsList from './componentes/listPokemons'


class App extends React.Component  {
  render () { 
    return (
      <main>
        <PokemonsList pokemonsData={ Pokemons } />
      </main>
    );
  } 
};

export default App;