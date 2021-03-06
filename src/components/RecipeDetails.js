import React from 'react'

const RecipeDetails = ({ recipe: {location: { state }} }) => (
  <div className="recipe-details">
    <h1>{state.name}</h1>
    <h3>{state.description}</h3>
    <p>{state.instructions}</p>
  </div>
)
export default RecipeDetails
