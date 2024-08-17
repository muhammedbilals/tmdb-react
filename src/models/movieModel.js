export const Movie = {
    id: null,
    title: '',
    overview: '',
    posterPath: '',
    releaseDate: '',
  };
  
  export const transformMovieData = (data) => ({
    id: data.id,
    title: data.title,
    overview: data.overview,
    posterPath: data.poster_path,
    releaseDate: data.release_date,
  });