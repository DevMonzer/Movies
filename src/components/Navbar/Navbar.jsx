import React from "react";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Drawer,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import {
  Menu,
  AccountCircle,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}></Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
