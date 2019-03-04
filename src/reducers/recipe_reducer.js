export default function recipeReducer (state={
  recipes: []
  }, action){

    switch(action.type){
      case "SET_RECIPES":
        return { ...state, recipes: action.recipes }
      case "SHOW_RECIPE":
        debugger;
        return { recipe: action.recipe }
      default:
        return state
  }
}

// state.recipes.find(recipe => recipe.name == action.recipeName)
