import movieService from "../services/movieservice";


export const fetchMovies = async () => {
  return await movieService.getMovies();
};

export const fetchMovieDetails = async (id) => {
  return await movieService.getMovieById(id);
};

export const fetchTvSeries = async () => {
  return await movieService.getTvSeries();
}