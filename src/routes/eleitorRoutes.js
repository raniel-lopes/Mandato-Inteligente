const express = require('express');
const router = express.Router();
const eleitorController = require('../controllers/eleitorController');

// Rota para criar um novo eleitor
router.post('/eleitores', eleitorController.createEleitor);
// Rota para listar todos os eleitores
router.get('/eleitores', eleitorController.getEleitores);
// Buscar eleitor por ID
router.get('/eleitores/:id', eleitorController.getEleitorPorId);
// Atualizar eleitor
router.put('/eleitores/:id', eleitorController.atualizarEleitor);
// Excluir eleitor
router.delete('/eleitores/:id', eleitorController.excluirEleitor);


module.exports = router;
