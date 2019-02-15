import React, { Component } from 'react'
import './check-box.css'

const IngredientCheckbox = ({ ingredient: { id, name, description } }) => (
<label className="check-box">
  <input type="checkbox" value={name} key={id} />{name}
</label>
)

export default IngredientCheckbox
