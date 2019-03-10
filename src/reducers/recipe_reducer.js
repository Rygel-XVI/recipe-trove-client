export default function recipeReducer (state={
  recipes: []
  }, action){
    switch(action.type){
      case "SET_RECIPES":
        return { ...state, recipes: action.recipes }
      case "ADD_RECIPE":
        debugger
        return{ ...state, recipes: [...state.recipes, action.recipe] }
      default:
        return state
  }
}
