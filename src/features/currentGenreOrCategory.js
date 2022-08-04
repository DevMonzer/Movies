import { createSlice } from "@reduxjs/toolkit";

// The genreOrCategory slice
export const genreOrCategory = createSlice({
  // The genreOrCategory initialState object
  name: "genreOrCategory",
  initialState: {
    genreIdOrCategoryName: "",
    page: 1,
    searchQuery: "",
  },
  reducers: {
    selectGenreOrCategory: (state, action) => {
      //   console.log(action.payload);
      state.genreIdOrCategoryName = action.payload;
      state.searchQuery = "";
    },

    searchMovie: (state, action) => {
      // console.log("searchMovie feature: ", action.payload);
      state.searchQuery = action.payload;
    },
  },
});

export const { selectGenreOrCategory, searchMovie } = genreOrCategory.actions;

export default genreOrCategory.reducer;

/*

    This is going to be exported to the redux store to be used throughout the application
    We have to reducers here 
        selectGenreOrCategory = to show genres or movies
        searchMovie = to search for movies

*/
