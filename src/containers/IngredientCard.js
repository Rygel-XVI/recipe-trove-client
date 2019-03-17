import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import IngredientDetails from '../components/IngredientDetails'

class IngredientCard extends Component {

  render() {
    
    const ingredient = this.props.ingredient

    return (
      <div>
      <IngredientDetails ingredient={ingredient} />
      <NavLink className='navlink' to={{ pathname: "/ingredients/" + ingredient.id + "/modify" , state: ingredient }}>Modify or Delete</NavLink>
      </div>
    )
  }

}

export default IngredientCard
