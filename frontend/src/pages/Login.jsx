import loginImage from '../assets/login-img.png';

const Login = () => {
    return (
        <div className="flex h-screen overflow-hidden">
            <div className="w-full lg:w-3/5 bg-white">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Iniciar Sesión</h2>
            </div>
            <div className="hidden lg:block lg:w-2/5">
                <img src={loginImage} alt="Login section" className="w-full h-full object-cover" />
            </div>
            
        </div>
    );
}

export default Login;