export const fetchRecipes = (ingredientList) => {
  const baseUrl = 'http://localhost:3001/recipes'
  return dispatch => {
    fetch(baseUrl + '?query=' + ingredientList)
    .then(resp => resp.json())
    .then(recipes => dispatch({ type: 'SET_RECIPES', recipes }))
  }
}

export const createRecipe = (recipe) => {
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

export const deleteRecipe = (id) => {
  let data = {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }

  const baseUrl = 'http://localhost:3001/recipes'
  return dispatch => {
    fetch(baseUrl + "/" + id, data)
    .then(resp => resp.json())
    .then(recipe => dispatch({ type: 'DELETE_RECIPE', recipe }))
    .catch(err => console.log(err))
  }
}



// export const deleteTodo = id => {
//   let data = {
//     method: 'DELETE',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//       'Authorization': sessionStorage.jwt
//     }
//   }
//
//   return dispatch => {
//     fetch(`${ baseUrl }/todos/${ id }`, data)
//       .then(response => response.json())
//       .then(todo => dispatch({
//         type: 'DELETE_TODO',
//         payload: todo
//       }))
//       .catch(err => err)
//   }
// }
