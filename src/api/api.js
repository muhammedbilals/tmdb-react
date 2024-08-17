import axios from 'axios';

const apiKey = 'apikey';

const tmdbApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: apiKey,
  },
});

export default tmdbApi;
