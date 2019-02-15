import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import Nav from './containers/Nav'
import Ingredients from './containers/Ingredients'
import Recipes from './containers/Recipes'


class App extends Component {
  render() {
    return (
      <div style={appStyle} className="App">
        <Router>
          <React.Fragment>
            <Nav />
            <Route exact path="/recipes" component={Recipes} />
            <Route exact path="/ingredients" component={Ingredients} />
          </React.Fragment>
        </Router>
        <IngredientListContainer />
      </div>
    );
  }
}

const appStyle = {
  padding: '35px'
}

export default App;
