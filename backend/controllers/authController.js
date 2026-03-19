const db = require('../db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    const { nombre, apellido, email, password, cedula } = req.body;

    try {
        const [existingUser] = await db.query(
            'SELECT id FROM users WHERE email = ? OR cedula = ?', 
            [email, cedula]);

        if (existingUser.length > 0) {
            return res.status(400).json({ message: 'El email o cédula ya están en uso' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const [result] = await db.query(
            'INSERT INTO users (nombre, apellido, email, password, cedula) VALUES (?, ?, ?, ?, ?)',
            [nombre, apellido, email, hashedPassword, cedula],
        );
        res.status(201).json({ message: 'Usuario registrado exitosamente', id: result.insertId });

    } catch (err) {
        res.status(500).json({ message: 'Error en el servidor', err });
    }
};