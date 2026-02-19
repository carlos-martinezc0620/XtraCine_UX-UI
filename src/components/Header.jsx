function Header({ cambiarVista }) {
  return (
    <header className="header">
      <div className="header-container">
        <h1 onClick={() => cambiarVista("Home")}>
          XtraCine
        </h1>

        <nav>
          <span onClick={() => cambiarVista("Home")}>
            Inicio
          </span>

          <span onClick={() => cambiarVista("Cartelera")}>
            Cartelera
          </span>

          <span onClick={() => cambiarVista("Snacks")}>
            Alimentos
          </span>
          <span onClick={() => cambiarVista("Otros")}>
            Otros
          </span>
        </nav>
      </div>
    </header>
  )
}

export default Header
