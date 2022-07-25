import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";

import App from "./components/App";
import "./index.css";

const theme = createTheme({});

ReactDOM.render(
  <Provider>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/movies">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,

  document.getElementById("root")
);
