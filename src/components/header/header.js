// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'; // Optional: Add CSS for styling

const Header = () => {
  return (
    <header className="header">
      <div className="header-title">
        <h1>TMDB Movie App</h1>
      </div>
      <nav className="header-nav">
        <ul>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/tv-series">TV Series</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;