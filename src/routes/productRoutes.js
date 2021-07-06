const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.products);
router.get('/detalle/:id', productController.detalle);
router.get('/crear', productController.create);
router.get('/editar', productController.edit);


router.post('/crear', productController.save)

//router.put("/update/:id",[upload.single("image")],product.update)


module.exports = router