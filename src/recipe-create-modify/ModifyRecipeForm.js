import React, { Component } from 'react';
import { connect } from 'react-redux'

class ModifyRecipeForm extends Component {
  constructor(props) {
    super(props)
    //
    // this.handleSubmit.bind(this)
    // this.handleDelete.bind(this)
    this.test = this.test.bind(this)
  }

  // dispatches to post on submit
  handleModify() {

  }

  // dispatches to delete on submit
  handleDelete() {

  }

  test() {
    debugger;
  }

  render() {
    return (
      <div>
      Modify
      {this.test}
      </div>
    )

  }

}

export default connect(null, null) (ModifyRecipeForm);
