function Terminos({ cambiarVista }) {
  return (
    <div>

      <h1>Términos y Condiciones</h1>

      <p>
        El uso de esta plataforma implica la aceptación de las reglas
        establecidas para la compra de boletos, uso del contenido
        y navegación dentro del sitio web.
      </p>

      <p>
        La empresa puede modificar horarios de funciones,
        disponibilidad de asientos o precios sin previo aviso.
      </p>

      <button onClick={() => cambiarVista("Home")}>
        Volver al inicio
      </button>

    </div>
  )
}

export default Terminos