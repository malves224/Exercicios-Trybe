import React from 'react';
import PokemonComponent from './pokemon';
import '../style.css';

class PokemonsList extends React.Component {
  constructor() { 
    super(); // A função `super()` é chamada para garantir que a lógica interna do React rode **antes** da sua. Se não for assim, o código não funcionará
    this.handleChange = this.handleChange.bind(this) // isso é para que a função teste começe a acessar o this
    this.state = { 
      valueSearch: '',
    }
    console.log(this);
  }

   handleChange(event) { 
    const search = document.querySelector('input').value; 
     this.setState({ 
      valueSearch: search ,
    });
  }
	render() {
		const { pokemonsData } = this.props;
    const { valueSearch } = this.state;
    const valueSearchUperCase = valueSearch.toUpperCase();
		return( 
      <main className="main">
        <h1 className="title"> Pokemons </h1>
        <input onChange={ this.handleChange } type="text" />
        <div className="listPokemons" >
			  	{ pokemonsData.filter((pokemon) => pokemon.name.toUpperCase()
          .includes(valueSearchUperCase))
          .map((pokemon) => <PokemonComponent className="cardsPokemons" 
           key={pokemon.id} pokemonsInfo={pokemon} />) }
		  	</div>
      </main>  
			);
	}
}

export default PokemonsList;