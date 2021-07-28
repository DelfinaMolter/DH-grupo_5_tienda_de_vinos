const express = require('express');
const router = express.Router();
const uploadFile = require('../middlewares/multerMiddlewares');
const userController = require('../controllers/userController')


//Middlewares
const validations = require('../middlewares/validationRegisterMiddlewares');
//const login = require('../middlewares/userLoginValidations');
const controller = require('../controllers/mainController');
const admin = require('../middlewares/adminMiddlewares');
const guestMiddlewares = require('../middlewares/guestMiddlewares');

router.get('/', userController.users)

//Formulario de Login
router.get('/login', guestMiddlewares, userController.login)
router.get('/registro', guestMiddlewares, userController.register)
router.get('/perfil', userController.profile)

//Procesar el Login
router.post('/login', userController.loginProcess)

router.post('/registro', validations, userController.processRegister);

//Logout
//router.get('/logout/', userController.logout);

//router.post('/login', validations, userController.users);
//router.post("/access",[login,admin], controller.access) 
//validations, userController.processRegister);

//------------------ROUTER LOGIN-------------------
/*router.post('/login', validations/*,  [
    check('Usuari@').isUser().whitMessage('Usuario inválido'),
    check('Contraseña').isLength({min: 6}).whitMessage('La contraseña debe contener al menos 6 caractéres')
] ,userController.processLogin);*/

module.exports = router