import tvservice  from "../services/tvservice";


export const fetchAiringTodayTvSeries = async () => {
    return await tvservice.getAiringTodayTv();
  };

export const fetchOntheAirTvSeries = async () => {
    return await tvservice.getOntheAirTv();
};

export const fetchPopularTvSeries = async () => {
    return await tvservice.getPopularTv();
};

export const fetchTopRatedTvSeries = async () => {
    return await tvservice.getTopRatedTv();
};