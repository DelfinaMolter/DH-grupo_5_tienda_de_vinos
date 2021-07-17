const express = require('express');
const router = express.Router();
const uploadFile = require('../middlewares/multerMiddlewares');
const user = require('../controllers/userController')

router.get('/', user.users)
router.get('/login', user.login)
router.get('/registro', user.register)
router.get('/perfil', user.profile)

router.post('/registro',  [uploadFile.single('avatar'), ACAVANLASVALIDACIONES], user.processRegister);

module.exports = router