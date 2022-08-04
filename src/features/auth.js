import { createSlice } from "@reduxjs/toolkit";

// The user reducer
// The user object initialState
const initialState = {
  user: {},
  isAuthenticated: false,
  sessionId: "",
};

// Creating a slice for the user object
const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.sessionId = localStorage.getItem("session_id");
      localStorage.setItem("account_id", action.payload.id);
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;

// This is used to get the user current state
export const userSelector = (state) => state.user;

/*

    This is going to be exported to the redux store to be used throughout the application

*/
