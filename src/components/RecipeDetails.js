import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getRecipe } from '../actions/recipes'
import ShowRecipe from './ShowRecipe'


class RecipeDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipe: this.props.recipe.location.state
    }
    this.recipeLoaded.bind(this)
  }

  recipeLoaded() {
    debugger;
    if (this.state.recipe != null) {
      return <ShowRecipe recipe={this.state.recipe} />
    } else {
      return 'Error, no recipe found.'
    }
  }

  render() {
    return (

      <div>
      {this.recipeLoaded()}
      </div>
    )
  }
}
export default RecipeDetails
