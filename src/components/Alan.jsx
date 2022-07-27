import { useEffect, useContext } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import { ColorModeContext } from "../utils/ToggleColorMode";
import { fetchToken } from "../utils";

const useAlan = () => {
  const { setMode } = useContext(ColorModeContext);

  useEffect(() => {
    alanBtn({
      key: "e5e339dd5b9299e985263542f9802ead2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command, mode }) => {
        if (command == "changeMode") {
          if (mode == "light") {
            setMode("light");
          } else {
            setMode("dark");
          }
        } else if (mode == "login") {
          fetchToken();
        } else if (mode == "logout") {
          localStorage.clear();
          window.location.href = "/";
        }
      },
    });
  }, []);
};

export default useAlan;
