import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';


// should be a link that when you click on it it displays the recipe
const ShowRecipe = ({ recipe }) => (
  <div>
    <h1>{recipe.name}</h1>
    <h3>{recipe.description}</h3>
    <p>{recipe.instructions}</p>
  </div>
)

export default ShowRecipe
