import React, { useState, useEffect } from "react";
import styles from "./Search.module.css";
import SearchList from "../SearchList/SearchList";

function Search() {
  const [movieName, setMovieName] = useState("");
  const [input, setInput] = useState("");
  const [isRender, setIsRender] = useState(false);

  const onChangeInput = (e) => {
    if (e.target.value.length) {
      setInput(e.target.value);
    }
  };

  const onClickSearch = () => {
    setMovieName(input);
    setIsRender(true);
  };

  return (
    <>
      <div className={styles.moviesSearch}>
        <form>
          <label htmlFor="name">Nom :</label>
          <input type="text" name="name" onChange={(e) => onChangeInput(e)} />
          <input
            name="button"
            type="button"
            value="Rechercher"
            onClick={() => onClickSearch()}
          />
        </form>
      </div>

      {isRender && <SearchList name={movieName} page={1} />}
    </>
  );
}

export default Search;
