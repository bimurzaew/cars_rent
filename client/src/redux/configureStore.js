import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {carsReducer} from "./features/cars";
import {categoriesReducer} from "./features/categories";


export const store = createStore(
  combineReducers({
        cars: carsReducer,
        categories:categoriesReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
