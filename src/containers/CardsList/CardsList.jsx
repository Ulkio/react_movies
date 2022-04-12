import React, { useState, useEffect } from "react";
import { getTrendingMovies } from "../../api/axios";
import Card from "../Card/Card";
import styles from "./CardsList.module.css";

function CardsList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axiosGetTrendingMovies();
  }, []);

  const axiosGetTrendingMovies = () => {
    getTrendingMovies().then((res) => {
      if (res.status === 200) {
        setMovies(res.data.results);
      } else {
        console.log("erreur", res);
      }
    });
  };

  return (
    <div className={styles.moviesList}>
      {movies.map((movie) => {
        return (
          <React.Fragment key={movie.id}>
            <Card movie={movie} />
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default CardsList;
