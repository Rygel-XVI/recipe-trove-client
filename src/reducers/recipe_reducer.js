export default function recipeReducer (state={
  recipes: []
  }, action){

    switch(action.type){
      case "SET_RECIPES":
        return action.recipes
      default:
        return state
  }
}

// 
// export default (state = [], action) => {
//   switch(action.type) {
//     case 'GET_SURFBOARDS_SUCCESS':
//       return action.surfboards;
