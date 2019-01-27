import React, { Component } from 'react';

class Recipes extends Component {

  componentDidMount() {
    fetchRecipe
  }

  render() {
    return (
      <div className="RecipeCard">
        <p>Recipe Card</p>
      </div>
    );
  }
}

export default RecipeCard;
