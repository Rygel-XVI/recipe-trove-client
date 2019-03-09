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
      <label>Recipe Name</label>
      <input type='text' />
      <br />
      <label>Description</label>
      <textarea />
      <br />
      <label>Instructions</label>
      <textarea />
      <br />
      <label>Rating</label>
      <input type="number" />
      <br />
      <label>Servings</label>
      <input type='text' />
      <br />
      <button className='create-recipe' type="submit">Create Recipe</button>
      </form>
      </div>
    )
  }

}

export default connect(null, null) (CreateRecipeForm);
