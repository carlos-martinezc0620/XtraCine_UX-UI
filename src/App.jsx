import './App.css'
import './styles/layout.css'
import './styles/components.css'

import { useState } from 'react'
import Footer from "./components/Footer"
import Header from "./components/Header"
import AppRouter from "./router/AppRouter"

function App() {
  // Mantenemos el estado global de favoritas porque se usa en varias páginas
  const [favoritas, setFavoritas] = useState([])

  // Función para agregar favoritos
  function agregarFavorito(pelicula) {
    if (!favoritas.find((fav) => fav.id === pelicula.id)) {
      setFavoritas([...favoritas, pelicula])
    }
  }

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>

      {/* El Header siempre se verá en la parte superior */}
      <Header />

      {/* Contenido principal donde se inyectan las vistas dependiendo la URL */}
      <div style={{ flex: 1 }}>

        <AppRouter favoritas={favoritas} agregarFavorito={agregarFavorito} />

      </div>

      {/* El Footer SIEMPRE visible en la parte inferior */}
      <Footer />

    </div>
  )
}

export default App


