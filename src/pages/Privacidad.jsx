function Privacidad({ cambiarVista }) {
  return (
    <div>

      <h1>Política de Privacidad</h1>

      <p>
        Esta plataforma recopila información básica para mejorar la experiencia
        de los usuarios dentro del sistema de cine.
      </p>

      <button onClick={() => cambiarVista("Home")}>
        Volver al inicio
      </button>

    </div>
  )
}

export default Privacidad