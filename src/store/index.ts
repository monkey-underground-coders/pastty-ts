import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import { createBrowserHistory } from "history";
import reducer from "./reducer";

export const history = createBrowserHistory();

const getMiddleware = () => {
  if (process.env.NODE_ENV === "production") {
    return applyMiddleware();
  }

  return applyMiddleware(createLogger());
};

export const store = createStore(reducer, getMiddleware());
