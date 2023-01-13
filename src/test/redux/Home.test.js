import { configureStore } from '@reduxjs/toolkit';
import moviesReducer, { fetchAsyncMovies } from '../../redux/movies/movieSlice';

const initialState = {
  movies: {},
  selectedMovie: {},
};

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

describe('moviesReducer', () => {
  it('should return initial state', () => {
    expect(store.getState().movies).toEqual(initialState);
  });

  it('should return movieArray', () => {
    const movieArray = {
      movies: {
        imdbID: 'tt0433400',
        title: 'Just Friends',
        year: '2005',
        type: 'movie',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjA0Mzg2NjUzMl5BMl5BanBnXkFtZTcwNDg2ODUzMQ@@._V1_SX300.jpg',
      },

    };

    store.dispatch(fetchAsyncMovies.fulfilled(movieArray));
    expect(store.getState().movies.movies).toEqual(movieArray);
  });
});
