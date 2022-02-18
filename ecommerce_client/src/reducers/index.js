import {combineReducers} from "redux";

import itemReducer from "./itemReducer";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";
import orderReducer from "./orderReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
    items:itemReducer,
    cart:cartReducer,
    user:userReducer,
    order:orderReducer,
    error:errorReducer
})