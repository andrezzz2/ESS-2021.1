var express = require('express');
var router = express.Router();
const clientesController = require('../controllers/clientes.js');

router.post('/', clientesController.cadastrar);
router.get('/', clientesController.get);
router.post('/Historico', clientesController.cadastrarPedidos);

module.exports = router;
