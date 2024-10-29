// Action Types
export const ADD_COUNT_SUCCESS = 'ADD_COUNT_SUCCESS';
export const REMOVE_COUNT_SUCCESS = 'REMOVE_COUNT_SUCCESS';
export const CLEAR_COUNT_SUCCESS = 'CLEAR_COUNT_SUCCESS';

// Add Cart Action Creator

export const addCountSuccess = (payload) => ({
  type: ADD_COUNT_SUCCESS,
  payload,
});

// Remove COUNT Action Creator

export const removeCountSuccess = () => ({
  type: REMOVE_COUNT_SUCCESS,
});


// Clear COUNT Action Creator
export const clearCountSuccess = () => ({
  type: CLEAR_COUNT_SUCCESS,
});
