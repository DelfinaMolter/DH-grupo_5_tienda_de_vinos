const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

//Middlewares
const validations = require('../middlewares/validationRegisterMiddlewares')
const uploadFile = require('../middlewares/multerMiddlewares')

router.get('/', userController.users)
router.get('/login', userController.login)
router.get('/registro', userController.register)
router.get('/perfil', userController.profile)


router.post('/registro',[uploadFile.single('img'), validations], userController.processRegister);

module.exports = router