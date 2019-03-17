import React, { Component } from 'react';
import { connect } from 'react-redux'

import ingredientTextInput from '../components/ingredientTextInput'
import ingredientTextareaInput from '../components/ingredientTextareaInput'
import { deleteingredient, updateingredient } from '../actions/ingredients'

class ModifyIngredient extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ingredient: {
        name: '',
        description: '',
        ingredients: []
      }
    }
    // this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
    // this.ingredientCheckbox = this.ingredientCheckbox.bind(this)
    // this.toggleChecked = this.toggleChecked.bind(this)
    // this.handleDelete = this.handleDelete.bind(this)
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

  toggleChecked(event) {
    if (event.target.checked) {
      this.setState({
        ingredient: {
          ...this.state.ingredient, ingredients: [...this.state.ingredient.ingredients, event.target.value]
        }
      })
    } else {
      let newCheckedObject = this.state.ingredient.ingredients.filter(i => i != event.target.value)
      this.setState({
        ingredient: {
          ...this.state.ingredient, ingredients: newCheckedObject
        }
      })
    }
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
      <button onClick={this.handleDelete}>Delete Ingredient</button>
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
