import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getRecipe } from '../actions/recipes'
import ShowRecipe from './ShowRecipe'


class RecipeDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipe: {}
    }
    this.recipeLoaded.bind(this)
  }

  recipeLoaded() {
    if (this.state.recipe != null) {
      return <ShowRecipe recipe={this.state.recipe} />
    } else {
      return 'Error, no recipe found.'
    }
  }

  // componentWillMount() {
  //   debugger;
  //   this.props.getRecipe(this.props.recipe.match.params.id)
  //
  //   // debugger;
  // }

  componentDidMount() {
    // debugger;
    //fetch recipe by name
   this.props.getRecipe(this.props.recipe.match.params.id)
  }


render() {
  debugger;
  return (

      <div>
        {this.recipeLoaded()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
     recipe: state.recipeReducer.recipe
   }
}

// const mergeProps = (state, actions, props) => {
// debugger;
//   return {
//     ...actions,
//     ...props,
//     showRecipe: () => {
//       return {
//         getRecipe(props.recipe.match.params.id)
//       }
//     }
//   }
// }

// const mergeProps = (stateProps, dispatchProps, ownProps) => {
//     return Object.assign({}, ownProps, {
//         orgGroup: ownProps.orgGroup,
//         availableGroups: stateProps.availableGroups,
//         onChange: (newGroup) => {
//             dispatchProps.setGroup(newGroup)
//             dispatchProps.setContacts('')
//
//             // PROBLEM here: stateProps.orgName returns undefined
//             dispatchProps.requestContacts(stateProps.orgName, newGroup)
//         }
//     })
// }

    // game: state.games.find(item => item.id === props.navigation.state.params.id)

export default connect(mapStateToProps, { getRecipe }, mergeProps) (RecipeDetails);
