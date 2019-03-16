import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createIngredient } from '../actions/ingredients'

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
    this.onChange = this.handleChange.bind(this)
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
      <label>Name</label>
      <input type='text' name='name' className='input-field' onChange={this.onChange} />
      <br />
      <label>Description</label>
      <textarea name='description' className='input-field' onChange={this.onChange}/>
      <br />
      <button className='btn-create-ingredient' type="submit">Create Ingredient</button>
      </form>
      </div>
    )
  }
}

export default connect(null, {createIngredient}) (CreateIngredient);
