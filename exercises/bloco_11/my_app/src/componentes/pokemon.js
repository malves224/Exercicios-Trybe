import React from 'react';
import PropTypes from 'prop-types';

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

PokemonComponent.propTypes = { 
	pokemonsInfo: PropTypes.object,
	pokemonsInfo: PropTypes.shape({ 
		name: PropTypes.string,
		type: PropTypes.string,
		averageWeight: PropTypes.object,
		averageWeight: PropTypes.shape({ 
			value: PropTypes.number,
		}).isRequired,
	}),
	className: PropTypes.string,
}

export default PokemonComponent;