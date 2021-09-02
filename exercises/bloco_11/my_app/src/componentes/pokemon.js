import React from 'react'

class PokemonComponent extends React.Component {
	render() {
	const { pokemonsInfo } = this.props;
			return (
			<section>
				<div>
					<p>{pokemonsInfo.name}</p>
					<p>{pokemonsInfo.type}</p>
					<p>Average Weight: {pokemonsInfo.averageWeight.value}kg</p>
				</div>
				<img src={pokemonsInfo.image} alt="descrição da imagem " /> 
			</section>)
	}
}

export default PokemonComponent;