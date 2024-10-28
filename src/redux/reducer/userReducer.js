// userReducer.js
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../action/userActions';


const initialState = {
  user: null,
  users: [],
  userAll: [],
  newUser: null,
  updateUser: [],
  userDevice: null,
  error: null,
  token: null,
  count: 0,
  totalPages: 0,
  currentPage: 0,
  limit: 0,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // login
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.headers.AuthToken,
        error: null,
      };
    case LOGIN_FAILURE:
      return { ...state, user: null, error: action.payload };


    // logout
    case LOGOUT:

      return {
        ...state,
        user: null,
        token: null,
      };

    default:
      return state;
  }
};

export default userReducer;
