const express = require('express');
const router = express.Router();
const path = require('path');


const notaController = require('../controllers/notaController')

router.get('/', notaController.main);
router.post('/crear',notaController.create);
router.delete('/:id',notaController.delete);

router.get('/detail/:id', notaController.detail);
router.post('/detail/:id', notaController.update);

module.exports = router;