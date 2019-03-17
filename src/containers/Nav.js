import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="navbar">
    <NavLink className='navlink' to="/">Home</NavLink>
    <NavLink className='navlink' to="/create">Create</NavLink>
    <NavLink className='navlink' to="/recipes">Recipes</NavLink>
    <NavLink className='navlink' to="/ingredients">Ingredients</NavLink>
    </div>
  );
};

export default Nav;
