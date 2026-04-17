import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-atm.png';
import loginImage from '../assets/login-img.png';

const Register = () => {
    const [form, setForm] = useState({
        nombre: '',
        apellido: '',
        cedula: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const inputClass = "w-full px-4 py-2 rounded-md bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400";
    const labelClass = "text-sm font-medium text-gray-300";

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (form.password !== form.confirmPassword) {
            return setError('Las contraseñas no coinciden');
        }

        setLoading(true);
        //authcontext backend call
        setLoading(false);
    };
    return (
        <div className="flex h-screen overflow-hidden">
            <div className="w-full lg:w-1/2 bg-blue-950 flex flex-col justify-center items-center px-6 py-12">
                <Link to="/" className="mb-6">
                    <img src={logo} alt="Logo ATM" className="h-20 w-auto" />
                </Link>
                <h1 className="text-2xl font-bold text-white text-center mb-4">Crear cuenta</h1>

                <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4">

                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-lg">
                            {error}
                        </div>
                    )}

                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1">
                            <label className={labelClass}>Nombre</label>
                            <input type="text" name="nombre" placeholder="Juan" required onChange={handleChange} className={inputClass} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className={labelClass}>Apellido</label>
                            <input type="text" name="apellido" placeholder="Pérez" required onChange={handleChange} className={inputClass} />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className={labelClass}>Cédula</label>
                        <input type="text" name="cedula" placeholder="0912345678" required onChange={handleChange} className={inputClass} />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className={labelClass}>Correo electrónico</label>
                        <input type="email" name="email" placeholder="ejemplo@correo.com" required onChange={handleChange} className={inputClass} />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className={labelClass}>Contraseña</label>
                        <input type="password" name="password" placeholder="••••••••" required onChange={handleChange} className={inputClass} />
                    </div>


                    <div className="flex flex-col gap-1">
                        <label className={labelClass}>Confirmar contraseña</label>
                        <input type="password" name="confirmPassword" placeholder="••••••••" required onChange={handleChange} className={inputClass} />
                    </div>

                    <button type="submit" disabled={loading} className="w-full bg-blue-400 text-white py-2 mt-2 rounded-md hover:bg-blue-500 transition-colors duration-200 disabled:opacity-60">
                        {loading ? 'Creando cuenta...' : 'Crear cuenta'}
                    </button>

                </form>

                <p className="text-gray-300 text-sm mt-6">
                    ¿Ya tienes una cuenta?{' '}
                    <Link to="/login" className="text-blue-300 hover:underline">Inicia sesión aquí</Link>
                </p>

            </div>
            <div className="hidden lg:block lg:w-1/2">
                <img src={loginImage} alt="Register" className="w-full h-full object-cover" />
            </div>
        </div> 
    );
}
export default Register;