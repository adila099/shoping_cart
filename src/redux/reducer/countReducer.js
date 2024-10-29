import { ADD_COUNT_SUCCESS, CLEAR_COUNT_SUCCESS, REMOVE_COUNT_SUCCESS } from "../action/countAction";

const initialState = {
  totalCount: 0,
  error: null,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNT_SUCCESS:
      return {
        ...state,
        totalCount: state.totalCount + action.payload,
        error: null,
      }


    case REMOVE_COUNT_SUCCESS:
      return {
        ...state,
        totalCount: state.totalCount - 1,
        error: null,
      }


    case CLEAR_COUNT_SUCCESS:
      return {
        ...state,
        totalCount: 0,
        error: null,
      };

    default:
      return state;
  }
};

export default countReducer;
