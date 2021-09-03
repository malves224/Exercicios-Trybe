import './App.css';
import React, {
  Component
} from 'react';
import './style.css';

class App extends Component {
  constructor() { 
    super();
    this.handleChage = this.handleChage.bind(this);

    this.state = { 
      saudacao: '',
    }
  } 

  handleChage(event) { 
    this.setState({ 
      saudacao: event.target.value,
    })
  }
  render() {
    return (
      <form className="form"> 
        <label> 
        escolha uma saudação:

            <select 
            onChange={this.handleChage}
            value={ this.state.saudacao }
            >  
              <option> OLá</option>
              <option> oi </option>
              <option> érr </option>
            </select>
        </label>
        <label> 
          marque essa opção
          <input type="checkbox" />
        </label>
        <label> 
          escreva algo
          <input type="textarea" /> 
        </label>
      </form>
    );
  }
}

export default App;