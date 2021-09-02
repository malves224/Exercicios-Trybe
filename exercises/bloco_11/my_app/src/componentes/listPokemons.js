import React from 'react';
import PokemonComponent from './pokemon';

class PokemonsList extends React.Component {
	render() {
		const { pokemonsData } = this.props;

		return( 
			pokemonsData.map((pokemon) => <PokemonComponent key={pokemon.id} pokemonsInfo={pokemon} />)
			);
	}
}

export default PokemonsList;