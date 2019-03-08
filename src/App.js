import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import Nav from './containers/Nav'
import IngredientListContainer from './containers/IngredientListContainer'
import RecipeDetails from './components/RecipeDetails'
import CreateRecipeForm from './components/CreateRecipeForm'
import ModifyRecipeForm from './components/ModifyRecipeForm'

class App extends Component {
  render() {
    return (
      <div style={appStyle} className="App">
        <Router>
          <React.Fragment>
            <Nav />
            <Route exact path="/" component={IngredientListContainer} />
            <Route exact path="/search" component={IngredientListContainer} />
            <Route path="/recipes/:id/:name" render={(props) => <RecipeDetails recipe={props} />} />
            <Route path="/recipes/create" render={CreateRecipeForm} />
            <Route path="/recipes/update" render={ModifyRecipeForm} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

const appStyle = {
  padding: '35px'
}

export default App;
