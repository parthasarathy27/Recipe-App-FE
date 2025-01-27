import axios from 'axios';
import axiosRetry from 'axios-retry';

axiosRetry(axios, { retries: 3, retryDelay: axiosRetry.exponentialDelay });

const fetchRecipe = (searchItem) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${searchItem}&app_id=a5de3521&app_key=28f8a20bd893e2740e68d4bbb349b977&from=0&to=50`
      );
      
      if (response.status === 200 && response.data.hits.length > 0) {
        dispatch({
          type: 'SET_RECIPES',
          payload: response.data.hits,
        });
      } else {
        dispatch({
          type: 'SET_RECIPES',
          payload: [],
        });
      }
    } catch (error) {
      if (error.response && error.response.status === 429) {
        alert('Too many requests. Please try again later.');
      } else {
        console.error('Error fetching recipes:', error);
        alert('Error fetching recipes. Please try again later.');
      }
    }
  };
};
