import React from 'react';
import PokemonComponent from './pokemon';
import '../style.css';

class PokemonsList extends React.Component {
  constructor() { 
    super();
    this.teste = this.teste.bind(this) // isso é para que a função teste começe a acessar o this
    console.log('oiii')
  }

  teste() { 
    console.log(this);
    console.log('tec')
  }
	render() {
		const { pokemonsData } = this.props;
		return( 
      <main className="main">
        <h1 className="title"> Pokemons </h1>
        <input onChange={ this.teste } type="text" />
        <div className="listPokemons" >
			  	{pokemonsData.map((pokemon) => <PokemonComponent className="cardsPokemons" 
           key={pokemon.id} pokemonsInfo={pokemon} />)}
		  	</div>
      </main>  
			);
	}
}

export default PokemonsList;