import React, { Component } from 'react'

const RecipeTextareaInput = ({ label, value, handleChange }) => (
  <div className="input textarea">
  <label className="textarea-input-label">{label}</label>
  <textarea className='input-field' name={label} value={value} onChange={handleChange} />
  </div>
)
export default RecipeTextareaInput
