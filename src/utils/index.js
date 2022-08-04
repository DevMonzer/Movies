import axios from "axios";

export const moviesApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "83e503c339b79b35e59eb40deea54837",
  },
});

export const fetchToken = async () => {
  try {
    // Getting the authentication token from the server
    const { data } = await moviesApi.get("/authentication/token/new");
    // console.log("data", data);
    const token = data.request_token;
    // console.log("request_token", data.request_token);
    // We redirect to the API authentication to log in and create a token and if we successfully get the token then we store it in the localStorage
    if (data.success) {
      localStorage.setItem("request_token", token);
      window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${window.location.origin}/movies/approved`;
    }
  } catch (error) {
    console.log("Your token could not be created!");
  }
};

// Getting the token from the localStorage and create a session id
export const createSessionId = async () => {
  const token = localStorage.getItem("request_token");
  if (token) {
    try {
      // Creating a session id out of the token
      const {
        data: { session_id },
      } = await moviesApi.post("authentication/session/new", {
        request_token: token,
      });
      // Store the session id into the localStorage
      localStorage.setItem("session_id", session_id);
      return session_id;
    } catch (error) {
      console.log(error);
    }
  }
};
