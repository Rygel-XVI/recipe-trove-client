import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import './App.css'

import { connect } from 'react-redux'
import { fetchRecipes } from './actions/recipes'
import { fetchIngredients } from './actions/ingredients'


import Nav from './containers/Nav'
import SearchDisplayContainer from './containers/SearchDisplayContainer'
import RecipeDetails from './components/RecipeDetails'
import CreateRecipeIngredientContainer from './recipe-create-modify/CreateRecipeIngredientContainer'
import ModifyRecipeForm from './recipe-create-modify/ModifyRecipeForm'

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
            <Route exact path="/" component={SearchDisplayContainer} />
            <Route exact path="/search" component={SearchDisplayContainer} />
            <Route exact path="/recipes/create" component={CreateRecipeIngredientContainer} />
            <Route exact path="/recipes/update" component={ModifyRecipeForm} />
            <Route path="/recipes/modify/:id" render={(props) => <ModifyRecipeForm recipe={props} />} />
            <Route path="/recipes/:id/:name" render={(props) => <RecipeDetails recipe={props} />} />
            </Switch>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

// export default App;
export default connect(null, { fetchIngredients, fetchRecipes }) (App);
