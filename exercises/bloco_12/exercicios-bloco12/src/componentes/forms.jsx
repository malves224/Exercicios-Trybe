import React, { Component } from "react";

class Forms extends Component {
  constructor() {
    super();
    this.state = {
      nome: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const {name} = target;
    const value = target.type === 'checkbox' ? 
    target.checked : target.value;
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { nome } = this.state;
    return (
      <form>
        <fieldset>
          <label htmlFor="nome">
            digite seu nome: 
          <input id="nome" value={ nome.toUpperCase() } name="nome" required maxLength="40" onChange={this.handleChange} />
          </label>
          <label htmlFor="email">
            <input id="email" type="text" />
          </label>
        </fieldset>
      </form>
    )
  }
}

export default Forms;