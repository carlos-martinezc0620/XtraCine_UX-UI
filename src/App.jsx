import './App.css'
// Hook de React para manejar estado
import { useState } from 'react'
// Componentes
import Header from "./components/Header"
// Vistas
import Home from "./pages/Home"
import Cartelera from "./pages/Cartelera"
import Detalle from "./pages/Detalle"
import Snacks from "./pages/Snacks"
import Otros from "./pages/Otros"

function App() {
  // Estado para controlar la vista actual
  const [vistaActual, setVistaActual] = useState("Home")

  return (
    //Contenedor raíz de la aplicación
    <div style={{ minHeight: "100vh"}}> 
      {/* Header siempre visible */}
      <Header cambiarVista={setVistaActual} />
      
      {/* Renderizado condicional de vistas */}
      {vistaActual === "Home" && <Home cambiarVista={setVistaActual} />}
      {vistaActual === "Cartelera" && <Cartelera cambiarVista={setVistaActual} />}
      {vistaActual === "detalle" && <Detalle cambiarVista={setVistaActual} />}
      {vistaActual === "Snacks" && <Snacks />}
      {vistaActual === "Otros" && <Otros />}
    </div>
  )
}

export default App
