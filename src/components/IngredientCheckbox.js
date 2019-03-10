import React, { Component } from 'react'

const IngredientCheckbox = ({ ingredient: { id, name, description }, toggleChecked, isChecked, classname }) => (
  <label className={classname}>
    <input type="checkbox"className={classname} value={id} name={name} key={id} onChange={toggleChecked} checked={isChecked}/>{name}
  </label>
)

export default IngredientCheckbox
