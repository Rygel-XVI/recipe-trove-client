import React, { Component } from 'react';
import { connect } from 'react-redux'

import CreateRecipeForm from './CreateRecipeForm'
import CreateIngredientForm from './CreateIngredientForm'

class CreateRecipeIngredientContainer extends Component {
  render() {
    return (
      <div className='create-container'>
      <CreateRecipeForm />
      <CreateIngredientForm />
      </div>
    )
  }
}

export default connect(null, {}) (CreateRecipeIngredientContainer);
