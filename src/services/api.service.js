const ApiKey = "4461b8a8376645f02b1742a651053c78";
const BaseUrl = "https://api.themoviedb.org/3";

const getMovie = async id => {
  // axios
  const result = await fetch(
    `${BaseUrl}/movie/${id}?api_key=${ApiKey}&language=en-US&append_to_response=trailers`
  );
  const jsonResult = await result.json();
  return jsonResult;
};

const searchMovies = async title => {
  const result = await fetch(
    `${BaseUrl}/search/movie?api_key=${ApiKey}&language=en-US&query=${title}&page=1&include_adult=false`
  );
  const jsonResult = await result.json();

  return jsonResult;
};

const getGenres = async () => {
  const result = await fetch(`${BaseUrl}/genre/movie/list?api_key=${ApiKey}`);
  const jsonResult = await result.json();
  return jsonResult.genres;
};

const getMoviesByGenre = async genreId => {
  const result = await fetch(
    `${BaseUrl}/discover/movie?api_key=${ApiKey}&page=1&with_genres=${genreId}`
  );
  const jsonResult = await result.json();
  return jsonResult.results;
};

export default {
  getMovie,
  searchMovies,
  getGenres,
  getMoviesByGenre
};
