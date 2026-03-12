import logo from '../assets/logo-atm.png';
import menu from '../assets/icons/menu-icon.svg';
import { Link } from "react-router-dom";

const Navbar = () => {
    const navLinks = "text-white text-base text-sm font-bold hover:text-blue-300";
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
        <nav className="sticky top-0 bg-blue-950 text-white px-4 py-2.5 z-50 shadow-md shadow-gray-900">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link to="/"><img src={logo} alt="Logo" className="h-12 w-auto hidden md:block"/></Link>
                <ul className="flex gap-10">
                    <li><Link to="/" className={navLinks}>INICIO</Link></li>
                    <li><Link to="/institucion" className={navLinks}>INSTITUCIÓN</Link></li>
                    <li><Link to="/servicios" className={navLinks}>SERVICIOS</Link></li>
                    <li><Link to="/contacto" className={navLinks}>CONTACTO</Link></li>
                </ul>

                <button className='md:hidden' onClick={() => setMenuOpen(true)}>
                    <img src={menu} alt="Menu" className='h-8 w-8'/>    
                </button>
                
            </div>
        </nav>
    </>
    );
};
export default Navbar;