import React from 'react'

const IngredientDetails = ({ ingredient }) => (
  <div className="ingredient-details">
    <h4>{ingredient.description}</h4>
    <ul>
    Recipes:
    {ingredient.recipes.map(recipe => <li>{recipe.name}</li>)}
    </ul>
  </div>
)
export default IngredientDetails
