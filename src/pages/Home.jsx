// Importamos la tarjeta reutilizable
import MovieCard from "../components/MovieCard"

function Home({ cambiarVista }) {
  return (
    <main
      style={{
        maxWidth: "1200px", // Controla el ancho en pantallas grandes
        margin: "0 auto",   // Centra el contenido
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "16px",
        padding: "16px"
      }}
    >
      <MovieCard
        title="Avatar: Fuego y Cenizas"
        image="https://m.media-amazon.com/images/M/MV5BZDYxY2I1OGMtN2Y4MS00ZmU1LTgyNDAtODA0MzAyYjI0N2Y2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
        onVerDetalle={() => cambiarVista("detalle")}
      />

      <MovieCard
        title="Ayuda"
        image="https://m.media-amazon.com/images/M/MV5BOTgxOWY5NTMtYjdiNi00NTIyLTkwMTQtMWNjM2IzYTU0ODgyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
        onVerDetalle={() => cambiarVista("detalle")}
      />

      <MovieCard
        title="Arco"
        image="https://poluxweb.com/Polux3/images/data/cine/resenas/2026/febrero/Arco/Arco-01.jpg"
        onVerDetalle={() => cambiarVista("detalle")}
      />
    </main>
  )
}

// Exportamos la vista
export default Home
