export const fetchRecipes = (ingredientList) => {
  const baseUrl = 'http://localhost:3001/recipes'
  return dispatch => {
    fetch(baseUrl + '?query=' + ingredientList)
    .then(resp => resp.json())
    .then(recipes => dispatch({ type: 'SET_RECIPES', recipes }))
  }
}

export const getRecipe = (recipeName) => {
  debugger;
  return dispatch => ({
    type: 'GET_RECIPE', recipeName
  })
}


// const petType = this.state.filters.type
// if (petType === "cat") {
//   petFetch("/api/pets?type=cat")
// } else if (petType === "dog") {
//   petFetch("/api/pets?type=dog")
// } else if (petType === "micropig") {
//   petFetch("/api/pets?type=micropig")
// } else {
//   petFetch("/api/pets")
// }
// }


// fetch('https://mywebsite.com/endpoint/', {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     firstParam: 'yourValue',
//     secondParam: 'yourOtherValue',
//   }),
// }).then((response) => response.json())
//     .then((responseJson) => {
//       return responseJson.movies;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
