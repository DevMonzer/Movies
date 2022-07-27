import { useEffect, useContext } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import alanBtn from "@alan-ai/alan-sdk-web";

import {
  selectGenreOrCategory,
  searchMovie,
} from "../features/currentGenreOrCategory";
import { ColorModeContext } from "../utils/ToggleColorMode";
import { fetchToken } from "../utils";

const useAlan = () => {
  const { setMode } = useContext(ColorModeContext);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    alanBtn({
      key: "e5e339dd5b9299e985263542f9802ead2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command, mode, genres, generOrCategory }) => {
        if (command === "chooseGenre") {
          const foundGenre = genres.find(
            (g) => g.name.toLowerCase() === generOrCategory.name.toLowerCase()
          );

          if (foundGenre) {
            history.push("/");
            dispatch(selectGenreOrCategory(foundGenre.id));
          }
        } else if (command == "changeMode") {
          if (mode == "light") {
            setMode("light");
          } else {
            setMode("dark");
          }
        } else if (command === "login") {
          fetchToken();
        } else if (command === "logout") {
          localStorage.clear();
          history.push("/");
        }
      },
    });
  }, []);
};

export default useAlan;
