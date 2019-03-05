import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { getRecipe } from '../actions/recipes'
import { connect } from 'react-redux'




// should be a link that when you click on it it displays the recipe
class RecipeCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipe: {}
    }
    // this.handleClick.bind(this)
  }

  // <Link to={{ pathname: '/route', state: { foo: 'bar'} }}>My route</Link>
  // onClick={this.handleClick()}
  //
  // handleClick() {
  //   // debugger;
  //   this.props.getRecipe(this.props.recipe.id)
  // }


  render() {

    const {recipe} = this.props

    return (

      <div>
      {recipe.name} <NavLink className='navlink' to={{ pathname: "/recipes/" + recipe.id + '/'+ recipe.name, state: recipe }} >See Full Description</NavLink>
      </div>

    )}

  }

  export default connect(null, { getRecipe }) (RecipeCard)
