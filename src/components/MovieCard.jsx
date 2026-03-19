import { useState } from "react";

function MovieCard({ title, image, descripcion, onVerDetalle, onAgregarFavorito }) {
  const [mostrarDescripcion, setMostrarDescripcion] = useState(false);

  return (
    <div style={{ textAlign: "center" }}>
      <h3>{title}</h3>

      <img
        src={image}
        alt={title}
        style={{ width: "200px", height: "300px", objectFit: "cover" }}
      />

      <div style={{ marginTop: "10px" }}>
        <button onClick={() => setMostrarDescripcion(!mostrarDescripcion)}>
          {mostrarDescripcion ? "Ocultar descripción" : "Ver descripción"}
        </button>

        <button onClick={onAgregarFavorito}>
          Agregar a favoritos
        </button>
      </div>

      {mostrarDescripcion && <p>{descripcion}</p>}
    </div>
  );
}

export default MovieCard;