import {
  SEND_API_REQUEST,
  SET_RECIPE_DATA,
  SET_RECIPE_ITEM,
  ADD_TO_FAVOURITE,
  REMOVE_FROM_FAVOURITE,
  SET_SEARCH_ITEM,
} from "./RecipeTypes";

// API Constants
const API_URL = "https://api.edamam.com/search";
const APP_ID = "a5de3521";
const APP_KEY = "28f8a20bd893e2740e68d4bbb349b977";

// Action creators
const setRecipeData = (data) => ({
  type: SET_RECIPE_DATA,
  payload: data,
});

const sendApiRequest = () => ({
  type: SEND_API_REQUEST,
});

const setRecipeItem = (data) => ({
  type: SET_RECIPE_ITEM,
  payload: data,
});

const addToFavourite = (recipe) => ({
  type: ADD_TO_FAVOURITE,
  payload: recipe,
});

const removeFromFavourite = (uri) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: uri,
});

const setSearchItem = (searchItem) => ({
  type: SET_SEARCH_ITEM,
  payload: searchItem,
});

// Fetch recipes based on search query
const fetchRecipe = (query) => {
  return async (dispatch) => {
    dispatch(sendApiRequest());
    try {
      const response = await fetch(
        `${API_URL}?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=50`
      );
      const data = await response.json();
      if (data.hits?.length > 0) {
        const recipes = data.hits.map((hit) => hit.recipe); // Extract the recipe object
        dispatch(setRecipeData(recipes)); // Dispatch the recipe data
      } else {
        console.error("No recipes found");
        dispatch(setRecipeData([])); // If no results, clear recipes
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
      dispatch(setRecipeData([])); // In case of error, clear recipes
    }
  };
};

// Fetch a specific recipe by URI
const fetchRecipeItem = (uri) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${API_URL}?r=${encodeURIComponent(uri)}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      if (data.length > 0) {
        dispatch(setRecipeItem(data[0])); // Assuming first match is correct
      } else {
        console.error("No recipe found for the given URI");
      }
    } catch (error) {
      console.error("Error fetching recipe item:", error);
    }
  };
};

export {
  setRecipeData,
  sendApiRequest,
  setRecipeItem,
  addToFavourite,
  removeFromFavourite,
  setSearchItem,
  fetchRecipe,
  fetchRecipeItem,
};
