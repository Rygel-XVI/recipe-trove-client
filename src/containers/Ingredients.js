import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchIngredients } from '../actions/ingredients'

import IngredientCard from './IngredientCard'

class Ingredients extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ingredients: []
    }

    this.renderIngredients = this.renderIngredients.bind(this)
  }

  renderIngredients() {
    return this.props.ingredients.map(ingredient => {
      return <IngredientCard ingredient={ingredient} key={ingredient.id}/>
    })
  }

  componentDidMount() {
    this.props.fetchIngredients()
  }

  render() {
    return (
      <div>
      {this.renderIngredients()}
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
