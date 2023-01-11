import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import MovieListing from '../MovieListing/MovieListing';
import APIKey from '../../common/apis/MovieApiKey';
import movieApi from '../../common/apis/MovieApi';
import { addMovies } from '../../redux/movies/movieSlice';

const Home = () => {
  const movieText = 'Harry';
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log(err);
        });
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, []);
  return (
    <div>
      <div className="banner-img" />
      <MovieListing />
    </div>
  );
};

export default Home;
