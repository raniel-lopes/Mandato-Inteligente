const express = require('express');
const router = express.Router();
const cidadaoController = require('../controllers/cidadaoController'); // Atualize o nome do controller

// Rota para criar um novo cidadão
router.post('/cidadaos', cidadaoController.createCidadao);

// Rota para listar todos os cidadãos
router.get('/cidadaos', cidadaoController.getCidadaos);

// Buscar cidadão por ID
router.get('/cidadaos/:id', cidadaoController.getCidadaoPorId);

// Atualizar cidadão
router.put('/cidadaos/:id', cidadaoController.atualizarCidadao);

// Excluir cidadão
router.delete('/cidadaos/:id', cidadaoController.excluirCidadao);

module.exports = router;