import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchIngredients } from '../actions/ingredients'
import IngredientListForm from '../components/IngredientListForm'
import RecipeList from '../components/RecipeList'

//display a list of checkboxes and submit a form to display the recipes associated
class IngredientListContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ingredients: []
    }
  }

  componentDidMount() {
    this.props.fetchIngredients()
  }
  //
  // ingredientCards() {
  //   return this.props.ingredients.map(ingredient => {
  //     return <IngredientCard ingredient={ingredient} key={ingredient.id} />
  //   })
  // }

  render() {
    return (
      <div className="ingredient-list-container">
      <IngredientListForm ingredients={this.props.ingredients} /> //have checkboxes to submit form to fetch recipes
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ingredients: state.ingredientReducer.ingredients }
}

export default connect(mapStateToProps, { fetchIngredients }) (IngredientListContainer);
