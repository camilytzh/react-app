const db = require('../db');

const crearContacto = async (req, res) => {
    const { nombre, apellido, email, telefono, mensaje } = req.body;
    try {
        if (!nombre || !apellido || !email || !telefono || !mensaje) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }
        await db.query(
            'INSERT INTO contacto (nombre, apellido, email, telefono, mensaje) VALUES (?, ?, ?, ?, ?)',
            [nombre, apellido, email, telefono, mensaje]
        );
        res.status(201).json({ message: 'Mensaje enviado exitosamente' });
    } catch (err) {
        res.status(500).json({ message: 'Error en el servidor', err });
    }
};

const getContactos = async (_, res) => {
    try {
        const [contactos] = await db.query(
            'SELECT * FROM contacto ORDER BY created_at DESC'
        );
        res.json(contactos);
    } catch (err) {
        res.status(500).json({ message: 'Error en el servidor', err });
    }
};

module.exports = { crearContacto, getContactos };