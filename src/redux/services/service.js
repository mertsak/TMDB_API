import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// All Trend Movies
export const fetchTrendMovies = createAsyncThunk(
  "tmdb/fetchTrendMovies",
  async () => {
    const trendMovies = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTlmMThhNjJlNWU3NzliNGY3OWYyYzlmNjZkOTI3NSIsInN1YiI6IjYyMWJiYjM2NDM5YmUxMDAxYmI3MzJlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kIWFL5VjlLoXYggy8SXXKgCXpXSk8JgmDvy82HIN5vw",
        },
      }
    );
    return trendMovies.data;
  }
);

// Search Movie
export const fetchSearchMovie = createAsyncThunk(
  "tmdb/fetchSearchMovie",
  async (movie) => {
    const searchMovie = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${movie}`,
      {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTlmMThhNjJlNWU3NzliNGY3OWYyYzlmNjZkOTI3NSIsInN1YiI6IjYyMWJiYjM2NDM5YmUxMDAxYmI3MzJlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kIWFL5VjlLoXYggy8SXXKgCXpXSk8JgmDvy82HIN5vw",
        },
      }
    );
    return searchMovie.data;
  }
);

// Single Movie
export const fetchSingleMovie = createAsyncThunk(
  "tmdb/fetchSingleMovie",
  async (id) => {
    const singleMovie = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}`,
      {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTlmMThhNjJlNWU3NzliNGY3OWYyYzlmNjZkOTI3NSIsInN1YiI6IjYyMWJiYjM2NDM5YmUxMDAxYmI3MzJlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kIWFL5VjlLoXYggy8SXXKgCXpXSk8JgmDvy82HIN5vw",
        },
      }
    );
    return singleMovie.data;
  }
);

// Single Movie Credits
export const fetchMovieCredits = createAsyncThunk(
  "tmdb/fetchMovieCredits",
  async (id) => {
    const movieCredits = await axios.get(
      `
      https://api.themoviedb.org/3/movie/${id}/credits`,
      {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTlmMThhNjJlNWU3NzliNGY3OWYyYzlmNjZkOTI3NSIsInN1YiI6IjYyMWJiYjM2NDM5YmUxMDAxYmI3MzJlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kIWFL5VjlLoXYggy8SXXKgCXpXSk8JgmDvy82HIN5vw",
        },
      }
    );
    return movieCredits.data;
  }
);