import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {carsReducer} from "./features/cars";
import {categoriesReducer} from "./features/categories";
import users from './features/users';
import {brandsReducer, loadBrands} from "./features/brands";


export const store = createStore(
  combineReducers({
        cars: carsReducer,
        categories:categoriesReducer,
        users:users,
        brands: brandsReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
