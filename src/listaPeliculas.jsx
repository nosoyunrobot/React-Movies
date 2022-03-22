import peliculas from "./peliculas.json";
import { PeliculasCard } from "./peliculasCard";
import styles from './peliculasGrid.module.css'



export function ListaPeliculas() {
  console.log(peliculas);
  return (
    <>
      <ul className={styles.movieGrid}>
        {peliculas.map((item) => (
          <PeliculasCard key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
}
