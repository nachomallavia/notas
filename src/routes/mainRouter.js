const express = require('express');
const router = express.Router();
const path = require('path');

const notaController = require('../controllers/notaController')

router.get('/', notaController.main);

router.get('/detail', notaController.detail);

module.exports = router;