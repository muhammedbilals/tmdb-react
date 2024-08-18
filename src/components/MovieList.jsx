import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../controller/movieController';
import './MovieList.css';
import '../index.css';



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
    <div className="">
    <h1>Popular Movies</h1>
    <div className="aspect-ratio: 16 / 9">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-item">
          <img 
            src={`https://image.tmdb.org/t/p/w200${movie.posterPath}`} 
            alt={movie.title} 
            className="aspect-ratio: 16 / 9"
          />
          <h2 className="ont-serif">{movie.title}</h2>
        </div>
      ))}
    </div>
  </div>
  );
};

export default MovieList;