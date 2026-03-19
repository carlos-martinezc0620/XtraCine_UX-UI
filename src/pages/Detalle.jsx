import { useState, useEffect } from "react"
import { useParams } from "react-router-dom" // Importamos useParams para leer la url
import peliculasHome from "../detalles.json"
import { peliculasCartelera } from "./Cartelera"

// Vista de detalle de una película (Ruta dinámica)
function Detalle() {
  // Extraemos el ID directamente de la URL (ej. /pelicula/1)
  const { id } = useParams()
  
  const [pelicula, setPelicula] = useState(null)
  
  // Estados para el formulario
  const [nombre, setNombre] = useState("")
  const [cantidadBoletos, setCantidadBoletos] = useState(1)
  const [mensaje, setMensaje] = useState("")

  // Cuando el componente carga o el "id" de la URL cambia, buscamos la película
  useEffect(() => {
    // Unimos los dos arreglos de películas (las del inicio y la cartelera completa)
    const todasLasPeliculas = [...peliculasHome, ...peliculasCartelera]
    
    // Buscamos la que coincida con nuestro ID de la URL
    // Convertimos el id a número con parseInt para comparar correctamente
    const encontrada = todasLasPeliculas.find(p => p.id === parseInt(id))
    
    // Adaptamos el campo de descripción si viene de Home (sinopsis) o Cartelera (descripcion)
    if (encontrada && encontrada.sinopsis && !encontrada.descripcion) {
      encontrada.descripcion = encontrada.sinopsis
    }

    setPelicula(encontrada)
  }, [id])

  // Si no hay película encontrada o está cargando
  if (!pelicula) {
    return (
      <main style={{ padding: "24px", textAlign: "center" }}>
        <h2>Cargando o película no encontrada...</h2>
      </main>
    )
  }

  // Evento submit
  function manejarCompra(e) {
    e.preventDefault()

    setMensaje(
      `Gracias ${nombre}, compraste ${cantidadBoletos} boleto(s) para ${pelicula.titulo}`
    )

    // Limpiar formulario
    setNombre("")
    setCantidadBoletos(1)
  }

  return (
    <main
      style={{
        padding: "24px",
        maxWidth: "800px",
        margin: "0 auto"
      }}
    >
      <h2>{pelicula.titulo}</h2>

      <img
        src={pelicula.imagen}
        alt={pelicula.titulo}
        style={{
          width: "100%",
          borderRadius: "8px",
          marginBottom: "16px"
        }}
      />

      <p>{pelicula.descripcion}</p>

      <hr style={{ margin: "24px 0" }} />

      <h3>Comprar boletos</h3>

      <form onSubmit={manejarCompra}>
        <div style={{ marginBottom: "12px" }}>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            style={{
              display: "block",
              width: "100%",
              padding: "8px",
              marginTop: "4px"
            }}
            required
          />
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label>Cantidad de boletos:</label>
          <input
            type="number"
            min="1"
            value={cantidadBoletos}
            onChange={(e) => setCantidadBoletos(e.target.value)}
            style={{
              display: "block",
              width: "100%",
              padding: "8px",
              marginTop: "4px"
            }}
            required
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 16px",
            backgroundColor: "#ff9800",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Comprar
        </button>
      </form>

      {mensaje && (
        <p style={{ marginTop: "16px", color: "green" }}>
          {mensaje}
        </p>
      )}
    </main>
  )
}

export default Detalle