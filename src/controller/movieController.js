import movieService from "../services/movieservice";


export const fetchPopularMovies = async () => {
  return await movieService.getPopularMovies();
};

export const fetctNowPlayingMovies = async () => {
  return await movieService.getPopularMovies();
};

export const fetctTopRatedMovies = async () => {
  return await movieService.getPopularMovies();
};
export const fetctUpcomingMovies = async () => {
  return await movieService.getPopularMovies();
};

export const fetchMovieDetails = async (id) => {
  return await movieService.getMovieById(id);
};

export const fetchTvSeries = async () => {
  return await movieService.getTvSeries();
}