// Define the TvModel class
export class TvModel {
  constructor({
    adult,
    backdropPath,
    genreIds,
    id,
    originCountry,
    originalLanguage,
    originalName,
    overview,
    popularity,
    posterPath,
    firstAirDate,
    name,
    voteAverage,
    voteCount,
  }) {
    this.adult = adult;
    this.backdropPath = backdropPath;
    this.genreIds = genreIds;
    this.id = id;
    this.originCountry = originCountry;
    this.originalLanguage = originalLanguage;
    this.originalName = originalName;
    this.overview = overview;
    this.popularity = popularity;
    this.posterPath = posterPath;
    this.firstAirDate = firstAirDate;
    this.name = name;
    this.voteAverage = voteAverage;
    this.voteCount = voteCount;
  }
}

// Transform function to convert API data to TvModel format
export const transformTvData = (data) => {
  return new TvModel({
    adult: data.adult,
    backdropPath: data.backdrop_path,
    genreIds: data.genre_ids,
    id: data.id,
    originCountry: data.origin_country,
    originalLanguage: data.original_language,
    originalName: data.original_name,
    overview: data.overview,
    popularity: data.popularity,
    posterPath: data.poster_path,
    firstAirDate: data.first_air_date,
    name: data.name,
    voteAverage: data.vote_average,
    voteCount: data.vote_count,
  });
};