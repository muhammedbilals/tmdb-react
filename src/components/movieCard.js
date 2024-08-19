import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div
      key={movie.id}
      className="flex-shrink-0 w-48 bg-green-50 rounded-lg overflow-hidden hover:scale-105 ease-out duration-300 hover:opacity-70"
    >
      <div className="relative">
        <div className="absolute top-2 left-2 bg-yellow-500 text-white text-sm font-bold px-2 py-1 rounded-lg">
          {movie.voteAverage} ⭐
        </div>
        <img
          src={`https://image.tmdb.org/t/p/w400${movie.posterPath}`}
          alt={movie.title}
          className="w-full h-64 object-cover"
        />
      </div>
      <h2 className="text-lg p-2">{movie.title}</h2>
    </div>
  );
};

export default MovieCard;