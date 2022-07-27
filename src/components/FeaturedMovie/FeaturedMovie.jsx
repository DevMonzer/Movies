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

  return (
    <Box
      component={Link}
      to={`/movie/${movie.id}`}
      className={classes.featuredCardContainer}
    >
      Hey
    </Box>
  );
};

export default FeaturedMovie;
