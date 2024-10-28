import { combineReducers } from "redux";
import userReducer from "./userReducer";
import alertReducer from "./alertReducer";
import cartReducer from "./cartReducer";
import countReducer from "./countReducer";


export default combineReducers({
   user: userReducer,
   cart: cartReducer,
   notification: alertReducer,
   counter: countReducer,
});
