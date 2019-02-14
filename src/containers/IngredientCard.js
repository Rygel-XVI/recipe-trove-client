import React from 'react';

const IngredientCard = ({ ingredient: { id, name, description } }) => (

    <li key={id}>
      <h3>{name}</h3>
      <p>{description}</p>
    </li>

)

export default IngredientCard;
