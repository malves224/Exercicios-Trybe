import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
    return (
      <BrowserRouter>
      <Route exact path="/" component={ Home }/>
      <Route path="/about" component={ About } />
      <Route  path="/contact" component={ Contact } />
      </BrowserRouter>
    );
}

export default App;
