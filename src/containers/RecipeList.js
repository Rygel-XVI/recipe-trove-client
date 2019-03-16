import React, { Component } from 'react'
import RecipeCard from './RecipeCard'

class RecipeList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      recipes: []
    }
    this.recipeCards.bind(this)
  }

  recipeCards() {
    return this.props.recipes.map(recipe => {
      return <RecipeCard recipe={recipe} key={recipe.id} />
    })
  }

  render() {
    return (
      <div className="recipes right-column" >
      {this.recipeCards()}
       </div>
    );
  }
}

export default RecipeList;
