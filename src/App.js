import React, { Component } from 'react';
import './App.css';
import Cars from './Cars';
import MyContext from './context';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(car) {
    console.log(car); 
    this.setState((previousCar) => ({
      cars: {
        ...this.state.cars,
        [car]: !previousCar.cars[car],
      },
    }));
  }

  render() {
    return (
      <MyContext.Provider value={{...this.state, handleChange: this.handleChange}}>
        <Cars />
      </MyContext.Provider>
    );
    }
}

export default App;
