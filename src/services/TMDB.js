import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Our API key
const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;

export const tmdbApi = createApi({
  // The reducer pathname
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    //* Get Genres
    getGenres: builder.query({
      query: () => `genre/movie/list?api_key=${tmdbApiKey}`,
    }),

    //* Get Movies by Type
    getMovies: builder.query({
      query: ({ genreIdOrCategoryName, page, searchQuery }) => {
        // Get Movies by Search
        if (searchQuery) {
          return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}&include_adult=false`;
        }

        // popular, top_rating, upcoming -> string
        // Get Movies by Category
        if (
          genreIdOrCategoryName &&
          typeof genreIdOrCategoryName === "string"
        ) {
          return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}&include_adult=false`;
        }

        // Get Movies by ID (Genre)
        if (
          genreIdOrCategoryName &&
          typeof genreIdOrCategoryName === "number"
        ) {
          return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}&include_adult=false`;
        }

        // Get Popular Movies
        return `movie/popular?page=${page}&api_key=${tmdbApiKey}&include_adult=false`;
      },
    }),

    // Get a Movie
    getMovie: builder.query({
      query: (id) =>
        `/movie/${id}?api_key=${tmdbApiKey}&include_adult=false&append_to_response=videos,credits`,
    }),

    // Get user specific movie lists
    getRecommendations: builder.query({
      query: ({ movie_id, list }) =>
        `/movie/${movie_id}/${list}?api_key=${tmdbApiKey}&include_adult=false`,
    }),

    // Get Actor's Detail
    getActorDetail: builder.query({
      query: (id) => `person/${id}?api_key=${tmdbApiKey}&include_adult=false`,
    }),

    // Get Actor's Movies
    getMoviesByActorId: builder.query({
      query: (id, page) =>
        `/discover/movie?with_cast=${id}&page=${page}&api_key=${tmdbApiKey}&include_adult=false`,
    }),

    // Get favorite/watchlist movies
    getList: builder.query({
      query: ({ listName, accountId, sessionId, page }) =>
        `/account/${accountId}/${listName}?api_key=${tmdbApiKey}&include_adult=false&session_id=${sessionId}&page=${page}`,
    }),
  }),
});

// These are the returned hooks that will be used to get data out of the server and thay have been created automatically by redux toolkit
export const {
  useGetMoviesQuery,
  useGetGenresQuery,
  useGetMovieQuery,
  useGetRecommendationsQuery,
  useGetActorDetailQuery,
  useGetMoviesByActorIdQuery,
  useGetListQuery,
} = tmdbApi;
