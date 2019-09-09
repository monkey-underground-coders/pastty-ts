import React from "react";
import ReactDOM from "react-dom";
import Application from "#/components/Application";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import "#/styles/main.scss"
import * as serviceWorker from "./serviceWorker";

const rootElement = document.getElementById("root");
const DOMComponent = (
  <Provider store={store}>
    <BrowserRouter>
      <Application />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(DOMComponent, rootElement);
serviceWorker.unregister();
