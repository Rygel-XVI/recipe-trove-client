export default function ingredientReducer (state={
  ingredients: []
  }, action){
    switch(action.type){
      case "SET_INGREDIENTS":
        return {...state, ingredients: action.ingredients }
      case "ADD_INGREDIENT":
      debugger;
        return{ ...state, ingredients: [...state.ingredient, action.ingredient] }
      default:
        return state
  }
}
