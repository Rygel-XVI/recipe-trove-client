import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchRecipes } from '../actions/recipes'


class CreateRecipeForm extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit.bind(this)
  }

  // dispatch to create new recipe
  handleSubmit() {

  }

  render() {
  }

}

export default connect(null, null) (CreateRecipeForm);
