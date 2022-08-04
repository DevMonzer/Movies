import React, { useRef, useEffect } from "react";
import { CssBaseline } from "@mui/material";
import { Route, Switch } from "react-router-dom";

import useStyles from "./styles";
import { Actors, MovieInformation, Movies, Navbar, Profile } from ".";

import useAlan from "./Alan";

const App = () => {
  const classes = useStyles();
  const alanButoonContainer = useRef();

  useAlan();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path={["/", "/approved"]}>
            <Movies />
          </Route>
          <Route exact path="/movie/:id">
            <MovieInformation />
          </Route>
          <Route exact path="/actor/:id">
            <Actors />
          </Route>
          <Route exact path="/profile/:id">
            <Profile />
          </Route>
        </Switch>
      </main>
      <div ref={alanButoonContainer} />
    </div>
  );
};

export default App;
