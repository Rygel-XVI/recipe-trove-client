const baseUrl = 'http://localhost:3001/ingredients'

export const fetchIngredients = () => {
  return dispatch => {
    fetch('http://localhost:3001/ingredients')
    .then(resp => resp.json())
    .then(ingredients => dispatch({ type: 'SET_INGREDIENTS', ingredients }))
  }
}

export const createIngredient = (ingredient) => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ingredient })
  }

  return dispatch => {
    fetch(baseUrl, data)
    .then(resp => resp.json())
    .then(ingredient => dispatch({ type: 'ADD_INGREDIENT', ingredient }))
    .catch(err => console.log(err))
  }
}

export const updateIngredient = (ingredient) => {
  let data = {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ingredient })
  }

  return dispatch => {
    fetch(baseUrl + "/" + ingredient.id, data)
    .then(resp => resp.json())
    .then((ingredient) => dispatch({ type: 'UPDATE_INGREDIENT', ingredient }))
    .catch(err => console.log(err))
  }
}

export const deleteIngredient = (id) => {
  let data = {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }

  return dispatch => {
    fetch(baseUrl + "/" + id, data)
    .then(resp => resp.json())
    .then((ingredient) => dispatch({ type: 'DELETE_INGREDIENT', ingredient }))
    .catch(err => console.log(err))
  }
}
