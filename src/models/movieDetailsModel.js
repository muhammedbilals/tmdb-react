export class MovieDetails {
    constructor({
      adult,
      backdropPath,
      belongsToCollection,
      budget,
      genres,
      homepage,
      id,
      imdbId,
      originalLanguage,
      originalTitle,
      overview,
      popularity,
      posterPath,
      productionCompanies,
      productionCountries,
      releaseDate,
      revenue,
      runtime,
      spokenLanguages,
      status,
      tagline,
      title,
      video,
      voteAverage,
      voteCount,
    }) {
      this.adult = adult;
      this.backdropPath = backdropPath;
      this.belongsToCollection = belongsToCollection;
      this.budget = budget;
      this.genres = genres;
      this.homepage = homepage;
      this.id = id;
      this.imdbId = imdbId;
      this.originalLanguage = originalLanguage;
      this.originalTitle = originalTitle;
      this.overview = overview;
      this.popularity = popularity;
      this.posterPath = posterPath;
      this.productionCompanies = productionCompanies;
      this.productionCountries = productionCountries;
      this.releaseDate = releaseDate;
      this.revenue = revenue;
      this.runtime = runtime;
      this.spokenLanguages = spokenLanguages;
      this.status = status;
      this.tagline = tagline;
      this.title = title;
      this.video = video;
      this.voteAverage = voteAverage;
      this.voteCount = voteCount;
    }
  }
  
  // Transform function to convert API data to MovieDetails format
  export const transformMovieDetailsData = (data) => {
    return new MovieDetails({
      adult: data.adult,
      backdropPath: data.backdrop_path,
      belongsToCollection: data.belongs_to_collection,
      budget: data.budget,
      genres: data.genres.map((genre) => genre.name),
      homepage: data.homepage,
      id: data.id,
      imdbId: data.imdb_id,
      originalLanguage: data.original_language,
      originalTitle: data.original_title,
      overview: data.overview,
      popularity: data.popularity,
      posterPath: data.poster_path,
      productionCompanies: data.production_companies.map((company) => company.name),
      productionCountries: data.production_countries.map((country) => country.name),
      releaseDate: data.release_date,
      revenue: data.revenue,
      runtime: data.runtime,
      spokenLanguages: data.spoken_languages.map((language) => language.english_name),
      status: data.status,
      tagline: data.tagline,
      title: data.title,
      video: data.video,
      voteAverage: data.vote_average,
      voteCount: data.vote_count,
    });
  };