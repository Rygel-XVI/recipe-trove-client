import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createRecipe } from '../actions/recipes'

import IngredientCheckbox from '../components/IngredientCheckbox'
import TextInput from '../components/TextInput'
import TextareaInput from '../components/TextareaInput'


class CreateRecipe extends Component {
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
  }

  handleChange(event) {
    this.setState({
      recipe: {
        ...this.state.recipe,
        [event.target.name]: event.target.value
      }
    })
  }

  // dispatch to create new recipe
  handleSubmit(event) {
    event.preventDefault();
    this.props.createRecipe(this.state.recipe)
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

  render() {
    return (
      <div className='create-recipe-div'>
      <form className="create-recipe-form" onSubmit={this.handleSubmit}>
      <TextInput label='name' value={this.state.recipe.name} handleChange={this.handleChange} />
      <br />
      <TextareaInput label='description' value={this.state.recipe.description} handleChange={this.handleChange} />
      <br />
      <TextareaInput label='instructions' value={this.state.recipe.instructions} handleChange={this.handleChange} />
      <br />
      {this.ingredientCheckbox()}
      <button className='btn-create-recipe' type="submit">Create Recipe</button>
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

export default connect(mapStateToProps, {createRecipe}) (CreateRecipe);
