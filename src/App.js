import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

import { connect } from 'react-redux'
import { fetchRecipes } from './actions/recipes'
import { fetchIngredients } from './actions/ingredients'


import Nav from './containers/Nav'
import SearchContainer from './containers/SearchContainer'
import RecipeDetails from './components/RecipeDetails'
import CreateContainer from './containers/CreateContainer'
import ModifyRecipe from './containers/ModifyRecipe'
import ModifyIngredient from './containers/ModifyIngredient'
import Ingredients from './containers/Ingredients'
import RecipeList from './containers/RecipeList'

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
            <Route exact path="/recipes" component={RecipeList} />
            <Route exact path="/ingredients" component={Ingredients} />
            <Route exact path="/create" component={CreateContainer} />
            <Route path="/recipes/:id/modify" render={(props) => <ModifyRecipe recipe={props} />} />
            <Route path="/recipes/:id/:name" render={(props) => <RecipeDetails recipe={props} />} />
            <Route path="/ingredients/:id/modify" render={(props) => <ModifyIngredient ingredient={props} />} />
            </Switch>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default connect(null, { fetchIngredients, fetchRecipes }) (App);
