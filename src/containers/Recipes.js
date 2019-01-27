import React, { Component } from 'react';
import RecipeCard from './RecipeCard'

class Recipes extends Component {

  componentDidMount() {
    fetchRecipes();
  }
  
  render() {
    return (
      <div className="Recipes">
        <p>Recipe containers</p>
      </div>
    );
  }
}

export default Recipes;
