import { Routes, Route } from 'react-router-dom';

import Home from "../pages/Home";
import Cartelera from "../pages/Cartelera";
import Detalle from "../pages/Detalle";
import Snacks from "../pages/Snacks";
import Otros from "../pages/Otros";
import Privacidad from "../pages/Privacidad";
import Terminos from "../pages/Terminos";
import Contacto from "../pages/Contacto";

function AppRouter({ favoritas, agregarFavorito }) {
  return (
    <Routes>
      <Route path="/" element={<Home agregarFavorito={agregarFavorito} />} />
      <Route path="/cartelera" element={<Cartelera agregarFavorito={agregarFavorito} favoritas={favoritas} />} />
      <Route path="/pelicula/:id" element={<Detalle />} />
      <Route path="/snacks" element={<Snacks />} />
      <Route path="/otros" element={<Otros />} />
      <Route path="/privacidad" element={<Privacidad />} />
      <Route path="/terminos" element={<Terminos />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  );
}

export default AppRouter;
