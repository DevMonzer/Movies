import React, { useEffect } from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/styles";

import useStyles from "./styles";

const blueLogo =
  "https://i.ibb.co/QD6HMvd/138faa461ff64660bae4bf45d8d84be9.png";
const redLogo =
  "https://i.ibb.co/wsjHZN1/138faa461ff64660bae4bf45d8d84be9-1.png";

const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === "light" ? blueLogo : redLogo}
          alt="Movies"
        />
      </Link>
    </>
  );
};

export default Sidebar;
