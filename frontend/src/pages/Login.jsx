import { useState }  from 'react';
import loginImage from '../assets/login-img.png';
import logo from '../assets/logo-atm.png';
import { Link } from "react-router-dom";

const Login = () => {
    const inputClasses = "w-full px-4 py-2 rounded-md bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400";
    const labelClasses = "text-sm font-medium text-gray-300";

    const [form, setForm] = useState({
        email: '',
        password: ''
    });
    const[error, setError] = useState('');
    const[loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        preventDefault();
        setError('');
        setLoading(true);
        //authcontext backend call
        setLoading(false);
    }

    return (
        <div className="flex h-screen overflow-hidden">
            <div className="w-full lg:w-1/2 bg-blue-950 flex flex-col justify-center items-center px-6 py-12">
                <Link to="/" className="mb-8">
                    <img src={logo} alt="Logo ATM" className="h-20 w-auto" />
                </Link>
                <h1 className="text-2xl font-bold text-white mb-4 text-center">Iniciar sesión</h1>
                <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4">
                    {error && (
                    <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-lg">
                        {error}
                    </div>
                )}
                    <div className="flex flex-col gap-1">
                        <label className={labelClasses}>Correo electrónico</label>
                        <input type="email" name="email" placeholder="usuario@correo.com" required onChange={handleChange} className={inputClasses} />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className={labelClasses}>Contraseña</label>
                        <input type="password" name="password" placeholder="••••••••••" required onChange={handleChange} className={inputClasses} />
                    </div>
                    <button type="submit" disabled ={loading} className="w-full bg-blue-400 text-white py-2 mt-4 rounded-md hover:bg-blue-500 transition-colors duration-200 disabled:opacity-60">{loading ? 'Iniciando sesión...' : 'Iniciar sesión'}</button>
                </form>
                <p className="text-gray-300 text-sm mt-6">No tienes una cuenta? <Link to="/register" className="text-blue-300 hover:underline">Regístrate aquí</Link></p>
            </div>
            
            <div className="hidden lg:block lg:w-1/2">
                <img src={loginImage} alt="Login section" className="w-full h-full object-cover" />
            </div>
            
        </div>
    );
}

export default Login;