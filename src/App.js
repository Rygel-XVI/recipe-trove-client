import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import Nav from './containers/Nav'
import IngredientListContainer from './containers/IngredientListContainer'
import Recipes from './containers/Recipes'


class App extends Component {
  render() {
    return (
      <div style={appStyle} className="App">
        <Router>
          <React.Fragment>
            <Nav />
            <Route exact path="/search" component={IngredientListContainer} />
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
