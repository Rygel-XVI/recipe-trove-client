import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
  return (
    <div className="navbar">
    <NavLink className='navlink' to="/recipes">Recipes</NavLink>
    <NavLink className='navlink' to="/ingredients">Ingredients</NavLink>
    </div>
  );
};

export default Nav;
