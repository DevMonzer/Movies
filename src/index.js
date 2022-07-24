import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";

import App from "./components/App";
import "./index.css";

const theme = createTheme({});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter basename="/movies">
      <App />
    </BrowserRouter>
  </ThemeProvider>,

  document.getElementById("root")
);
