import { createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from "redux-logger";
import rootReducers from "./rootReducer";

const store = createStore(rootReducers,composeWithDevTools( applyMiddleware(logger)))

export default store;

