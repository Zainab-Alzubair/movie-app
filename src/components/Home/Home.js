import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import MovieListing from '../MovieListing/MovieListing';

import { fetchAsyncMovies } from '../../redux/movies/movieSlice';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies());
  }, [dispatch]);
  return (
    <div>
      <div className="banner-img" />
      <MovieListing />
    </div>
  );
};

export default Home;
