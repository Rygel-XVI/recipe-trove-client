import React from 'react'
import { NavLink } from 'react-router-dom';

const RecipeDetails = ({ recipe: {location: { state }} }) => (
  <div className="recipe-details">
    <h1>{state.name}</h1>
    <NavLink className='navlink' to={{ pathname: "/recipes/modify/" + state.id, recipe: state }}>Modify or Delete Recipe</NavLink>
    <h3>{state.description}</h3>
    <p>{state.instructions}</p>
  </div>
)
export default RecipeDetails
