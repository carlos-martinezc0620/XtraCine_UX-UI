import MovieCard from "../components/MovieCard"

function Cartelera({ cambiarVista }) {
  return (
    <main className="movie-grid">
      <MovieCard
        title="Shingeki No Kyojin: The Final Season"
        image="https://m.media-amazon.com/images/I/81T-9Ra0YKL._AC_UF894,1000_QL80_.jpg"
        onVerDetalle={() => cambiarVista("detalle")}
      />

      <MovieCard
        title="Bob Esponja: Al Rescate"
        image="https://m.media-amazon.com/images/M/MV5BNjAyZDQwOTktZjc0Yi00MzNjLWI1NmUtODI2ZjJmYWRjOTA3XkEyXkFqcGc@._V1_.jpg"
        onVerDetalle={() => cambiarVista("detalle")}
      />
    </main>
  )
}

// Exportamos la vista
export default Cartelera
