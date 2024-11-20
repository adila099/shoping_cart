import { combineReducers } from "redux";
import userReducer from "./userReducer";
import alertReducer from "./alertReducer";
import cartReducer from "./cartReducer";
import todoReducer from "./todoReducer"
import countReducer from "./countReducer";


export default combineReducers({
   user: userReducer,
   cart: cartReducer,
   todo:todoReducer,
   notification: alertReducer,
   counter: countReducer,
});
