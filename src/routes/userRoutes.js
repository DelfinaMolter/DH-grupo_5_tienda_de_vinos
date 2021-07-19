const express = require('express');
const router = express.Router();
const uploadFile = require('../middlewares/multerMiddlewares');
const userController = require('../controllers/userController')

//Middlewares
const validations = require('../middlewares/validationRegisterMiddlewares')

router.get('/', userController.users)
router.get('/login', userController.login)
router.get('/registro', userController.register)
router.get('/perfil', userController.profile)


router.post('/registro', validations, userController.processRegister);

module.exports = router