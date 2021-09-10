import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
  }

  async fetchCharacters() {
    const fetch = await fetch('https://rickandmortyapi.com/api/character');
    const charactersData = await fetch.json();
    this.setState({ 
      characters: charactersData,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>
        Ricky and Morty Characters:
        </h1>
      </div>
    );
  }
}

export default App;
