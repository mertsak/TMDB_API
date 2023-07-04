import { createSlice } from "@reduxjs/toolkit";

import {
  fetchTrendMovies,
  fetchSearchMovie,
  fetchSingleMovie,
} from "./services/service";

export const tmdbSlice = createSlice({
  name: "tmdb",
  initialState: {
    status: "idle",
    trendMovies: [],
    searchMovie: [],
    searchData: "",
    singleMovie: [],
  },
  reducers: {
    setSearchData: (state, action) => {
      state.searchData = action.payload;
    },
  },

  extraReducers: (builder) => {
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
  },
});

// Action creators are generated for each case reducer function
export const { setSearchData } = tmdbSlice.actions;

export default tmdbSlice.reducer;
