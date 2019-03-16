import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import './App.css'

import { connect } from 'react-redux'
import { fetchRecipes } from './actions/recipes'
import { fetchIngredients } from './actions/ingredients'


import Nav from './containers/Nav'
import SearchContainer from './containers/SearchContainer'
import RecipeDetails from './components/RecipeDetails'
import CreateContainer from './containers/CreateContainer'
import ModifyRecipe from './containers/ModifyRecipe'

class App extends Component {

  componentDidMount() {
    this.props.fetchIngredients()
    this.props.fetchRecipes()
  }

  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <Nav />
            <Switch>
            <Route exact path="/" component={SearchContainer} />
            <Route exact path="/search" component={SearchContainer} />
            <Route exact path="/recipes/create" component={CreateContainer} />
            <Route exact path="/recipes/update" component={ModifyRecipe} />
            <Route path="/recipes/modify/:id" render={(props) => <ModifyRecipe recipe={props} />} />
            <Route path="/recipes/:id/:name" render={(props) => <RecipeDetails recipe={props} />} />
            </Switch>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default connect(null, { fetchIngredients, fetchRecipes }) (App);
