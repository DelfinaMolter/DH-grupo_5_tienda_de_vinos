const express = require('express');
const router = express.Router();

const product = require('../controllers/productController')

router.get('/detalle', product.detalle)

module.exports = router