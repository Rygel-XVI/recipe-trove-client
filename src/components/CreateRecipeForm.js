import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchRecipes } from '../actions/recipes'


class CreateRecipeForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      recipe: {
        name: '',
        description: '',
        instructions: '',
        rating: -1,
        servings: ''
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
      <input text=
      <button className='create-recipe' type="submit">Create Recipe</button>
      </form>
      </div>
    )
  }

}

export default connect(null, null) (CreateRecipeForm);
