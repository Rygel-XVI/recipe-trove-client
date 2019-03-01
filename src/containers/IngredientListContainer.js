import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchIngredients } from '../actions/ingredients'
import { fetchRecipes } from '../actions/recipes'
import IngredientListForm from '../components/IngredientListForm'
import Recipes from '../components/Recipes'

//display a list of checkboxes and submit a form to display the recipes associated
class IngredientListContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ingredients: [],
      recipes: []
    }
  }

  componentDidMount() {
    // debugger;
    this.props.fetchIngredients()
    this.props.fetchRecipes()
  }

  render() {
    return (
      <div className="ingredient-list-container">
      <IngredientListForm ingredients={this.props.ingredients} />
      <Recipes recipes={this.props.recipes} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ingredients: state.ingredientReducer.ingredients,
           recipes: state.recipeReducer.recipes
         }
}

export default connect(mapStateToProps, { fetchIngredients, fetchRecipes }) (IngredientListContainer);
