const router = require('express').Router();
const { crearContacto, getContactos } = require('../controllers/contactoController');

router.post('/', crearContacto);
router.get('/', getContactos);
    
module.exports = router;