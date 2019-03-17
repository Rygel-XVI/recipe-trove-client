import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

// should be a link that when you click on it it displays the recipe
class RecipeCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipe: {}
    }
  }

  render() {

    const {recipe} = this.props

    return (
      <div>
      <NavLink className='navlink' to={{ pathname: "/recipes/" + recipe.id + '/'+ recipe.name, state: recipe }} >{recipe.name} </NavLink> - <NavLink className='navlink' to={{ pathname: "/recipes/" + recipe.id + "/modify" , state: recipe }}>Modify/Delete</NavLink>
      <br />
      <br />
      </div>
    )}

  }

export default RecipeCard
