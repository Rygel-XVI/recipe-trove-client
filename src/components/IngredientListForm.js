//form that submits ingredient search to fetch recipes
import React, { Component } from 'react';
import IngredientCheckbox from './IngredientCheckbox'


class IngredientListForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ingredients: []
    }
    this.ingredientCheckbox = this.ingredientCheckbox.bind(this)
  }

  ingredientCheckbox() {
    return this.props.ingredients.map(ingredient => {
      return <IngredientCheckbox ingredient={ingredient} key={ingredient.id} />
    })
  }

  render() {
    return (
      <div className="right-column">
      <form onSubmit={event => this.handleSubmit(event)}>
      {this.ingredientCheckbox()}
      </form>
      </div>
    );
  }
}

export default IngredientListForm
