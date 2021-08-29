const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');



//Middlewares
const multer = require('multer');
const uploadFile = require('../middlewares/multerMiddlewares')
const validations= require('../middlewares/validationProductsMiddlewares');
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
router.get('/crear',productControllerDB.create);
router.post('/crear',[
    upload.single('img'),validations],
    productControllerDB.store);



//Actualizacion de productos
router.get('/editar/:id' ,productControllerDB.edit);
router.put('/edit/:id', upload.single('img') ,productControllerDB.update);



router.delete('/destroy/:id', productControllerDB.destroy);

module.exports = router