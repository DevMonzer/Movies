import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./components/App";
import store from "./app/store";

import ToggleColorModeProvider from "./utils/ToggleColorMode";

import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <ToggleColorModeProvider>
      <BrowserRouter basename="movies">
        <App />
      </BrowserRouter>
    </ToggleColorModeProvider>
  </Provider>,

  document.getElementById("root")
);

/*
 
    ToggleColorModeProvider is used to togle the website color mode based on the user settings

*/
