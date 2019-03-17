import React, { Component } from 'react'
import { connect } from 'react-redux'

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


  componentDidMount(){
    this.setState ({
      recipes: this.props.recipes
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

const mapStateToProps = state => {
  return {
           recipes: state.recipeReducer.recipes
         }
}

export default connect(mapStateToProps)(RecipeList);
