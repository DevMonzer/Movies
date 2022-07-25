import React, { useEffect, useState } from "react";
import {
  Modal,
  Typography,
  Button,
  ButtonGroup,
  Grid,
  Box,
  CircularProgress,
  Rating,
  useMediaQuery,
} from "@mui/material";
import {
  Movie as MovieIcon,
  Theaters,
  Language,
  PlusOne,
  Favorite,
  FavoriteBorderOutlined,
  Remove,
  ArrowBack,
} from "@mui/icons-material";
import { Link, useParams, userParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { useGetMovieQuery } from "../../services/TMDB";

import useStyles from "./styles";

const MovieInformation = () => {
  const classes = useStyles();
  const { id } = useParams();
  const { user } = useSelector(userSelector);
  const { data, isFetching, error } = useGetMovieQuery(id);

  return <div>MovieInformation</div>;
};

export default MovieInformation;
