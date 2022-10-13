import { createStore } from "redux";
import cakeReducers from "./cake/cakeReducer";
const store = createStore(cakeReducers);

export default store;
