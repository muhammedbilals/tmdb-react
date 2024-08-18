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
      <>
      <img className='' src='https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg' ></img>
      </>
    );
  };


export default Slider