import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { ListaPeliculas } from "./listaPeliculas";
import styles from "./app.module.css";
import { Navbar } from "reactstrap";
const App = () => {
  return (
    <>
      <header>
        <Navbar className="bg-dark navbar navbar-expand-lg navbar-dark ">
          <a className="navbar-brand " href="/">
            DevPeliculas
          </a>
        </Navbar>
        <h2 className={styles.title}>Peliculas</h2>
      </header>
      <main>
        <ListaPeliculas />
      </main>
    </>
  );
};

export default App;
