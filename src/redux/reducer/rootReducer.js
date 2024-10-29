import { combineReducers } from "redux";
import userReducer from "./userReducer";
import alertReducer from "./alertReducer";
import cartReducer from "./cartReducer";
import todoReducer from "./todoReducer"

export default combineReducers({
   user: userReducer,
   cart: cartReducer,
   todo:todoReducer,
   notification: alertReducer,
});
