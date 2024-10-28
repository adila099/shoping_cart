// Action Types
export const ADD_CART_SUCCESS = 'ADD_CART_SUCCESS';
export const REMOVE_CART_SUCCESS = 'REMOVE_CART_SUCCESS';
export const CLEAR_CART_SUCCESS = 'CLEAR_CART_SUCCESS';

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
