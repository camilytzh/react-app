const router = require('express').Router();
const { realizarPago, getPagos } = require('../controllers/pagosController');
const verifyToken = require('../middleware/authMiddleware');

router.post('/', verifyToken, realizarPago);
router.get('/', verifyToken, getPagos);

module.exports = router;