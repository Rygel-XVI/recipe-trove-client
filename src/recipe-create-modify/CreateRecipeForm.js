import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchRecipes } from '../actions/recipes'

import RecipeTextInput from './RecipeTextInput'
import RecipeTextareaInput from './RecipeTextareaInput'
import './create-recipe.css'


class CreateRecipeForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      recipe: {
        name: '',
        description: '',
        instructions: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      recipe: {
        ...this.state.recipe,
        [e.target.name]: e.target.value
      }
    })
  }

  // dispatch to create new recipe
  handleSubmit() {

  }

  render() {
    return (
      <div className="create-recipe-form">
      <form onSubmit={this.handleSubmit}>
      <RecipeTextInput label='name' value={this.state.recipe.name} handleChange={this.handleChange} />
      <br />
      <RecipeTextareaInput label='description' value={this.state.recipe.description} handleChange={this.handleChange} />
      <br />
      <RecipeTextareaInput label='instructions' value={this.state.recipe.instructions} handleChange={this.handleChange} />
      <br />
      <button className='create-recipe' type="submit">Create Recipe</button>
      </form>
      </div>
    )
  }

}

export default connect(null, null) (CreateRecipeForm);
