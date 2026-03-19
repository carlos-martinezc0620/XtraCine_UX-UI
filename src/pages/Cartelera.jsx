import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";

// Exportamos esta lista para poder usarla en Detalle.js y buscar la película ahí
export const peliculasCartelera = [
  {
    id: 101,
    titulo: "Shingeki No Kyojin: The Final Season",
    imagen: "https://m.media-amazon.com/images/M/MV5BMzVhOGMzYzQtNzgyMi00NjZmLWEzYjUtMjQ2NDE3Njk4MmRkXkEyXkFqcGc@._V1_.jpg",
    descripcion: "La batalla final por la humanidad ha comenzado."
  },
  {
    id: 102,
    titulo: "Bob Esponja: Al rescate",
    imagen: "https://m.media-amazon.com/images/M/MV5BNjAyZDQwOTktZjc0Yi00MzNjLWI1NmUtODI2ZjJmYWRjOTA3XkEyXkFqcGc@._V1_.jpg",
    descripcion: "Bob Esponja y Patricio viven una nueva aventura submarina."
  }
];

function Cartelera({ agregarFavorito, favoritas }) {

  const navigate = useNavigate();

  function irADetalle(id) {
    navigate(`/pelicula/${id}`);
  }

  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [mensajeCompra, setMensajeCompra] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!nombre || !cantidad) {
      setMensajeCompra("Completa todos los campos");
      return;
    }

    setMensajeCompra(
      `Gracias ${nombre}, compraste ${cantidad} boleto(s) 🎟️`
    );

    setNombre("");
    setCantidad("");
  }

  return (
    <>
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
        {peliculasCartelera.map((pelicula) => (
          <MovieCard
            key={pelicula.id}
            title={pelicula.titulo}
            image={pelicula.imagen}
            descripcion={pelicula.descripcion}
            onVerDetalle={() => irADetalle(pelicula.id)}
            onAgregarFavorito={() => agregarFavorito(pelicula)}
          />
        ))}
      </main>

      <div style={{ textAlign: "center" }}>
        <h2>Películas Favoritas</h2>
        <ul>
          {favoritas.map((fav) => (
            <li key={fav.id}>{fav.titulo}</li>
          ))}
        </ul>
      </div>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h2>Compra de Boletos</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            style={{ marginRight: "10px" }}
          />

          <input
            type="number"
            placeholder="Cantidad de boletos"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
            style={{ marginRight: "10px" }}
          />

          <button type="submit">Comprar</button>
        </form>

        {mensajeCompra && (
          <p style={{ marginTop: "20px", fontWeight: "bold" }}>
            {mensajeCompra}
          </p>
        )}
      </div>
    </>
  );
}

export default Cartelera;