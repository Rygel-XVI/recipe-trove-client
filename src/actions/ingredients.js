export const fetchIngredients = () => {
  return dispatch => {
    fetch('http://localhost:3001/ingredients')
    .then(resp => resp.json())
    .then(ingredients => dispatch({ type: 'SET_INGREDIENTS', ingredients }))
  }
}

export const createIngredient = (ingredient) => {
console.log(JSON.stringify({ ingredient }))
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ingredient })
  }

  const baseUrl = 'http://localhost:3001/ingredients'
  return dispatch => {
    fetch(baseUrl, data)
    .then(resp => resp.json())
    .then(ingredient => dispatch({ type: 'ADD_INGREDIENT', ingredient }))
    .catch(err => console.log(err))
  }
}
