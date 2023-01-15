import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../redux/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing.scss';

const MovieListing = () => {
  const movies = useSelector(getAllMovies);

  let renderMovies = '';

  renderMovies = movies.Response === 'True' ? (
    movies.Search.map((movie) => (
      <MovieCard key={movie.imdbID} data={movie} />
    ))
  ) : (
    <div className="movies-error">
      <h3>{movies.Error}</h3>
    </div>
  );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <div className="hero">
          <h2>{` (${renderMovies.length}) Movies`}</h2>
        </div>
        <div className="movie-container">{renderMovies}</div>
      </div>

    </div>
  );
};

export default MovieListing;
