import OtherCard from "../components/OtherCard"

function Otros() {
  return (
    <main className="otros-container">

      <h2>Promociones</h2>
      <div className="otros-grid">
        <OtherCard
          title="Martes 2x1"
          description="Disfruta de boletos al 2x1 todos los martes."
          image="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba"
        />

        <OtherCard
          title="Combo Familiar"
          description="Descuento especial en combos grandes."
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpTai4kRAArLsl3W4PJjK4p6i9v-N4zrIufw&s"
        />
      </div>

      <h2>Membresías</h2>
      <div className="otros-grid">
        <OtherCard
          title="Club XtraCine"
          description="Acumula puntos y recibe recompensas."
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtx__cL3B4VyzWL_xZ5te1KC4MfC_f2NFwTw&s"
        />
      </div>

      <h2>Formatos Especiales</h2>
      <div className="otros-grid">
        <OtherCard
          title="IMAX"
          description="Vive la experiencia en pantalla gigante."
          image="https://i.blogs.es/47e175/5shooting/500_333.png"
        />

        <OtherCard
          title="4DX"
          description="Siente el movimiento y efectos especiales."
          image="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c"
        />
      </div>

    </main>
  )
}

export default Otros
