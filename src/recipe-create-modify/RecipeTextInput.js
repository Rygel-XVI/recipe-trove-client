import React, { Component } from 'react'
import './create-recipe.css'


const RecipeTextInput = ({ label, value, handleChange }) => (
  <div className="recipe-text-input">
  <label className="text-input-label">{label}</label>
  <input className='input-field' type='text' name={label} value={value} onChange={handleChange}/>
  </div>
)
export default RecipeTextInput
