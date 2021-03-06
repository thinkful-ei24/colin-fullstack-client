import { API_BASE_URL } from '../config.js';
import querystring from 'querystring';

export const FETCH_RECIPES_REQUEST = 'FETCH_RECIPES_REQUEST';
export const fetchRecipesRequest = () => ({
  type: FETCH_RECIPES_REQUEST
});

export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const fetchRecipesSuccess = (hits) => ({
  type: FETCH_RECIPES_SUCCESS,
  hits
});

export const FETCH_RECIPES_ERROR = 'FETCH_RECIPES_ERROR';
export const fetchRecipesError = (error) => ({
  type: FETCH_RECIPES_ERROR,
  error
});

export const getSearchHits = (searchTerm) => dispatch => {

  const query = {
    q: searchTerm
  }

  dispatch(fetchRecipesRequest());
  fetch(`${API_BASE_URL}/search?${querystring.stringify(query)}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(res => {
      dispatch(fetchRecipesSuccess(res.hits))
    })
    .catch(err => {
      dispatch(fetchRecipesError(err));
    })
};

//fetch request
//fetch success
//fetch error
//function to be run


