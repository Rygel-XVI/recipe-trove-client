import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchRecipes } from '../actions/recipes'


class ModifyRecipeForm extends Component {
  constructor(props) {
    super(props)
    // 
    // this.handleSubmit.bind(this)
    // this.handleDelete.bind(this)
  }

  // dispatches to post on submit
  handleModify() {

  }

  // dispatches to delete on submit
  handleDelete() {

  }

  render() {
    return (
      <div>
      Modify
      </div>
    )

  }

}

export default connect(null, null) (ModifyRecipeForm);
