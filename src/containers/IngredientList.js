//form that submits ingredient search to fetch recipes
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchRecipes } from '../actions/recipes'
import IngredientCheckbox from '../components/IngredientCheckbox'

class IngredientListForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      checkedIngredients: []
    }
    this.ingredientCheckbox = this.ingredientCheckbox.bind(this)
    this.toggleChecked = this.toggleChecked.bind(this)
    this.isChecked = this.isChecked.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


//try connecting to redux and updating checkedIngredients through there

  isChecked(ingredientId) {
    try{
      return this.state.checkedIngredients.includes(ingredientId)
    } catch(err) {
      console.log(err)
    }
  }

  ingredientCheckbox() {
    return this.props.ingredients.map(ingredient => {
      return <IngredientCheckbox ingredient={ingredient} key={ingredient.id} toggleChecked={this.toggleChecked} isChecked={this.isChecked(ingredient.id)} classname="filter-ingredients" />
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.fetchRecipes(this.state.checkedIngredients)
  }

  toggleChecked(event) {
    if (event.target.checked) {
      this.setState({ checkedIngredients: [...this.state.checkedIngredients, parseInt(event.target.value)] })
    } else {
      let newCheckedObject = this.state.checkedIngredients.filter(i => i != event.target.value)
      this.setState({ checkedIngredients: newCheckedObject})
    }
  }

  render() {
    return (
      <div className="ingredient-list-div">
      <form className="ingredient-list-form" onSubmit={this.handleSubmit}>
        <div className="ingredient-checkboxes" >{this.ingredientCheckbox()}</div>
        <button className='ingredient-submit' type="submit">Modify Ingredients</button>
      </form>
      </div>
    );
  }
}


// export default IngredientListForm
export default connect(null, { fetchRecipes }) (IngredientListForm);
