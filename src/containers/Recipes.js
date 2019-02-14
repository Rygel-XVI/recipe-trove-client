import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRecipes } from '../actions/recipes'
import RecipeCard from './RecipeCard'
import './Recipes.css'

class Recipes extends Component {

  constructor(props) {
    super(props)
    this.state = {
      recipes: []
    }
    this.recipeCards = this.recipeCards.bind(this)
  }

  recipeCards() {
    return this.props.recipes.map(recipe => {
      return <RecipeCard recipe={recipe} key={recipe.id} />
    })
  }

  componentDidMount() {
    this.props.fetchRecipes()
  }

  render() {
    return (
      <div className="recipes left-column" >
      <ul>
      {this.recipeCards()}
       </ul>
       </div>
    );
  }
}

const mapStateToProps = state => {
  return { recipes: state.recipeReducer.recipes }
}

export default connect(mapStateToProps, { fetchRecipes }) (Recipes);
