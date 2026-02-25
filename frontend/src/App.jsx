import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"

import Home from "./pages/Home";
import Institucion from "./pages/Institucion";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";

function App() {
  return (
  <>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/institucion" element={<Institucion />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
    </Routes>
  </>
  )
}
export default App