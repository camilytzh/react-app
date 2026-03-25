const router = require('express').Router();
const { crearCita, getCitas, cancelarCita } = require('../controllers/citasController');
const verifyToken = require('../middleware/authMiddleware');

router.post('/', verifyToken, crearCita);
router.get('/', verifyToken, getCitas);
router.delete('/:id/cancelar', verifyToken, cancelarCita);

 module.exports = router;