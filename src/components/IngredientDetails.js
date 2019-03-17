import React from 'react'

const IngredientDetails = ({ ingredient }) => {
  if (ingredient.recipes.length > 0) {
    return (
      <div>
      <h4>{ingredient.description}</h4>
      <ul>
        Recipes:
        {ingredient.recipes.map(recipe => <li>{recipe.name}</li>)}
        </ul>
        </div>
      )
    } else {
      return (
        <h4>{ingredient.description}</h4>
      )
    }
  }

export default IngredientDetails
