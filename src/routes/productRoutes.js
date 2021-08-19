const express = require('express');
const router = express.Router();
// const productController = require('../controllers/productController');

//Middlewares
const multer = require('multer');
const uploadFile = require('../middlewares/multerMiddlewares')

const upload = multer({storage:uploadFile('products')});


// router.get('/', productController.products);
// router.get('/detalle/:id', productController.detalle);
// router.get('/crear', productController.create);
// router.get('/editar/:id', productController.edit);


// router.post('/crear', upload.single('product-img'), productController.save)
// router.delete('/delete/:id', productController.delete)
// router.put("/edit/:id", productController.update)

const productControllerDB = require('../controllers/productControllerDB');

router.get('/', productControllerDB.list);

router.get('/detalle/:id', productControllerDB.detalle);

router.delete('/destroy/:id', productControllerDB.destroy);

module.exports = router