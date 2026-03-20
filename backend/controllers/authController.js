const db = require('../db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    const { nombre, apellido, email, password, cedula } = req.body;

    try {
        const [existingUser] = await db.query(
            'SELECT id FROM usuarios WHERE email = ? OR cedula = ?', 
            [email, cedula]);

        if (existingUser.length > 0) {
            return res.status(400).json({ message: 'El email o cédula ya están en uso' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const [result] = await db.query(
            'INSERT INTO usuarios (nombre, apellido, email, password, cedula) VALUES (?, ?, ?, ?, ?)',
            [nombre, apellido, email, hashedPassword, cedula],
        );
        res.status(201).json({ message: 'Usuario registrado exitosamente', id: result.insertId });

    } catch (err) {
        res.status(500).json({ message: 'Error en el servidor', err });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const [users] = await db.query(
            'SELECT * FROM usuarios WHERE email = ?', 
            [email]
        );
        if(users.length === 0) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        const userFound = users[0];

        const match = await bcrypt.compare(password, userFound.password);
        if(!match) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        const token = jwt.sign(
            { id: userFound.id, nombre: userFound.nombre }, 
            process.env.JWT_SECRET, 
            { expiresIn: '1d' }
        );
        res.json({ token, nombre: userFound.nombre, apellido: userFound.apellido });

    } catch (err) {
        res.status(500).json({ message: 'Error en el servidor', err });
    }
}

module.exports = { register, login };