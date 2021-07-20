const express = require('express');
const router = express.Router();

const user = require('../controllers/userController')

router.get('/', user.users)
router.get('/login', user.login)
router.get('/registro', user.register)
router.get('/perfil', user.profile)


router.post('/login', userController.processLogin)

module.exports = router