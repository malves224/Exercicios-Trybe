import React from 'react';

class PokemonComponent extends React.Component {
	render() {
		const { pokemonsInfo } = this.props;
		const { className } = this.props;
		return (
				<div className={className}>
					<p>{pokemonsInfo.name}</p>
					<p>{pokemonsInfo.type}</p>
					<p>Average Weight: {pokemonsInfo.averageWeight.value}kg</p>
					<img src={pokemonsInfo.image} alt="descrição da imagem " />
				</div>
		);
	}
}

export default PokemonComponent;