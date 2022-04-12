import axios from "axios";

/* */
const API_KEY = "21666c9e5876a785510d7add27c7ba4f";
export function getTrendingMovies() {
  return axios
    .get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=fr-FR&page=1`
    )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

export function getMoviesSearch(query, page) {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=fr-FR&query=${query}&page=${page}&include_adult=false`
    )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

export function getMovieByName(name) {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=fr-FR&query=${name}&include_adult=false`
    )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}
