// Action Types
export const ADD_CART_SUCCESS = "ADD_CART_SUCCESS";
export const REMOVE_CART_SUCCESS = "REMOVE_CART_SUCCESS";
export const CLEAR_CART_SUCCESS = "CLEAR_CART_SUCCESS";

export const DATA_REQUEST = "DATA_REQUEST";
export const DATA_SUCCESS = "DATA_SUCCESS";

export const DELETE_PRODUCT_REQUEST = "DELETE_PRODUCT_REQUEST";
export const DELETE_PRODUCT_SUCCESS = "DELETE_PRODUCT_SUCCESS";
export const DELETE_PRODUCT_FAILURE = "DELETE_PRODUCT_FAILURE";

export const UPDATE_PRODUCT_REQUEST = "UPDATE_PRODUCT_REQUEST";
export const UPDATE_PRODUCT_SUCCESS = "UPDATE_PRODUCT_SUCCESS";
export const UPDATE_PRODUCT_FAILURE = "UPDATE_PRODUCT_FAILURE";

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

export const deleteProductRequest = (productId) => ({
  type: DELETE_PRODUCT_REQUEST,
  payload: productId,
});
export const deleteProductSuccess = (productId) => ({
  type: DELETE_PRODUCT_SUCCESS,
  payload: productId,
});
export const deleteProductFailure = (error) => ({
  type: DELETE_PRODUCT_FAILURE,
  payload: error,
});

export const updateProductRequest = (payload) => ({
  type: UPDATE_PRODUCT_REQUEST,
  payload,
});
export const updateProductSuccess = (payload) => ({
  type: UPDATE_PRODUCT_SUCCESS,
  payload,
});
export const updateProductFailure = (error) => ({
  type: UPDATE_PRODUCT_FAILURE,
  payload: error,
});
