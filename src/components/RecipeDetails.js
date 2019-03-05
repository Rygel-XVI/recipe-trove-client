import React, { Component } from 'react'
import { connect } from 'react-redux'

const RecipeDetails = ({ recipe: {location: { state }} }) => (
  <div className="recipe-details">
    <h1>{state.name}</h1>
    <h3>{state.description}</h3>
    <p>{state.instructions}</p>
  </div>
)
export default RecipeDetails
