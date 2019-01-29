import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRecipes } from '../actions/recipes'
import RecipeCard from './RecipeCard'

class Recipes extends Component {

  constructor(props) {
    super(props)

    this.state = {
      recipes: []
    }
  }

  componentDidMount() {
    this.props.fetchRecipes()
  }

  render() {

    return (
      <div className="Recipes">
      <ul>render recipe cards here</ul>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return { recipes: state.recipes }
}

export default connect(mapStateToProps, { fetchRecipes }) (Recipes);
