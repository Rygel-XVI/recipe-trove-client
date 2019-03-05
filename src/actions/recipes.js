export const fetchRecipes = (ingredientList) => {
  const baseUrl = 'http://localhost:3001/recipes'
  return dispatch => {
    fetch(baseUrl + '?query=' + ingredientList)
    .then(resp => resp.json())
    .then(recipes => dispatch({ type: 'SET_RECIPES', recipes }))
  }
}

// export const getRecipe = (recipeId) => {
//   debugger;
//   const baseUrl = 'http://localhost:3001/recipes/'
//   return dispatch => {
//     fetch(baseUrl + recipeId)
//     .then(resp => resp.json())
//     .then(recipe => dispatch({ type: 'SHOW_RECIPE', recipe }))
//   }
// }
