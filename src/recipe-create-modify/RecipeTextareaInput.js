import React, { Component } from 'react'
import './create-recipe.css'


const RecipeTextareaInput = ({ label, value, handleChange }) => (
  <div className="recipe-textarea-input">
  <label className="textarea-input-label">{label}</label>
  <textarea className='input-field' name={label} value={value} onChange={handleChange} />
  </div>
)
export default RecipeTextareaInput
