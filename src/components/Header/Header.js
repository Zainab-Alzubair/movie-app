import React, { useState } from 'react';
/* eslint-disable consistent-return */
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiMenu, FiMic } from 'react-icons/fi';
import { fetchAsyncMovies } from '../../redux/movies/movieSlice';
import user from '../../images/user-image.png';
import './Header.scss';

const Header = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (term === '') return alert('Please enter search term!');
    dispatch(fetchAsyncMovies(term));
    setTerm('');
  };
  return (
    <div className="header">
      <FiMenu style={{ color: 'white', fontSize: '30px' }} />
      <div className="logo">
        <Link to="/">Movie App</Link>
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="Search Movies or Shows"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">
            <i className="fa fa-search" />
          </button>
        </form>
      </div>
      <FiMic style={{ color: 'white', fontSize: '25px' }} />
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
