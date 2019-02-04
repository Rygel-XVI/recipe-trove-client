import React from 'react';

const RecipeCard = ({ id, name, description }) => (

    <li key={id}>
      <p>Recipe Card</p>
      <h3>{name}</h3>
    </li>

)

export default RecipeCard;
