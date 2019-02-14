export const fetchIngredients = () => {
  return dispatch => {
    fetch('http://localhost:3001/ingredients')
    .then(resp => resp.json())
    .then(ingredients => dispatch({ type: 'SET_INGREDIENTS', ingredients }))
  }
}
