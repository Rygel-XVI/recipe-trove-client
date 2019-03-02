import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getRecipe } from '../actions/recipes'


class RecipeDetails extends Component {
  constructor(props) {
    super()
    this.state = {
      recipe: 'nil'
    }
  }

  componentDidMount() {
    debugger;
    //fetch recipe by name
    this.props.getRecipe(this.props.recipe.match.params.name)
  }


render() {
  return (

      <div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return { recipes: state.recipeReducer.recipes }
}

export default connect(null, { getRecipe }) (RecipeDetails);

// this.props.recipe.match.params
