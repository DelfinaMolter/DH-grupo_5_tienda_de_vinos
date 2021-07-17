const express = require('express');
const router = express.Router();
const uploadFile = require('../middlewares/multerMiddlewares');
const user = require('../controllers/userController')

router.get('/login', user.login)
router.get('/registro', user.register)

router.post('/registro',  [uploadFile.single('avatar'), ACAVANLASVALIDACIONES], user.processRegister);

module.exports = router