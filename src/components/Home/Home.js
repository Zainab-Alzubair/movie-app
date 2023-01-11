import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import MovieListing from '../MovieListing/MovieListing';

import { fetchAsyncMovies } from '../../redux/movies/movieSlice';

const Home = () => {
  const dispatch = useDispatch();
  const movieText = 'Harry';
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
  }, [dispatch]);
  return (
    <div>
      <div className="banner-img" />
      <MovieListing />
    </div>
  );
};

export default Home;
