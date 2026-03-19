import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Políticas */}
        <div className="footer-section">
          <h3>Políticas Legales</h3>

          {/* Usamos etiqueta Link en lugar de span con onClick */}
          <Link to="/privacidad" className="footer-link">
            Política de privacidad
          </Link>

          <Link to="/terminos" className="footer-link">
            Términos y condiciones
          </Link>
        </div>

        {/* Contacto */}
        <div className="footer-section">
          <h3>Contacto</h3>

          <Link to="/contacto" className="footer-link">
            Atención a clientes
          </Link>

          <p>Teléfono: +52 999 123 4567</p>
          <p>Email: soporte@cineapp.com</p>
        </div>

        {/* Redes */}
        <div className="footer-section">
          <h3>Redes sociales</h3>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>X (Twitter)</p>
          <p>LinkedIn</p>
        </div>

      </div>

      <p className="footer-copy">
        © 2026 CineApp - Todos los derechos reservados
      </p>

    </footer>
  )
}

export default Footer