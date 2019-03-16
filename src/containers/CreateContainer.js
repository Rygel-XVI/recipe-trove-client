import React, { Component } from 'react';
import { connect } from 'react-redux'

import CreateRecipe from './CreateRecipe'
import CreateIngredient from './CreateIngredient'

class CreateContainer extends Component {
  render() {
    return (
      <div className='create-container'>
      <CreateRecipe />
      <CreateIngredient />
      </div>
    )
  }
}

export default connect(null, {}) (CreateContainer);
