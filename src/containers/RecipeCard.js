import React from 'react';

const RecipeCard = ({ recipe: { id, name, description } }) => (

    <li key={id}>
      <h3>{name}</h3>
      <p>{description}</p>
    </li>

)

export default RecipeCard;