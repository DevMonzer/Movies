import React, { useState } from "react";
import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import { useHistory, useParams } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

import useStyles from "./styles";
import {
  useGetActorDetailQuery,
  useGetMoviesByActorIdQuery,
} from "../../services/TMDB";

const Actors = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const { data, isFetching, error } = useGetActorDetailQuery(id);

  if (isFetching || isActorsMovieFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }

  return <div>Actors</div>;
};

export default Actors;
