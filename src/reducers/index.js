
import { combineReducers } from 'redux';
import recipeReducer from '../reducers/recipe_reducer'
import ingredientReducer from '../reducers/ingredient_reducer'

export default combineReducers({
  recipeReducer: recipeReducer,
  ingredients: ingredientReducer
})
