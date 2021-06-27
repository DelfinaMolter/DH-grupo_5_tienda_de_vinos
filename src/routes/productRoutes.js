const express = require('express');
const router = express.Router();

const product = require('../controllers/productController')

router.get('/detalle', product.detalle)
router.get('/crear', product.create)
router.get('/editar', product.edit)
module.exports = router