import './App.css';
import React, {
  Component
} from 'react';

function imprimeText (message) { 
  console.log(message);
}

class App extends Component {
  render() {
    return (
      <div>
        <button onClick={ imprimeText }> Butaum </button>
        <button onClick={ imprimeText }> butaumzin </button>
        <button onClick={ imprimeText }> Butaumzão </button>
      </div>
    );
  }
}

export default App;