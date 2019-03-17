import React, { Component } from 'react';


class IngredientCard extends Component {

  render() {
    return (
      <div>
      <IngredientDetails ingredient={ingredient} />
      <NavLink className='navlink' to={{ pathname: "/ingredients/" + ingredient.id + "/modify" , state: ingredient }}>Modify or Delete</NavLink>
      </div>
    )
  }

}

export default IngredientCard
