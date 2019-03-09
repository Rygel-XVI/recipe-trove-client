import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchRecipes } from '../actions/recipes'

import RecipeTextInput from './RecipeTextInput'
import RecipeTextareaInput from './RecipeTextareaInput'


class CreateRecipeForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      recipe: {
        name: '',
        description: '',
        instructions: '',
      }
    }

    this.handleSubmit.bind(this)
  }

  // dispatch to create new recipe
  handleSubmit() {

  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <label>Recipe Name</label>
      <RecipeTextInput name='recipe-name' />
      <br />
      <label>Description</label>
      <RecipeTextareaInput name='recipe-description' />
      <br />
      <label>Instructions</label>
      <RecipeTextareaInput name='recipe-instructions' />
      <br />
      <button className='create-recipe' type="submit">Create Recipe</button>
      </form>
      </div>
    )
  }

}

export default connect(null, null) (CreateRecipeForm);
