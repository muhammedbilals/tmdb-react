import tmdbApi from '../api/api';
import { transformMovieData } from '../models/movieModel';

const getMovies = async () => {
  try {
    
    console.log('API Key:', process.env.REACT_APP_TMDB_API_KEY);

    const response = await tmdbApi.get('/movie/popular');
    return response.data.results.map(transformMovieData);
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};

const getMovieById = async (id) => {
  try {
    const response = await tmdbApi.get(`/movie/${id}`);
    return transformMovieData(response.data);
  } catch (error) {
    console.error('Error fetching movie:', error);
    return null;
  }
};

export default {
  getMovies,
  getMovieById,
};
   