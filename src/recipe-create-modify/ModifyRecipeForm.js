import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchRecipe } from '../actions/recipes'

class ModifyRecipeForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      recipe: {
        name: '',
        description: '',
        instructions: '',
        ingredients: []
      }
    }
    // this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  // dispatches to post on submit
  handleModify() {

  }

  // dispatches to delete on submit
  handleDelete() {
    debugger;
  }

  componentDidMount(){
    //dispatch to fetch recipe with id params of recipe to setState for recipe. 
  }

  render() {

    const recipe = this.props.recipe.location.recipe

    return (
      <div>
      Modify
      <form>
      </form>
      </div>
    )

  }

}

export default connect(null, null) (ModifyRecipeForm);
