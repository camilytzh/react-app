const router = require('express').Router();
const { agendarCita, getCitas, cancelarCita } = require('../controllers/citasController');
const verifyToken = require('../middleware/authMiddleware');

router.post('/', verifyToken, agendarCita);
router.get('/', verifyToken, getCitas);
router.delete('/:id/cancelar', verifyToken, cancelarCita);

 module.exports = router;