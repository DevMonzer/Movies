import { useEffect, useContext } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import { ColorModeContext } from "../utils/ToggleColorMode";

const Alan = () => {
  const { setMode } = useContext(ColorModeContext);

  useEffect(() => {
    alanBtn({
      key: "e5e339dd5b9299e985263542f9802ead2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        if (commandData.command === "go:back") {
          // Call the client code that will react to the received command
        }
      },
    });
  }, []);

  return <div>Alan</div>;
};

export default Alan;
