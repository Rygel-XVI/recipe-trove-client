import React from 'react'

const IngredientDetails = ({ ingredient }) => (
  <div className="ingredient-details">
    <h1>{ingredient.name}</h1>
    <h3>{ingredient.description}</h3>
  </div>
)
export default IngredientDetails
