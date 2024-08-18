import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../controller/movieController';
import second from '../index.css'

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
    <div className=" p-4 origin-center ">
      <h1 className="text-3xl font-bold mb-4">Popular Movies</h1>
      <div className="overflow-x-auto flex space-x-4 pb-4 scrollbar-hide">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="container-snap flex-shrink-0 w-48 bg-green-50 rounded-lg overflow-hidden hover:scale-105 ease-out duration-300"
          >
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.posterPath}`}
              alt={movie.title}
              className="w-full h-64 object-cover"
            />
            <h2 className="text-lg p-2">{movie.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;