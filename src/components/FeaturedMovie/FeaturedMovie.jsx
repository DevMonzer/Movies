import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Rating,
} from "@mui/material";
import { Link } from "react-router-dom";

import useStyles from "./styles";

const FeaturedMovie = ({ movie }) => {
  const classes = useStyles();

  if (!movie) return null;

  return <div>FeaturedMovie</div>;
};

export default FeaturedMovie;
