import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchIngredients } from '../actions/ingredients'
import IngredientListForm from '../components/IngredientListForm'

//display a list of checkboxes and submit a form to display the recipes associated
class IngredientListContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ingredients: []
    }
  }

  componentDidMount() {
    // debugger;
    this.props.fetchIngredients()
  }

  updateRecipes() {
    // this.props.updateRecipes()
  }

  render() {
    return (
      <div className="ingredient-list-container">
      <IngredientListForm ingredients={this.props.ingredients} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ingredients: state.ingredientReducer.ingredients,
           checkedIngredients: state.ingredientReducer.checkedIngredints
         }
}

export default connect(mapStateToProps, { fetchIngredients }) (IngredientListContainer);
