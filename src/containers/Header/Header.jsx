import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <header>
        <h1>Je sais pas quoi regarder</h1>
        <hr />
      </header>
      <aside>
        <div className={styles.toolbar}>
          <Link to="/trending">Films de la semaine</Link>
          <Link to="/search">Rechercher un film</Link>
        </div>
      </aside>
    </>
  );
}

export default Header;
