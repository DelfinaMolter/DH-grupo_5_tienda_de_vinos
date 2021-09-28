const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');



//Middlewares
const multer = require('multer');
const uploadFile = require('../middlewares/multerMiddlewares')
const validations= require('../middlewares/validationProductsMiddlewares');
const notAdminMiddleware = require('../middlewares/notAdminMiddleware')
const upload = multer({storage:uploadFile('products')});

//Middlewares Products

//router.get("/crear", validationProductsMiddlewares, productControllerDB.create);

//router.post("/crear",[upload.single('img'), validations], productControllerDB.create);


// router.get('/', productController.products);
// router.get('/detalle/:id', productController.detalle);
// router.get('/crear', productController.create);
// router.get('/editar/:id', productController.edit);


// router.post('/crear', upload.single('img'), productController.save)
// router.delete('/delete/:id', productController.delete)
// router.put("/edit/:id", productController.update)

const productControllerDB = require('../controllers/productControllerDB');

router.get('/', productControllerDB.list);
router.get('/detalle/:id', productControllerDB.detail);
router.get('/crear',notAdminMiddleware, productControllerDB.create);
router.post('/crear',[upload.single('img'), validations, notAdminMiddleware], productControllerDB.store);

//carrito
router.get('/carrito', productControllerDB.carrito)  

//Actualizacion de productos
router.get('/editar/:id', notAdminMiddleware, productControllerDB.edit);
router.put('/editar/:id', [upload.single('img'), validations, notAdminMiddleware], productControllerDB.update);


router.get('/buscar', productControllerDB.search);

router.delete('/destroy/:id', notAdminMiddleware, productControllerDB.destroy);


module.exports = router