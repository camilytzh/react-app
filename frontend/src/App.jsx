import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"

import Home from "./pages/Home";
import Institucion from "./pages/Institucion";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import Footer from "./components/Footer";
import Login from "./pages/Login";

function App() {
  return (
  <>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/institucion" element={<Institucion />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
    </Routes>
    <Footer />
  </>
  )
}
export default App