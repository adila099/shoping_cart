// Action Types
export const ADD_CART_SUCCESS = 'ADD_CART_SUCCESS';
export const REMOVE_CART_SUCCESS = 'REMOVE_CART_SUCCESS';
export const CLEAR_CART_SUCCESS = 'CLEAR_CART_SUCCESS';


export const DATA_REQUEST = 'DATA_REQUEST';
export const DATA_SUCCESS = 'DATA_SUCCESS';

// Add Cart Action Creator

export const addRequestSuccess = (payload) => ({
  type: ADD_CART_SUCCESS,
  payload,
});

// Remove Cart Action Creator

export const removeRequestSuccess = (payload) => ({
  type: REMOVE_CART_SUCCESS,
  payload,
});


// Clear Cart Action Creator
export const clearCartSuccess = () => ({
  type: CLEAR_CART_SUCCESS,
});



export const dataRequest = (payload) => ({
  type: DATA_REQUEST,
  payload,
});


export const dataSuccess = (payload) => ({
  type: DATA_SUCCESS,
  payload,
});