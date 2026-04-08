import loginImage from '../assets/login-img.png';
import logo from '../assets/logo-atm.png';
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="flex h-screen overflow-hidden">
            <div className="w-full lg:w-3/5 bg-blue-950 flex flex-col justify-center items-center px-6 py-12">
                <div className="w-full max-w-md mb-8 justify-center items-center text-center">
                    <div className='flex justify-center items-center'>
                        <Link to="/">
                            <img src={logo} alt="Logo ATM" className="h-12 w-auto mb-6" />
                        </Link>
                    </div>
                    <h1 className="text-2xl font-bold text-white">Iniciar sesión</h1>
                    <form>
                        <input type="email" placeholder="Correo electrónico" required className="w-full px-4 py-2 mt-4 rounded-md bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                        <input type="password" placeholder="Contraseña" required className="w-full px-4 py-2 mt-4 rounded-md bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                        <button type="submit" className="w-full bg-blue-400 text-white py-2 mt-6 rounded-md hover:bg-blue-500 transition-colors">Iniciar sesión</button>
                    </form>
                    <p className="text-gray-300 text-sm mt-6">No tienes una cuenta? <Link to="/register" className="text-blue-300 hover:underline">Regístrate aquí</Link></p>
                </div>
            </div>
            <div className="hidden lg:block lg:w-2/5">
                <img src={loginImage} alt="Login section" className="w-full h-full object-cover" />
            </div>
            
        </div>
    );
}

export default Login;