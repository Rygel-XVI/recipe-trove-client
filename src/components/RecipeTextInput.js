import React, { Component } from 'react'

const RecipeTextInput = ({ label, value, handleChange }) => (
  <div className="input text">
  <label className="text-input-label">{label}</label>
  <input className='input-field' type='text' name={label} value={value} onChange={handleChange}/>
  </div>
)
export default RecipeTextInput
