import axios from 'axios';

const apiKey = 'c2e2608024beabac09aa26c5fb840229';

const tmdbApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: apiKey,
  },
});

export default tmdbApi;
