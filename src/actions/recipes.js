export const fetchRecipes = (ingredientList) => {
  const baseUrl = 'http://localhost:3001/recipes'
  return dispatch => {
    fetch(baseUrl + '?query=' + ingredientList)
    .then(resp => resp.json())
    .then(recipes => dispatch({ type: 'SET_RECIPES', recipes }))
  }
}

export const createRecipe = (recipe) => {
console.log(JSON.stringify({ recipe }))
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ recipe })
  }

  const baseUrl = 'http://localhost:3001/recipes'
  return dispatch => {
    fetch(baseUrl, data)
    .then(resp => resp.json())
    .then(recipe => dispatch({ type: 'ADD_RECIPE', recipe }))
    .catch(err => console.log(err))
  }
}
