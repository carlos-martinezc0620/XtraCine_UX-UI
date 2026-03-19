function Contacto({ cambiarVista }) {
  return (
    <div>

      <h1>Atención a Clientes</h1>

      <p>
        Si tienes dudas sobre tus compras, funciones o disponibilidad
        de boletos puedes comunicarte con nosotros.
      </p>

      <p>Teléfono: +52 999 123 4567</p>
      <p>Email: soporte@cineapp.com</p>

      <p>
        Nuestro horario de atención es de lunes a domingo
        de 9:00 AM a 9:00 PM.
      </p>

      <button onClick={() => cambiarVista("Home")}>
        Volver al inicio
      </button>

    </div>
  )
}

export default Contacto