import logger from "redux-logger";
import { thunk } from "redux-thunk";
import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

const reducers = combineReducers({});

export const store = createStore(reducers, applyMiddleware(logger, thunk));
