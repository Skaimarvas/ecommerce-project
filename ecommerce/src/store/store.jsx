import logger from "redux-logger";
import { thunk } from "redux-thunk";
import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

//Reducers
import { globalReducer } from "./reducers/globalReducer";
import { productReducer } from "./reducers/productReducer";
import { shoppingCartReducer } from "./reducers/shoppingCartReducer";
import { userReducer } from "./reducers/userReducer";

const reducers = combineReducers({
  global: globalReducer,
  product: productReducer,
  shopping: shoppingCartReducer,
  userData: userReducer,
});

export const store = createStore(reducers, applyMiddleware(logger, thunk));
