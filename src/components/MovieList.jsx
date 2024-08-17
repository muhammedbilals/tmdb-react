import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../controller/movieController';

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
    <div>
      <h1>Popular Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
 