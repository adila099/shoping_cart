import { ALERT_SUCCESS, ALERT_FAILURE, LOADING_SUCCESS, LOADING_FAILURE } from '../action/alertAction';

const initialState = {
  message: '',
  title:'',
  type: '',
  status: false,
  isLoading:false,
};
const alertReducer = (state = initialState , action) => {
  switch (action.type) {
    case ALERT_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
        title: action.payload.title,
        type: action.payload.type,
        status: action.payload.status,
      };
    case ALERT_FAILURE:
      return {
        ...state,
        message: action.payload.message,
        type: action.payload.type,
        status: action.payload.status,
      };
 /// loading
      case LOADING_SUCCESS:
      return {
        ...state,
        isLoading:action.payload.isLoading
      };
  
    default:
      return state;
  }
};

export default alertReducer;
