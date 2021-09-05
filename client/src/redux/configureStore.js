import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import cars from './features/cars';

export const store = createStore(
  combineReducers({ cars }),
  composeWithDevTools(applyMiddleware(thunk))
);
