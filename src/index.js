import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";

import App from "./components/App";
import store from "./app/store";

import ToggleColorModeProvider from "./utils/ToggleColorMode";

import "./index.css";

const theme = createTheme({});

ReactDOM.render(
  <Provider store={store}>
    <ToggleColorModeProvider>
      <BrowserRouter basename="/movies">
        <App />
      </BrowserRouter>
    </ToggleColorModeProvider>
  </Provider>,

  document.getElementById("root")
);
