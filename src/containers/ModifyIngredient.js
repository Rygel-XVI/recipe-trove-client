import React, { Component } from 'react';
import { connect } from 'react-redux'

import TextInput from '../components/TextInput'
import TextareaInput from '../components/TextareaInput'
import { deleteingredient, updateingredient } from '../actions/ingredients'

class ModifyIngredient extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ingredient: {
        name: '',
        description: '',
        recipes: []
      }
    }
    // this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)

    this.deleteButton = this.deleteButton.bind(this)
  }

  deleteButton() {
    if (this.state.ingredient.recipes.length === 0) {
      return <button onClick={this.handleDelete}>Delete Ingredient</button>
    }
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
    // event.preventDefault();
    // this.props.updateIngredient(this.state.ingredient)
  }

  // dispatches to delete on submit
  handleDelete(event) {
    event.preventDefault();
    this.props.deleteingredient(this.state.ingredient.id)
  }

  componentDidMount(){
    this.setState ({
      ingredient: this.props.ingredient.location.state
    })
  }

  render() {
    return (
      <div>
      {this.deleteButton()}
      <form onSubmit={this.handleSubmit}>


      <button type='submit'>Update Ingredient</button>
      </form>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredientReducer.ingredients
  }
}

export default connect(mapStateToProps) (ModifyIngredient);

// <ingredientTextInput label='name' value={this.state.ingredient.name} handleChange={this.handleChange} />
// <br />
// <ingredientTextareaInput label='description' value={this.state.ingredient.description} handleChange={this.handleChange} />
// <br />
// <ingredientTextareaInput label='instructions' value={this.state.ingredient.instructions} handleChange={this.handleChange} />
// <br />
// {this.ingredientCheckbox()}
