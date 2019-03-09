import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import Nav from './containers/Nav'
import SearchDisplayContainer from './containers/SearchDisplayContainer'
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
            <Route exact path="/" component={SearchDisplayContainer} />
            <Route exact path="/search" component={SearchDisplayContainer} />
            <Route path="/recipes/:id/:name" render={(props) => <RecipeDetails recipe={props} />} />
            <Route exact path="/recipes/create" component={CreateRecipeForm} />
            <Route exact path="/recipes/update" component={ModifyRecipeForm} />
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
