import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchIngredients } from '../actions/ingredients'
import { NavLink } from 'react-router-dom';


import IngredientCard from './IngredientCard'

class Ingredients extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ingredients: []
    }

    this.ingredientCards = this.ingredientCards.bind(this)
  }

  ingredientCards() {
    return this.props.ingredients.map(ingredient => {
      return <IngredientCard ingredient={ingredient} key={ingredient.id}/>
    })
  }

  componentDidMount() {
    // this.props.fetchIngredients()
  }

  render() {
    return (
      <div>
      Click to Modify/Delete Ingredient
      <ul>
      {this.ingredientCards()}
      </ul>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredientReducer.ingredients
  }
}

export default connect(mapStateToProps, { fetchIngredients }) (Ingredients);
