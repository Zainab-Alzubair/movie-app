import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.scss';
import PropTypes from 'prop-types';

const MovieCard = (props) => {
  const { data } = props;

  return (
    <div className="card-item">
      <Link to={`/movie/${data.imdbID}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={data.Poster} alt={data.Title} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{data.Title}</h4>
              <p>{data.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

MovieCard.propTypes = {
  data: PropTypes.shape({
    imdbID: PropTypes.number,
    Poster: PropTypes.string,
    Title: PropTypes.string,
    Year: PropTypes.number,
  }).isRequired,
};
export default MovieCard;
