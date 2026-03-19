import { useState } from "react"
import FoodCard from "../components/FoodCard"

function Snacks() {

  // Estados del formulario
  const [nombre, setNombre] = useState("")
  const [correo, setCorreo] = useState("")
  const [mensaje, setMensaje] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    if (!nombre || !correo) {
      setMensaje("Por favor completa todos los campos")
      return
    }

    setMensaje(`Gracias ${nombre}, te registraste con el correo ${correo} 🎉`)

    setNombre("")
    setCorreo("")
  }

  return (
    <main className="snacks-container">

      <h2>Bebidas</h2>
      <div className="food-grid">
        <FoodCard
          name="Refresco Grande"
          image="https://api-middleware-mcd.mcdonaldscupones.com/media/image/product$CCO%20GDE%20300X225.png/200/200/original?country=mx"
          price="89"
        />
        <FoodCard
          name="Malteada"
          image="https://images.unsplash.com/photo-1577805947697-89e18249d767"
          price="95"
        />
      </div>

      <h2>Comestibles</h2>
      <div className="food-grid">
        <FoodCard
          name="Hot Dog"
          image="https://images.unsplash.com/photo-1550547660-d9450f859349"
          price="75"
        />
        <FoodCard
          name="Nachos"
          image="https://pidetealgo.atodochimal.club/wp-content/uploads/2023/12/nachos.jpg"
          price="85"
        />
      </div>

      <h2>Snacks y Dulces</h2>
      <div className="food-grid">
        <FoodCard
          name="Palomitas"
          image="https://images.unsplash.com/photo-1585647347384-2593bc35786b"
          price="70"
        />
        <FoodCard
          name="Gomitas"
          image="https://misgomitas.com/wp-content/uploads/2024/06/origen-de-las-gomitas-min-1.webp"
          price="55"
        />
      </div>

      {/* Formulario de promociones */}
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Regístrate para promociones!</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            style={{ marginRight: "10px" }}
          />

          <input
            type="email"
            placeholder="Tu correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            style={{ marginRight: "10px" }}
          />

          <button type="submit">
            Registrarse
          </button>

        </form>

        {mensaje && (
          <p style={{ marginTop: "20px", fontWeight: "bold" }}>
            {mensaje}
          </p>
        )}
      </div>

    </main>
  )
}

export default Snacks