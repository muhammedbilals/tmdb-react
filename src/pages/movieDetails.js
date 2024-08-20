import React, { useEffect, useState } from 'react';
import { fetchMovieDetails, fetchPopularMovies } from '../controller/movieController';
import { useParams } from 'react-router-dom';


const MovieDetailsPage = () =>{
    const { id } = useParams(); 
    const [movies, setMovies] = useState([]);
    

    useEffect(() => {
      async function loadMovies() {
        const movieData = await fetchMovieDetails(id);
        setMovies(movieData);
      }
      loadMovies();
    }, [id]);

    if (!movies) {
        return <div>Loading...</div>; // Show a loading state or message
      }

      return (
        <div>
          <img
            className='h-full w-full flex-auto overflow-x-auto blur-none'
            src={`https://image.tmdb.org/t/p/original${movies.backdropPath}`}
            alt={movies.title}

          />
          <img
            className='h-72  object-cover flex-auto overflow-x-auto absolute top-32 left-20'
            src={`https://image.tmdb.org/t/p/original${movies.posterPath}`}
            alt={movies.title}

          />
             <h1 className='absolute top-44 left-72 text-5xl text-white font-medium z-20'>{movies.title}</h1>
          <p className='absolute top-60 right-10 left-72 text-sm text-white font-normal z-20'>{movies.overview}</p>
          {/* Render other movie details here */}
        </div>
      );
}

export default MovieDetailsPage;
