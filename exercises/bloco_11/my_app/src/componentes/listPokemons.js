import React from 'react';
import PokemonComponent from './pokemon';
import '../style.css';

class PokemonsList extends React.Component {
  constructor() { 
    super(); // A função `super()` é chamada para garantir que a lógica interna do React rode **antes** da sua. Se não for assim, o código não funcionará
    this.handleChange = this.handleChange.bind(this) // isso é para que a função handleChange consiga acessar o this da classe
    this.state = { 
      valueSearch: '',
    }
  }

   handleChange({target}) { 
    const { value } = target;
    const search = value.toUpperCase();
     this.setState({ 
      valueSearch: search,
    });
  }
	render() {
		const { pokemonsData } = this.props;
    const { valueSearch } = this.state;
		return ( 
      <main className="main">
        <h1 className="title"> Pokemons </h1>
        <input id="search" onChange={ this.handleChange } type="text" />
        <div className="listPokemons" >
			  	{ pokemonsData.filter((pokemon) => pokemon.name.toUpperCase()
          .includes(valueSearch))
          .map((pokemon) => <PokemonComponent className="cardsPokemons" 
           key={pokemon.id} pokemonsInfo={pokemon} />) }
		  	</div>
      </main>  
			);
	}
}

export default PokemonsList;