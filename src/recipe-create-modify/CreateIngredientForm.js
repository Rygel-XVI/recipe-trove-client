import React, { Component } from 'react';
import { connect } from 'react-redux'

class CreateIngredientForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ingredient: {
        name: '',
        description: ''
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    debugger;
  }

  render() {
    return (
      <div className='create-ingredient-div'>
      <form className='create-ingredient-form' onSubmit={this.handleSubmit}>
      <label>Name</label>
      <input type='text' className='input-field' />
      <label>Description</label>
      <textarea className='input-field' />
      </form>
      </div>
    )
  }
}

export default connect(null, {}) (CreateIngredientForm);
