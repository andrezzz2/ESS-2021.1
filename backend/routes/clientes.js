var express = require('express');
var router = express.Router();
const clientesController = require('../controllers/clientes.js');

router.post('/cadastrar', clientesController.cadastrar);
router.post('/remover', clientesController.remover);

module.exports = router;
