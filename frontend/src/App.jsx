import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import { useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Institucion from "./pages/Institucion";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  const location = useLocation();
  const isAuthPage = ['/login', '/register'].includes(location.pathname);

  return (
  <>
    {!isAuthPage && <Navbar />}
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/institucion" element={<Institucion />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
    </Routes>
    {!isAuthPage && <Footer />}
  </>
  )
}
export default App