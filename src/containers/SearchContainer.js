import React, { Component } from 'react';
import { connect } from 'react-redux'
import IngredientList from './IngredientList'
import RecipeList from './RecipeList'

//display a list of checkboxes and submit a form to display the recipes associated
class SearchContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ingredients: [],
      recipes: []
    }
  }

  render() {
    return (
      <div className="container">
      <IngredientList ingredients={this.props.ingredients} />
      <RecipeList recipes={this.props.recipes} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ingredients: state.ingredientReducer.ingredients,
           recipes: state.recipeReducer.recipes
         }
}

export default connect(mapStateToProps) (SearchContainer);
