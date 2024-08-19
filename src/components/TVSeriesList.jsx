import React, { useEffect, useState } from 'react';
import { fetchPopularTvSeries } from '../controller/tvController';
import MovieCard from './movieCard';

const TVSeriesList = () => {
  const [Tvseries, setTvseries] = useState([]);

  useEffect(() => {
    async function loadTvseries() {
      const TvData = await fetchPopularTvSeries();
      setTvseries(TvData);
    }
    loadTvseries();
  }, []);

  
  return (
    <div className=" p-4 origin-center ">
      <h1 className="text-3xl font-bold mb-4">Popular Movies</h1>
      <div className="overflow-x-auto flex space-x-4 pb-4 scrollbar-hide ">
        {Tvseries.map((movie) => (
          <MovieCard key={movie.id} movie={movie}/>
        ))}
      </div>
    </div>
  );
};

export default TVSeriesList;