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

// This is used to add js styles
import useStyles from "./styles";

const FeaturedMovie = ({ movie }) => {
  // Is used to apply js styles
  const classes = useStyles();
  // If we have no movie to display we return nothing
  if (!movie) return null;
  // console.log(movie);

  // console.log('movie',movie);
  return (
    <Box
      component={Link}
      to={`/movie/${movie.id}`}
      className={classes.featuredCardContainer}
    >
      <Card className={classes.card} classes={{ root: classes.cardRoot }}>
        <CardMedia
          media="picture"
          alt={movie.title}
          image={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          title={movie.title}
          className={classes.cardMedia}
        />
        <Box padding="20px">
          <CardContent
            className={classes.cardContent}
            classes={{ root: classes.cardContentRoot }}
          >
            <Typography variant="h5" gutterBottom>
              {movie.title}
            </Typography>
            <Box display="flex" align="center">
              <Rating readOnly value={movie.vote_average / 2}></Rating>
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ marginLeft: "10px" }}
              >
                {movie?.vote_average}/10{" "}
              </Typography>
            </Box>
            <Typography variant="subtitle1" gutterBottom>
              Popularity: {movie.popularity}
            </Typography>
            <Typography variant="body2">{movie.overview}</Typography>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

export default FeaturedMovie;
