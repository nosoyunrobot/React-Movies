import styles from './peliculasCard.module.css'

export function PeliculasCard({ item }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + item.poster_path;
  return (
    <>
      <li className={styles.movieCard}>
        <img width={230} height={345} src={imageUrl} alt="p eliculas" className={styles.moviewImage} />
        <div>{item.title}</div>
      </li>
    </>
  );
}
