import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
/* eslint-disable no-param-reassign */
import APIKey from '../../common/apis/MovieApiKey';
import movieApi from '../../common/apis/MovieApi';

export const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async (term) => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=movie`,
    );
    return response.data;
  },
);

export const fetchMovieDetail = createAsyncThunk('movies/fetchMovieDetail',
  async (id) => {
    const response = await movieApi
      .get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
  });

export const initialState = {
  movies: {},
  selectedMovie: {},
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    removeSelectedMovie: (state) => {
      state.selectedMovie = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {

    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => ({ ...state, movies: payload }),
    [fetchAsyncMovies.rejected]: () => {

    },
    [fetchMovieDetail.fulfilled]: (state, { payload }) => ({ ...state, selectedMovie: payload }),
  },
});

export const { removeSelectedMovie } = moviesSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getSelectedMovie = (state) => state.movies.selectedMovie;
export default moviesSlice.reducer;
