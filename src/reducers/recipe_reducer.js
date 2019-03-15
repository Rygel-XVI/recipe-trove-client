export default function recipeReducer (state={
  recipes: []
  }, action){
    switch(action.type){
      case "SET_RECIPES":
        return { ...state, recipes: action.recipes }
      case "ADD_RECIPE":
        return{ ...state, recipes: [...state.recipes, action.recipe] }
      case "DELETE_RECIPE":
        return {...state, recipes: state.recipes.filter(recipe => recipe.id !== action.recipe.id)}
      default:
        return state
  }
}
