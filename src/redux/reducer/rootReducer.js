import { combineReducers } from "redux";
import userReducer from "./userReducer";
import alertReducer from "./alertReducer";
import cartReducer from "./cartReducer";


export default combineReducers({
   user: userReducer,
   cart: cartReducer,
   notification: alertReducer,
});
