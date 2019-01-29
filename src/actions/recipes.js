export const fetchRecipes = () => {
  return dispatch => {
    fetch('http://localhost:3001/recipes')
    .then(resp => resp.json())
    .then(recipes => dispatch({ type: 'SET_RECIPES', recipes }))
  }
}
