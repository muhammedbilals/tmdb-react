export const TVSeries = {
    id: null,
    name: '',
    overview: '',
    posterPath: '',
    firstAirDate: '',
    genreIds: [],
    originalLanguage: '',
    popularity: 0,
    voteAverage: 0,
    voteCount: 0,
  };
  
  export const transformTvData = (data) => ({
    id: data.id,
    name: data.name,
    overview: data.overview,
    posterPath: data.poster_path,
    firstAirDate: data.first_air_date,
    genreIds: data.genre_ids,
    originalLanguage: data.original_language,
    popularity: data.popularity,
    voteAverage: data.vote_average,
    voteCount: data.vote_count,
  });
  