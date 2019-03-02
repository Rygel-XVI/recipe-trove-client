export default function recipeReducer (state={
  recipes: []
  }, action){

    switch(action.type){
      case "SET_RECIPES":
        return {...state, recipes: action.recipes }
      case "GET_RECIPE":
      debugger;
      //should return the single recipe
      default:
        return state
  }
}
