import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class IngredientCard extends Component {

  render() {

    const ingredient = this.props.ingredient

    return (
      <div>
      <li><NavLink className='navlink' to={{ pathname: "/ingredients/" + ingredient.id + "/modify" , state: ingredient }}>{ingredient.name}</NavLink></li>
      <br />
      </div>
    )
  }

}

export default IngredientCard
