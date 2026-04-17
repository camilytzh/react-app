import { useState } from 'react';

const Register = () => {
    const [form, setForm] = useState({
        nombre: '',
        apellido: '',
        cedula: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
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
        <div>
            <h1>Register Page</h1>
        </div> 
    );
}
export default Register;