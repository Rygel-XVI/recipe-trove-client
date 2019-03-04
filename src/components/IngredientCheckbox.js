import React, { Component } from 'react'
import './check-box.css'


const IngredientCheckbox = ({ ingredient: { id, name, description }, toggleChecked, isChecked }) => (
  <label className="check-box">
    <input type="checkbox" value={id} name={name} key={id} onChange={toggleChecked} checked={isChecked}/>{name}
  </label>
)

export default IngredientCheckbox
