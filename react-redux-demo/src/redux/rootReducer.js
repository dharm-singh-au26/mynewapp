import { combineReducers, CombineReducers } from "redux";
import cakeReducers from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";


const rootReducers = combineReducers({
    cake : cakeReducers,
    iceCream : iceCreamReducer
})

export default rootReducers