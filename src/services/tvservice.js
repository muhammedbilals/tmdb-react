import tmdbApi from '../api/api';
import { transformTvData } from '../models/tvseriesModel';

const getPopularTv = async () => {
    try {
      const response = await tmdbApi.get('/tv/popular');
      return response.data.results.map(transformTvData);
    } catch (error) {
      console.log(error)
      return []
    }
  }
  const getAiringTodayTv = async () => {
    try {
      const response = await tmdbApi.get('/tv/airing_today');
      return response.data.results.map(transformTvData);
    } catch (error) {
      console.log(error)
      return []
    }
  }
  const getOntheAirTv = async () => {
    try {
      const response = await tmdbApi.get('/tv/on_the_air');
      return response.data.results.map(transformTvData);
    } catch (error) {
      console.log(error)
      return []
    }
  }
  const getTopRatedTv = async () => {
    try {
      const response = await tmdbApi.get('/tv/top_rated');
      return response.data.results.map(transformTvData);
    } catch (error) {
      console.log(error)
      return []
    }
  }

  // eslint-disable-next-line import/no-anonymous-default-export
  export default {
    getPopularTv,
    getAiringTodayTv,
    getOntheAirTv,
    getTopRatedTv
  }