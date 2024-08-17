import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../controller/movieController';
import './MovieList.css';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      const movieData = await fetchMovies();
      setMovies(movieData);
    }
    loadMovies();
  }, []);

  return (
    <div className="movie-list">
      <h1>Popular Movies</h1>
      <ul className="movie-grid">
        {movies.map((movie) => (
          <li key={movie.id} className="movie-item">
            <img 
              src={`https://image.tmdb.org/t/p/w200${movie.posterPath}`} 
              alt={movie.title} 
              className="movie-poster"
            />
            <h2 className="movie-title">{movie.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;