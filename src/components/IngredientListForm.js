//form that submits ingredient search to fetch recipes
import React, { Component } from 'react';
import IngredientCheckbox from './IngredientCheckbox'
import './ingredient-list-form.css'


class IngredientListForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      checked: [1]
    }
    this.ingredientCheckbox = this.ingredientCheckbox.bind(this)
    this.toggleChecked = this.toggleChecked.bind(this)
    this.isChecked = this.isChecked.bind(this)
  }

  isChecked(ingredientId) {
    return this.state.checked.includes(ingredientId.id)
  }

  ingredientCheckbox() {
    return this.props.ingredients.map(ingredient => {
      return <IngredientCheckbox ingredient={ingredient} key={ingredient.id} toggleChecked={this.toggleChecked} isChecked={this.isChecked} />
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    // debugger;
    //dispatches fetch request for recipes
  }

  toggleChecked(event) {
    // debugger;
    //changes local state to include/remove ingredient id
    // event.target.value //id
    if (!this.state.checked.includes(event.target.value)) {
      this.setState({ ...this.state, checked: this.state.checked.push(event.target.value)})
    } else {
      this.setState({ ...this.state, checked: this.state.checked.filter(i => i != event.target.value)})
    }
    // debugger;
  }

  render() {
    return (
      <div className="ingredient-list-form">
      <form onSubmit={this.handleSubmit}>
        {this.ingredientCheckbox()}
        <button className='ingredient-submit' type="submit">Change Ingredients</button>
      </form>
      </div>
    );
  }
}

export default IngredientListForm
