import SearchBar from './searchBar/SearchBar';
import './nav.css';
import { Link } from 'react-router-dom';

import React from 'react';

const Nav = ({ onSearch }) => {
  return (
    <div className="nav-container">
      <Link to="/about">
        <button className="nav-button">About</button>
      </Link>

      <Link to="/home">
        <button className="nav-button">Home</button>
      </Link>

      <SearchBar className="nav-search-bar" onSearch={onSearch} />
    </div>
  );
}

export default Nav;
