import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createIngredient } from '../actions/ingredients'

import TextInput from '../components/TextInput'
import TextareaInput from '../components/TextareaInput'

class CreateIngredient extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ingredient: {
        name: '',
        description: ''
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      ingredient: {
        ...this.state.ingredient,
        [event.target.name]: event.target.value
      }
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createIngredient(this.state.ingredient)
  }

  render() {
    return (
      <div className='create-ingredient-div'>
      <form className='create-ingredient-form' onSubmit={this.handleSubmit}>
      <TextInput label='name' value={this.state.ingredient.name} handleChange={this.handleChange} />
      <TextareaInput label='description' value={this.state.ingredient.description} handleChange={this.handleChange} />
      <button className='btn-create-ingredient' type="submit">Create Ingredient</button>
      </form>
      </div>
    )
  }
}

export default connect(null, {createIngredient}) (CreateIngredient);
