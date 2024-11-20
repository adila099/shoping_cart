export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const REMOVE_TODO_SUCCESS = "REMOVE_TODO_SUCCESS";
export const UPDATE_TODO_SUCCESS = "UPDATE_TODO_SUCCESS";

// export const CLEAR_CART_SUCCESS = 'CLEAR_CART_SUCCESS';

// Add Todo Action Creator

export const addRequestSuccess = (payload) => ({
  type: ADD_TODO_SUCCESS,
  payload,
});

// Remove Todo Action Creator

export const removeRequestSuccess = (payload) => ({
  type: REMOVE_TODO_SUCCESS,
  payload,
});

// Update Todo  Action Creator
export const updateTodoSuccess = (editIndex, inputValue) => ({
  type: UPDATE_TODO_SUCCESS,
  payload: { editIndex, inputValue },
});
