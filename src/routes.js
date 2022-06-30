const express = require('express')
const router = express.Router();


// Apartir desse momento nosso arquivo de rota enxerga o CarroController.js
const CarroController = require('./controllers/CarroController')

router.get('/carros', CarroController.BuscarTodos);
router.get('/carro/:codigo', CarroController.buscarUm)

module.exports = router;