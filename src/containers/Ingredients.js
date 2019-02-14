import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchIngredients } from '../actions/ingredients'
import IngredientCard from './IngredientCard'
import './Ingredients.css'

class Ingredients extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ingredients: []
    }
    this.ingredientCards = this.ingredientCards.bind(this)
  }

  componentDidMount() {
    this.props.fetchIngredients()
  }

  ingredientCards() {
    return this.props.ingredients.map(ingredient => {
      return <IngredientCard ingredient={ingredient} key={ingredient.id} />
    })
  }

  render() {
    return (
      <div className="right-column">
        <ul>
        {this.ingredientCards()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ingredients: state.ingredientReducer.ingredients }
}

export default connect(mapStateToProps, { fetchIngredients }) (Ingredients);
