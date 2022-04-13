import React, { useState, useEffect } from "react";
import { getMoviesSearch, getMovieByName } from "../../api/axios";
import styles from "./SearchList.module.css";
import Card from "../Card/Card";

function SearchList(props) {
  const [movies, setMovies] = useState([]);
  const [movieClicked, setMovieClicked] = useState(null);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [error, setError] = useState("");

  // lorsqu'on recherche ou qu'on change de page, affichage de la liste
  useEffect(() => {
    axiosgetMoviesSearch();
  }, [props.name, page]);

  // quand on relance une recherche il faut retourner à la page 1
  useEffect(() => {
    setPage(1);
  }, [maxPage]);

  const axiosgetMoviesSearch = () => {
    getMoviesSearch(props.name, page)
      .then((res) => {
        setMovies(res.data.results);
        setMaxPage(res.data.total_pages);
        setError("");
      })
      .catch((err) => {
        setError(err);
      });
  };

  const axiosGetMovieByName = (title) => {
    getMovieByName(title)
      .then((res) => {
        setMovieClicked(res.data.results[0]);
        setError("");
      })
      .catch((err) => {
        setError(err);
      });
  };

  const onClickArrow = (arrow) => {
    switch (arrow) {
      case "previous":
        if (page > 1) {
          setPage(page - 1);
        }
        break;
      case "next":
        if (page < maxPage) {
          setPage(page + 1);
        }
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="pages-container">
        <div className={styles.pages}>
          <a onClick={() => onClickArrow("previous")}>◄</a>
          <a onClick={() => onClickArrow("next")}>►</a>
        </div>
      </div>
      <div className={styles.moviesSelector}>
        <div className={styles.moviesSearched}>
          <ul>
            {!error ? (
              movies.map((movie) => {
                return (
                  <React.Fragment key={movie.id}>
                    <li onClick={() => axiosGetMovieByName(movie.title)}>
                      {movie.title}
                    </li>
                  </React.Fragment>
                );
              })
            ) : (
              <p>Erreur au chargement des données</p>
            )}
          </ul>
        </div>
        <div className={styles.movieDetails}>
          {movieClicked && <Card movie={movieClicked} />}
        </div>
      </div>
    </>
  );
}

export default SearchList;
