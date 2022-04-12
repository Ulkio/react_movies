import styles from "./Card.module.css";

function Card(props) {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";
  return (
    <>
      <div className={styles.card}>
        {props.movie.poster_path ? (
          <img src={IMAGE_PATH + props.movie.poster_path} />
        ) : (
          "Y A PAS D'IMAGE PADBOL"
        )}

        <div className={styles.cardDetails}>
          <p>Note : {props.movie.vote_average}</p>
          <p>{props.movie.vote_count} personnes ont voté.</p>
          <p>
            Date de sortie :{" "}
            {props.movie.release_date
              ? new Date(props.movie.release_date).toLocaleDateString("fr")
              : "Inconnue"}
          </p>
          <p className={styles.description}>{props.movie.overview}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
