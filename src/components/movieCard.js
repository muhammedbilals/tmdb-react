import React from 'react';
import { useNavigate } from 'react-router-dom'

const MovieCard = ({ movie }) => {
  const navigate =useNavigate()

  const handleNavigation =()=>{
    navigate(`/movie/${movie.id}`)
  }
  return (
    <div
      key={movie.id}
      className="flex-shrink-0 w-48 bg-green-50 rounded-lg overflow-hidden group relative"
      onClick={handleNavigation}
    >
      <div className="relative">
        <h2 className="absolute bottom-2 left-2 text-lg text-white font-medium z-20">
          {movie.title}
        </h2>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
          alt={movie.title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105 "
        />
        <div className="absolute top-2 left-2 bg-gray-900 text-white text-sm font-semibold px-2 py-1 rounded-lg z-10 opacity-70">
          {movie.voteAverage.toFixed(1)} ⭐
        </div>
      </div>
    </div>
  );
};

export default MovieCard;