import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../controller/movieController';
import MovieCard from './movieCard';
// import second from '../index.css'

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
    <div className="p-4 origin-center">
      <h1 className="text-3xl font-bold mb-4">Popular Movies</h1>
      <div className="overflow-x-auto flex space-x-4 pb-4 scrollbar-hide ">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;