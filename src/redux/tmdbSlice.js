import { createSlice } from "@reduxjs/toolkit";
import {
  fetchTrendMovies,
  fetchSearchMovie,
  fetchSingleMovie,
  fetchMovieCredits,
} from "./services/service";

export const tmdbSlice = createSlice({
  name: "tmdb",
  initialState: {
    status: "idle",
    trendMovies: [],
    searchMovie: [],
    searchData: "",
    singleMovie: [],
    movieCredits: [],
  },
  reducers: {
    setSearchData: (state, action) => {
      state.searchData = action.payload;
    },
  },

  extraReducers: (builder) => {
    // fetch Trend Movies
    builder.addCase(fetchTrendMovies.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchTrendMovies.fulfilled, (state, action) => {
      state.status = "idle";
      state.trendMovies = action.payload;
    });
    builder.addCase(fetchTrendMovies.rejected, (state) => {
      state.status = "failed";
    });

    // fetch Search Movies
    builder.addCase(fetchSearchMovie.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchSearchMovie.fulfilled, (state, action) => {
      state.status = "idle";
      state.searchMovie = action.payload;
    });
    builder.addCase(fetchSearchMovie.rejected, (state) => {
      state.status = "failed";
    });

    // fetch Single Movie
    builder.addCase(fetchSingleMovie.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchSingleMovie.fulfilled, (state, action) => {
      state.status = "idle";
      state.singleMovie = action.payload;
    });
    builder.addCase(fetchSingleMovie.rejected, (state) => {
      state.status = "failed";
    });

    // fetch Single Movie Credits
    builder.addCase(fetchMovieCredits.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchMovieCredits.fulfilled, (state, action) => {
      state.status = "idle";
      state.movieCredits = action.payload;
    });
    builder.addCase(fetchMovieCredits.rejected, (state) => {
      state.status = "failed";
    });
  },
});

// Action creators are generated for each case reducer function
export const { setSearchData } = tmdbSlice.actions;

export default tmdbSlice.reducer;
