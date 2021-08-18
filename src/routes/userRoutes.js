const express = require('express');
const router = express.Router();
const userControllerDB = require('../controllers/userControllerDB')
const multer = require('multer');

// const userController = require('../controllers/userController')

// Middlewares
const validations = require('../middlewares/validationRegisterMiddlewares');
const controller = require('../controllers/mainController');
const guestMiddlewares = require('../middlewares/guestMiddlewares');
const uploadFile = require('../middlewares/multerMiddlewares')

const upload = multer({storage:uploadFile('users')});

// router.get('/', userController.users)

// // //Formulario de Login
// router.get('/login', guestMiddlewares, userController.login)
// router.get('/registro', guestMiddlewares, userController.register)
// router.get('/perfil', userController.profile)

// //Procesar el Login
// router.post('/login', userController.loginProcess)

// router.post('/registro',[upload.single('img'), validations], userController.processRegister);

// //Logout
// //router.get('/logout/', userController.logout);
router.get('/perfil', userControllerDB.list)
router.get("/crear", userControllerDB.create);

module.exports = router