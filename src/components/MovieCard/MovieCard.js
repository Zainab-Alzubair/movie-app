import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.scss';
import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';

const MovieCard = (props) => {
  const { data } = props;

  return (
    <div className="card-item">

      <div className="card-inner">
        <div className="card-top">
          <img src={data.Poster} alt={data.Title} />
        </div>
        <div className="card-bottom">
          <div className="card-info">
            <Link to={`/movie/${data.imdbID}`}>
              {' '}
              <BsArrowRightCircle style={{ color: 'white', fontSize: '25px' }} />
            </Link>
            <h4>{data.Title}</h4>
            <p>
              Year:
              {data.Year}
            </p>
          </div>
        </div>
      </div>

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
