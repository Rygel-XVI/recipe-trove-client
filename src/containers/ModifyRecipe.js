import React, { Component } from 'react';
import { connect } from 'react-redux'

import IngredientCheckbox from '../components/IngredientCheckbox'
import RecipeTextInput from '../components/RecipeTextInput'
import RecipeTextareaInput from '../components/RecipeTextareaInput'
import { deleteRecipe, updateRecipe } from '../actions/recipes'

class ModifyRecipe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipe: {
        name: '',
        description: '',
        instructions: '',
        ingredients: []
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.ingredientCheckbox = this.ingredientCheckbox.bind(this)
    this.toggleChecked = this.toggleChecked.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleChange(event) {
    this.setState({
      recipe: {
        ...this.state.recipe,
        [event.target.name]: event.target.value
      }
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.updateRecipe(this.state.recipe)
  }

  ingredientCheckbox() {
    return this.props.ingredients.map(ingredient => {
      return <IngredientCheckbox ingredient={ingredient} key={ingredient.id} toggleChecked={this.toggleChecked} />
    })
  }

  toggleChecked(event) {
    if (event.target.checked) {
      this.setState({
        recipe: {
          ...this.state.recipe, ingredients: [...this.state.recipe.ingredients, event.target.value]
        }
      })
    } else {
      let newCheckedObject = this.state.recipe.ingredients.filter(i => i != event.target.value)
      this.setState({
        recipe: {
          ...this.state.recipe, ingredients: newCheckedObject
        }
      })
    }
  }

  // dispatches to delete on submit
  handleDelete(event) {
    event.preventDefault();
    this.props.deleteRecipe(this.state.recipe.id)
  }

  componentDidMount(){
    this.setState ({
      recipe: this.props.recipe.location.recipe
    })
  }

  render() {
    return (
      <div>
      <button onClick={this.handleDelete}>Delete Recipe</button>
      <form onSubmit={this.handleSubmit}>
      <RecipeTextInput label='name' value={this.state.recipe.name} handleChange={this.handleChange} />
      <br />
      <RecipeTextareaInput label='description' value={this.state.recipe.description} handleChange={this.handleChange} />
      <br />
      <RecipeTextareaInput label='instructions' value={this.state.recipe.instructions} handleChange={this.handleChange} />
      <br />
      {this.ingredientCheckbox()}
      <button type='submit'>Update Recipe</button>
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

export default connect(mapStateToProps, {deleteRecipe, updateRecipe}) (ModifyRecipe);
