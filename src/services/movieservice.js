import tmdbApi from '../api/api';
import { transformMovieData } from '../models/movieModel';
import { transformTvData } from '../models/tvseriesModel';

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

const getTvSeries = async () => {
  try {
    const response = await tmdbApi.get('/tv/popular');
    return response.data.results.map(transformTvData);
  } catch (error) {
    console.log(error)
    return []
  }
}

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
  getTvSeries,
};
   