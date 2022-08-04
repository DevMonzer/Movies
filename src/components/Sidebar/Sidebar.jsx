import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/styles";

import { useGetGenresQuery } from "../../services/TMDB";
import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";
import genreIcons from "../../assets/genres";

import useStyles from "./styles";

const blueLogo =
  "https://i.ibb.co/RDkk1BD/c3a6191b62164134b37d41065bf1d824.png";
const redLogo =
  "https://i.ibb.co/n14C8ZK/c3a6191b62164134b37d41065bf1d824-1.png";
const grayLogo =
  "https://i.ibb.co/BK52MJ8/9e1cfbe6e86244c2bcadf448e3139f86.png";

const categories = [
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top_rated" },
  { label: "Upcoming", value: "upcoming" },
];

// mobileOpen, setMobileOpen are used to close sidebar on mobile devices once a user clicks on a category or a genre
const Sidebar = ({ mobileOpen, setMobileOpen }) => {
  const theme = useTheme();
  const classes = useStyles();
  const { data, error, isFetching } = useGetGenresQuery();
  const isMobile = useMediaQuery("(max-width:600px)");
  const dispatch = useDispatch();
  // Using useSelector to select the redux slice we wanna use , here we wanna get the currentGenreOrCategory (the name is inside the store )
  const { genreIdOrCategoryName } = useSelector(
    (state) => state.currentGenreOrCategory
  );

  const history = useHistory();

  const Reusable = () => {
    return (
      <>
        <Divider />
        <List>
          <ListSubheader>Categories</ListSubheader>
          {categories.map(({ label, value }) => (
            <Link key={value} className={classes.links} to="/">
              <ListItem
                onClick={() => dispatch(selectGenreOrCategory(value))}
                button
              >
                <ListItemIcon>
                  <img
                    src={genreIcons[label.toLowerCase()]}
                    className={classes.genreImage}
                    height={30}
                  />
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          <ListSubheader>Genres</ListSubheader>
          {isFetching ? (
            <Box display="flex" justifyContent="center">
              <CircularProgress />
            </Box>
          ) : (
            data.genres.map(({ name, id }) => (
              <Link key={name} className={classes.links} to="/">
                <ListItem
                  onClick={() => dispatch(selectGenreOrCategory(id))}
                  button
                >
                  <ListItemIcon>
                    <img
                      src={genreIcons[name.toLowerCase()]}
                      className={classes.genreImage}
                      height={30}
                    />
                  </ListItemIcon>
                  <ListItemText primary={name} />
                </ListItem>
              </Link>
            ))
          )}
        </List>
      </>
    );
  };

  return (
    <>
      {isMobile ? (
        <div onClick={() => setMobileOpen(!mobileOpen)}>
          <Link to="/" className={classes.imageLink}>
            <img
              className={classes.image}
              src={theme.palette.mode === "light" ? blueLogo : grayLogo}
              alt="Movies"
            />
          </Link>
          <Reusable />
        </div>
      ) : (
        <div>
          <Link to="/" className={classes.imageLink}>
            <img
              className={classes.image}
              src={theme.palette.mode === "light" ? blueLogo : redLogo}
              alt="Movies"
            />
          </Link>
          <Reusable />
        </div>
      )}
    </>
  );
};

export default Sidebar;
