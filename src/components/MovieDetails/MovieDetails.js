import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import {
  fetchMovieDetail,
  getSelectedMovie,
  removeSelectedMovie,
} from '../../redux/movies/movieSlice';
import './MovieDetails.scss';

const MovieDetails = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovie);
  useEffect(() => {
    dispatch(fetchMovieDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovie());
    };
  }, [dispatch, imdbID]);

  return (
    <div className="movie-section">
      <div className="wrap">
        {Object.keys(data).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <>
            <div className="section-left">
              <Link to="/">
                {' '}
                <AiOutlineArrowLeft style={{ color: 'black', fontSize: '40px' }} />
              </Link>
              <div className="movie-title">{data.Title}</div>
              <div className="movie-rating">
                <span>
                  IMDB Rating
                  {' '}
                  <i className="fa fa-star" />
                  {' '}
                  :
                  {' '}
                  {data.imdbRating}
                </span>
                <span>
                  IMDB Votes
                  {' '}
                  <i className="fa fa-thumbs-up" />
                  {' '}
                  :
                  {' '}
                  {data.imdbVotes}
                </span>
                <span>
                  Runtime
                  {' '}
                  <i className="fa fa-film" />
                  {' '}
                  :
                  {' '}
                  {data.Runtime}
                </span>
                <span>
                  Year
                  {' '}
                  <i className="fa fa-calendar" />
                  {' '}
                  :
                  {' '}
                  {data.Year}
                </span>
              </div>
              <div className="movie-plot">{data.Plot}</div>
              <div className="movie-info">
                <div>
                  <span>Director</span>
                  <span>{data.Director}</span>
                </div>
                <div>
                  <span>Stars</span>
                  <span>{data.Actors}</span>
                </div>
                <div>
                  <span>Generes</span>
                  <span>{data.Genre}</span>
                </div>
                <div>
                  <span>Languages</span>
                  <span>{data.Language}</span>
                </div>
                <div>
                  <span>Awards</span>
                  <span>{data.Awards}</span>
                </div>
              </div>
            </div>

          </>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
