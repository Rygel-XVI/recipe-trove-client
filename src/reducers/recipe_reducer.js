export default function recipeReducer (state={
  recipes: []
  }, action){

    switch(action.type){
      case "SET_RECIPES":
        return {...state, recipes: action.recipes }
      default:
        return state
  }
}
