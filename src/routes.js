import React from 'react'
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom'
import IngredientListContainer from './containers/IngredientListContainer'

// import RecipeCard from './components/RecipeCard'

//should have routes for show navlink on  RecipecCard, Create, Modify, Delete
//other api calls will not look like a new screen

export default (
  <BrowserRouter>
    <Switch id='routes'>
      <Route exact path="/" component={<IngredientListContainer />} />
      <Route path='/search' component={<IngredientListContainer />}/>
//       <Route path='/addrecipe' component={<CreateRecipe />}/>
//       <Route path='/addingredient' component={<CreateIngredient />}/>
//       <Route path='/delete' component={<Delete />}/>
    </Switch>
  </BrowserRouter>
)
//
//
// let url = 'localhost'=='localhost'? '/foo':''; // <=== added slash
// <Router>
//  <NavLink to={url+'/'}>Home</NavLink>
// </Router>
