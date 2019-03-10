import React from 'react';
import { NavLink } from 'react-router-dom';
// import './Nav.css'

const Nav = () => {
  return (
    <div className="navbar">
    <NavLink className='navlink' to="/search">Search</NavLink>
    <NavLink className='navlink' to="/recipes/create">Create</NavLink>
    <NavLink className='navlink' to="/recipes/update">Modify</NavLink>
    </div>
  );
};

export default Nav;
