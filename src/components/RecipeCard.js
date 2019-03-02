import React, { Component } from 'react'

// should be a link that when you click on it it displays the recipe
const RecipeCard = ({ recipe }) => (
  <div>
  {recipe.name}
  </div>
)

export default RecipeCard
