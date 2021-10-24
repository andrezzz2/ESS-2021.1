var express = require('express');
var router = express.Router();
const clientesController = require('../controllers/clientes.js');

/* GET users listing. */
router.get('/', clientesController.get);

module.exports = router;
