import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../controller/movieController';
import second from '../index.css'

const Slider = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      async function loadMovies() {
        const movieData = await fetchMovies();
        setMovies(movieData);
      }
      loadMovies();
    }, []);
  
    return (
            movies.map((movie)=>(
                <>
                <img className='h-full w-full flex-auto overflow-x-auto' src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}></img>
                </>
            )
        )
    )
  };


export default Slider