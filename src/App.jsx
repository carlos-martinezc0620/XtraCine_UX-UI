import './App.css'
import './styles/layout.css'
import './styles/components.css'

import { useState } from 'react'
import { Routes, Route } from 'react-router-dom' // Importamos las herramientas de React Router

import Footer from "./components/Footer"
import Header from "./components/Header"

// Vistas
import Home from "./pages/Home"
import Cartelera from "./pages/Cartelera"
import Detalle from "./pages/Detalle"
import Snacks from "./pages/Snacks"
import Otros from "./pages/Otros"
import Privacidad from "./pages/Privacidad"
import Terminos from "./pages/Terminos"
import Contacto from "./pages/Contacto"

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
    <div style={{ minHeight: "100vh", display:"flex", flexDirection:"column" }}>

      {/* El Header siempre se verá en la parte superior */}
      <Header />

      {/* Contenido principal donde se inyectan las vistas dependiendo la URL */}
      <div style={{ flex: 1 }}>
        
        {/* Usamos Routes para indicar que aquí irán nuestras rutas */}
        <Routes>
          {/* Configuramos cada "Route" asignando una ruta (path) y el componente a mostrar (element) */}
          <Route path="/" element={<Home agregarFavorito={agregarFavorito} />} />
          
          <Route path="/cartelera" element={<Cartelera agregarFavorito={agregarFavorito} favoritas={favoritas} />} />
          
          {/* Ruta dinámica: el ":id" indica que esta parte de la url cambiará según la película */}
          <Route path="/pelicula/:id" element={<Detalle />} />
          
          <Route path="/snacks" element={<Snacks />} />
          <Route path="/otros" element={<Otros />} />

          {/* Nuevas vistas del footer */}
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/terminos" element={<Terminos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>

      </div>

      {/* El Footer SIEMPRE visible en la parte inferior */}
      <Footer />

    </div>
  )
}

export default App