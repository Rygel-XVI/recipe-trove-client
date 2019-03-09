import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchRecipes } from '../actions/recipes'
import { fetchIngredients } from '../actions/ingredients'


import RecipeTextInput from './RecipeTextInput'
import RecipeTextareaInput from './RecipeTextareaInput'
import './create-recipe.css'


class CreateRecipeForm extends Component {
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
  }

  handleChange(e) {
    this.setState({
      recipe: {
        ...this.state.recipe,
        [e.target.name]: e.target.value
      }
    })
  }

  // dispatch to create new recipe
  handleSubmit() {

  }

  ingredientCheckbox() {
  //   return this.props.ingredients.map(ingredient => {
  //     return <IngredientCheckbox ingredient={ingredient} key={ingredient.id} toggleChecked={this.toggleChecked} isChecked={this.isChecked(ingredient.id)} />
  //   })
  }

// fetches ingredients from api if they haven't been fetched
  componentDidMount() {
    if (this.props.ingredients.length < 1) {
      this.props.fetchIngredients()
    }
  }

  render() {
    return (
      <div className="create-recipe-form">
      <form onSubmit={this.handleSubmit}>
      <RecipeTextInput label='name' value={this.state.recipe.name} handleChange={this.handleChange} />
      <br />
      <RecipeTextareaInput label='description' value={this.state.recipe.description} handleChange={this.handleChange} />
      <br />
      <RecipeTextareaInput label='instructions' value={this.state.recipe.instructions} handleChange={this.handleChange} />
      <br />
      <button className='create-recipe' type="submit">Create Recipe</button>
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

export default connect(mapStateToProps, {fetchIngredients}) (CreateRecipeForm);
