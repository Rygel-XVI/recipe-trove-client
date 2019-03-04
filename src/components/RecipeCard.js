import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';


// should be a link that when you click on it it displays the recipe
const RecipeCard = ({ recipe }) => (
  <div>
  {recipe.name} <NavLink className='navlink' onClick={this.handleClick()}to={"/recipes/" + recipe.id + '/'+ recipe.name} >See Full Description</NavLink>
  </div>
)

export default RecipeCard


                // <NavLink to={`/reptile/${this.props.subtype}`} />

// let url = 'localhost'=='localhost'? '/foo':''; // <=== added slash
// <Router>
//  <NavLink to={url+'/'}>Home</NavLink>
// </Router>
