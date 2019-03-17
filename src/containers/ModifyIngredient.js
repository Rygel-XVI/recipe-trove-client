import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteingredient, updateingredient } from '../actions/ingredients'

import TextInput from '../components/TextInput'
import TextareaInput from '../components/TextareaInput'
import RecipeCard from './RecipeCard'

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
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)

    this.recipeCards.bind(this)
    this.deleteButton = this.deleteButton.bind(this)
  }

  deleteButton() {
    if (this.state.ingredient.recipes.length === 0) {
      return <button onClick={this.handleDelete}>Delete Ingredient</button>
    }
  }

  recipeCards() {
    return this.state.ingredient.recipes.map(recipe => {
      return <RecipeCard recipe={recipe} key={recipe.id} />
    })
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
    this.props.updateIngredient(this.state.ingredient)
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
      {this.recipeCards()}
      <form onSubmit={this.handleSubmit}>
      <TextInput label='name' value={this.state.ingredient.name} handleChange={this.handleChange} />
      <br />
      <TextareaInput label='description' value={this.state.ingredient.description} handleChange={this.handleChange} />
      <br />
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
