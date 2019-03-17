export default function ingredientReducer (state={
  ingredients: []
  }, action){
    switch(action.type){
      case "SET_INGREDIENTS":
        return {...state, ingredients: action.ingredients }
      case "ADD_INGREDIENT":
        return { ...state, ingredients: [...state.ingredients, action.ingredient] }
      case "MODIFY_INGREDIENT":
        let updatedIngredients = state.ingredients.filter(ingredient => ingredient.id !== action.ingredient.id)
        updatedIngredients.push(action.ingredient)
        return { ...state, ingredients: updatedIngredients }
      case "DELETE_INGREDIENT":
        return {...state, ingredients: state.ingredients.filter(ingredient => ingredient.id !== action.ingredient.id)}
      default:
        return state
  }
}
