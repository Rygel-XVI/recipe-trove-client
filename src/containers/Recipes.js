import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRecipes } from '../actions/recipes'
import RecipeCard from './RecipeCard'

class Recipes extends Component {

  constructor(props) {
    super(props)

    this.state = {
      recipes: []
    }
    this.recipeCards = this.recipeCards.bind(this)
  }

  componentDidMount() {
    this.props.fetchRecipes()
  }

  recipeCards() {
    return this.props.recipes.map(recipe => {
      return <RecipeCard recipe={recipe} key={recipe.id} />
    })
  }

  render() {

    return (
      <div className="Recipes">
      {this.recipeCards()}
       </div>
    );
  }

}

const mapStateToProps = state => {
  return { recipes: state.recipeReducer.recipes }
}

export default connect(mapStateToProps, { fetchRecipes }) (Recipes);
