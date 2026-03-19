import { useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import peliculas from "../detalles.json";

function Home({ agregarFavorito }) {

  const navigate = useNavigate();

  function irADetalle(id) {
    navigate(`/pelicula/${id}`);
  }

  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "16px",
        padding: "16px"
      }}
    >
      {peliculas.map((pelicula) => (
        <MovieCard
          key={pelicula.id}
          title={pelicula.titulo}
          image={pelicula.imagen}
          descripcion={pelicula.sinopsis}
          onVerDetalle={() => irADetalle(pelicula.id)}
          onAgregarFavorito={() => agregarFavorito(pelicula)}
        />
      ))}
    </main>
  );
}

export default Home;