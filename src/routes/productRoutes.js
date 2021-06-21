const express = require('express');
const router = express.Router();

const product = require('../controllers/productController')

router.get('/detalle', product.detalle)
router.get('/create', product.create)
router.get('/edit', product.edit)
module.exports = router