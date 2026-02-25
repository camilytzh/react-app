import logo from '../assets/logo-atm.png';
import { Link } from "react-router-dom";

function  Navbar() {
    const navLinks = "text-white text-base font-bold font-sans hover:text-blue-300";
    return (
        <nav className="sticky top-0 bg-blue-950 text-white px-8 py-4 z-50 shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link to="/"><img src={logo} alt="Logo" className="h-15 w-auto"/></Link>
                <ul className="flex gap-10">
                    <li><Link to="/" className={navLinks}>INICIO</Link></li>
                    <li><Link to="/institucion" className={navLinks}>INSTITUCIÓN</Link></li>
                    <li><Link to="/servicios" className={navLinks}>SERVICIOS</Link></li>
                    <li><Link to="/contacto" className={navLinks}>CONTACTO</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;