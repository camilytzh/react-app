const db = require('../db');

const agendarCita = async (req, res) => {
    const { fecha,  hora, motivo} = req.body;
    const usuario_id = req.usuario.id;

    try {
        if (!fecha || !hora || !motivo) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }
        const [existingCita] = await db.query(
            'SELECT id FROM citas WHERE fecha = ? AND hora = ?',
            [fecha, hora]
        );
        if (existingCita.length > 0) {
            return res.status(400).json({ message: 'Ya tienes una cita programada para esta fecha y hora' });
        }

        const result = await db.query(
            'INSERT INTO citas (usuario_id, fecha, hora, motivo) VALUES (?, ?, ?, ?)',
            [usuario_id, fecha, hora, motivo]
        );
        res.status(201).json({ message: 'Cita agendada exitosamente' });
    } catch (err) {
        res.status(500).json({ message: 'Error en el servidor', err });
    }
};

const getCitas = async (req, res) => {
    const usuario_id = req.usuario_id;

    try {
        await db.query(
            `UPDATE citas SET estado = 'finalizada' 
             WHERE usuario_id = ? AND estado = 'pendiente' 
             AND CONCAT(fecha, ' ', hora) < NOW()`,
            [usuario_id]
        );

        const [citas] = await db.query(
            'SELECT * FROM citas WHERE usuario_id = ? ORDER BY fecha ASC, hora ASC',
            [usuario_id]
        );
        res.json(citas);
    } catch (err) {
        res.status(500).json({ message: 'Error en el servidor', err });
    }
};

const cancelarCita = async (req, res) => {
    const { id } = req.params;
    const usuario_id = req.usuario_id;

    try {
        const [cita] = await db.query(
            'SELECT id FROM citas WHERE id = ? AND usuario_id = ?',
            [id, usuario_id]
        );
        if (cita.length === 0) {
            return res.status(404).json({ message: 'Cita no encontrada' });
        }
        if (rows[0].estado === 'finalizada') {
            return res.status(400).json({ message: 'No puedes cancelar una cita finalizada' });
        }

        await db.query(
            'UPDATE citas SET estado = "cancelada" WHERE id = ?',
             [id]
        );

        res.json({ message: 'Cita cancelada exitosamente' });
    } catch (err) {
        res.status(500).json({ message: 'Error en el servidor', err });
    }
};

module.exports = { agendarCita, getCitas, cancelarCita };