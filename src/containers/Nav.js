import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
  return (
    <div className="navbar">
    <NavLink className='navlink' to="/search">Search</NavLink>
    <NavLink className='navlink' to="/create-recipe">Create</NavLink>
    <NavLink classname='navlink' to="/modify-recipe">Modify</NavLink>
    </div>
  );
};

export default Nav;
