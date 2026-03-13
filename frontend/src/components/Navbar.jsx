import logo from '../assets/logo-atm.png';
import menu from '../assets/icons/menu-icon.svg';
import { Link } from "react-router-dom";
import { useState } from 'react';

const Navbar = () => {
    const navLinks = "text-white text-sm font-bold hover:text-blue-300";
    const menuStyle = "text-gray-700 text-sm font-medium hover:text-white hover:bg-blue-400 rounded-sm px-3 py-2 transition-colors";
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="sticky top-0 bg-blue-950 text-white px-4 py-2.5 z-50 shadow-md shadow-gray-900">
                <div className="max-w-7xl mx-auto flex items-center">
                    <div className='flex items-center gap-2'>
                        <button className='md:hidden' onClick={() => setMenuOpen(true)}>
                            <img src={menu} alt="Menu" className='h-8 w-8 hover:scale-110 transition-transform cursor-pointer'/>    
                        </button>
                    </div>

                    <Link to="/">
                        <img src={logo} alt="Logo" className="h-12 w-auto"/>
                    </Link>

                    <ul className=" hidden md:flex gap-10 ml-auto">
                        <li><Link to="/" className={navLinks}>INICIO</Link></li>
                        <li><Link to="/institucion" className={navLinks}>INSTITUCIÓN</Link></li>
                        <li><Link to="/servicios" className={navLinks}>SERVICIOS</Link></li>
                        <li><Link to="/contacto" className={navLinks}>CONTACTO</Link></li>
                    </ul>
                </div>
            </nav>

            {menuOpen && (
                <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setMenuOpen(false)}/>
            )}

            <div className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300
                ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="p-6 flex flex-col">
                <Link to="/" onClick={() => setMenuOpen(false)} className={menuStyle}>
                    INICIO
                </Link>
                <Link to="/institucion" onClick={() => setMenuOpen(false)} className={menuStyle}>
                    INSTITUCIÓN
                </Link>
                <Link to="/servicios" onClick={() => setMenuOpen(false)} className={menuStyle}>
                    SERVICIOS
                </Link>
                <Link to="/contacto" onClick={() => setMenuOpen(false)} className={menuStyle}>
                    CONTACTO
                </Link>
                </div>
            </div>
        </>
    );
};
export default Navbar;