export default function ingredientReducer (state={
  ingredients: []
  }, action){
    switch(action.type){
      case "SET_INGREDIENTS":
        return {...state, ingredients: action.ingredients }
      default:
        return state
  }
}
