import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tmdbApiKey = "83e503c339b79b35e59eb40deea54837";

export const tmdbApi = createApi({
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
          return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`;
        }

        // popular, top_rating, upcoming -> string
        // Get Movies by Category
        if (
          genreIdOrCategoryName &&
          typeof genreIdOrCategoryName === "string"
        ) {
          return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
        }

        // Get Movies by ID (Genre)
        if (
          genreIdOrCategoryName &&
          typeof genreIdOrCategoryName === "number"
        ) {
          return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
        }

        // Get Popular Movies
        return `movie/popular?page=${page}&api_key=${tmdbApiKey}`;
      },
    }),

    // Get a Movie
    getMovie: builder.query({
      query: (id) =>
        `/movie/${id}?api_key=${tmdbApiKey}&append_to_response=videos,credits`,
    }),

    // Get user specific movie lists
    getRecommendations: builder.query({
      query: ({ movie_id, list }) =>
        `/movie/${movie_id}/${list}?api_key=${tmdbApiKey}`,
    }),

    // Get Actor's Detail
    getActorDetail: builder.query({
      query: (id) => `person/${id}?api_key=${tmdbApiKey}`,
    }),

    // Get Actor's Movies
    getMoviesByActorId: builder.query({
      query: (id, page) =>
        `/discover/movie?with_cast=${id}&page=${page}&api_key=${tmdbApiKey}`,
    }),

    // Get favorite/watchlist movies
    getList: builder.query({
      query: ({ listName, accountId, sessionId, page }) =>
        `/account/${accountId}/${listName}?api_key=${tmdbApiKey}&session_id=${sessionId}&page=${page}`,
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetGenresQuery,
  useGetMovieQuery,
  useGetRecommendationsQuery,
  useGetActorDetailQuery,
  useGetMoviesByActorIdQuery,
  useGetListQuery,
} = tmdbApi;
