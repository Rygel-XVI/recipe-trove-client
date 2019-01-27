import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import Ingredients from './containers/Ingredients'
import Recipes from './containers/Recipes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />

        <Recipes />
        <Ingredients />
      </div>
    );
  }
}

export default App;
