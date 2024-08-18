import React, { useEffect, useState } from 'react';
import './TVSeriesList.css';
import { fetchTvSeries } from '../controller/movieController';

const TVSeriesList = () => {
  const [Tvseries, setTvseries] = useState([]);

  useEffect(() => {
    async function loadTvseries() {
      const TvData = await fetchTvSeries();
      setTvseries(TvData);
    }
    loadTvseries();
  }, []);

  

  return (
    <div className="movie-list">
      <h1>Popular Tvseries</h1>
      <div className="movie-grid">
        {Tvseries.map((movie) => (
          <li key={movie.id} className="movie-item">
            <img 
              src={`https://image.tmdb.org/t/p/w200${movie.posterPath}`} 
              alt={movie.title} 
              className="movie-poster"
            />
            <h2 className="movie-title">{movie.title}</h2>
          </li>
        ))}
      </div>
    </div>
  );
};

export default TVSeriesList;