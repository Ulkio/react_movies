import React, { useState, useEffect } from "react";
import { getTrendingMovies } from "../../api/axios";
import Card from "../Card/Card";
import styles from "./CardsList.module.css";

function CardsList() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axiosGetTrendingMovies();
  }, []);

  const axiosGetTrendingMovies = () => {
    getTrendingMovies()
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <div className={styles.moviesList}>
      {!error ? (
        movies.map((movie) => {
          return (
            <React.Fragment key={movie.id}>
              <Card movie={movie} />
            </React.Fragment>
          );
        })
      ) : (
        <p>Erreur au chargement des données</p>
      )}
    </div>
  );
}

export default CardsList;
