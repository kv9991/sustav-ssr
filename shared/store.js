import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers";

const middlewares = applyMiddleware(thunkMiddleware);

export const initStore = (initialData = {}) =>
  createStore(reducers, initialData, middlewares);
