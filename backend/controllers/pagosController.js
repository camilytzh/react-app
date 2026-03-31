const db = require('../db');

const realizarPago = async (req, res) => {
    const { concepto, monto } = req.body;
    const usuario_id = req.usuario.id;

    try {        
        if (!concepto || !monto) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }
        if(monto <= 0){
            return res.status(400).json({ message: 'El monto debe ser mayor a cero' });
        }
        const [result] = await db.query(
            'INSERT INTO pagos (usuario_id, concepto, monto, estado, fecha) VALUES (?, ?, ?, "pagado", NOW())',
            [usuario_id, concepto, monto]
        );
        res.status(201).json({ message: 'Pago realizado exitosamente', id: result.insertId });

    } catch (err) {
        res.status(500).json({ message: 'Error en el servidor', err });
    }
};