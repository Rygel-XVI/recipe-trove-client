import React, { Component } from 'react'
import './check-box.css'


//add checked? field that is passed in to determine if it needs to be added to the ingredients state

const IngredientCheckbox = ({ ingredient: { id, name, description }, toggleChecked, isChecked }) => (
  <label className="check-box">
    <input type="checkbox" value={id} name={name} key={id} onChange={toggleChecked} checked={isChecked({id})}/>{name}
  </label>
)

export default IngredientCheckbox
