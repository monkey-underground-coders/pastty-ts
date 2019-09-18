import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { createBrowserHistory } from "history";
import reducer from "./reducer";
import { StoreRootState } from "./types";

export const history = createBrowserHistory();

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
  }
}

const initialState: StoreRootState = {} as any;

export const store = (() => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware));
  return createStore(reducer, initialState as any, enhancer);
})();

export default store;
