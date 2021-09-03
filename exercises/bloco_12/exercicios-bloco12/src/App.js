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
      estado: '',
      deficiencia: false,
      descricao: '',
    }
  } 

  handleChage({ target }) { 
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ 
      [name]: value,
    })
  }
  render() {
    return (
      <form className="form"> 
        <label> 
        qual seu estado:
            <select 
            name="estado"
            onChange={this.handleChage}
            value={ this.state.estado }
            >  
              <option> </option>
              <option> SP </option>
              <option> RJ </option>
              <option> BH </option>
              <option> CE </option>
            </select>
        </label>
        <label> 
          marque essa opção, caso tenha alguma deficiencia fisica: 
          <input name="deficiencia" type="checkbox" 
          onChange={ this.handleChage }
          value={ this.state.deficiencia }/>
        </label>
        <label> 
          descricao 
          <input value={ this.state.descricao } name="descricao" onChange={ this.handleChage } type="textarea" /> 
        </label>
      </form>
    );
  }
}

export default App;