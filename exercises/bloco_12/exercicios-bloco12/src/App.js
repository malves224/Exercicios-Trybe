import './App.css';
import React, {
  Component
} from 'react';
import './style.css';

class App extends Component {
  constructor() { 
    super();
    this.state = {
      nome: '',
    }
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange({target}) { 
    const valueUpercase = target.value.toUpperCase();
    this.setState({
      nome: valueUpercase,
    })
  }

  render() {
    return (
      <form> 
      <fieldset> 
        <input value={ this.state.nome } name="nome" required maxLength="40" onChange={ this.handleChange }/>
      </fieldset>
      </form>
    );
  }
}

export default App;