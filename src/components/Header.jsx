import { NavLink, Link } from "react-router-dom"; // Link y NavLink permiten navegar sin recargar la página

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Link simple al inicio, no nos interesa el estado activo aquí */}
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1>XtraCine</h1>
        </Link>

        {/* Usamos NavLink para el menú. Este automáticamente le pone la clase "active" si estás en esa página */}
        <nav>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Inicio
          </NavLink>

          <NavLink to="/cartelera" className={({ isActive }) => (isActive ? "active" : "")}>
            Cartelera
          </NavLink>

          <NavLink to="/snacks" className={({ isActive }) => (isActive ? "active" : "")}>
            Alimentos
          </NavLink>
          
          <NavLink to="/otros" className={({ isActive }) => (isActive ? "active" : "")}>
            Otros
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
