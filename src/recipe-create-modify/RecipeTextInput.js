import React, { Component } from 'react'

const RecipeTextInput = ({ label }) => (
  <div className="recipe-text-input">
  <label className="text-input-label">{label}</label>
  <input type='text' />
  </div>
)
export default RecipeTextInput
